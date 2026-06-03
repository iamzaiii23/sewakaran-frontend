<?php

namespace App\Http\Controllers;

use App\Models\Transaksi;
use App\Models\Barang;
use Illuminate\Http\Request;

class TransaksiController extends Controller
{
    public function index()
    {
        $transaksi = Transaksi::with([
            'barang',
            'admin',
            'penyewa'
        ])->get();

        return response()->json([
            'success' => true,
            'message' => 'Data transaksi berhasil diambil',
            'data' => $transaksi
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'id_barang' => 'required|exists:barangs,id_barang',
            'id_penyewa' => 'required|exists:penyewas,id_penyewa',
            'tanggal_sewa' => 'required|date',
            'tanggal_kembali' => 'required|date|after_or_equal:tanggal_sewa',
            'jumlah' => 'required|integer|min:1',
            'total_bayar' => 'required|integer'
        ]);

        // Cari barang
        $barang = Barang::find($request->id_barang);

        // VALIDASI STOK
        if ($barang->stok < $request->jumlah) {
            return response()->json([
                'success' => false,
                'message' => 'Stok barang tidak mencukupi'
            ], 400);
        }

        // CEK BENTROK TANGGAL
        $bentrok = Transaksi::where('id_barang', $request->id_barang)
            ->whereIn('status', ['pending', 'dibayar'])
            ->where(function ($query) use ($request) {

                // tanggal sewa baru ada di tengah booking lama
                $query->whereBetween(
                    'tanggal_sewa',
                    [$request->tanggal_sewa, $request->tanggal_kembali]
                )

                // tanggal kembali baru ada di tengah booking lama
                ->orWhereBetween(
                    'tanggal_kembali',
                    [$request->tanggal_sewa, $request->tanggal_kembali]
                )

                // booking baru nutup booking lama
                ->orWhere(function ($q) use ($request) {
                    $q->where(
                        'tanggal_sewa',
                        '<=',
                        $request->tanggal_sewa
                    )
                    ->where(
                        'tanggal_kembali',
                        '>=',
                        $request->tanggal_kembali
                    );
                });
            })
            ->exists();

        // Kalau bentrok
        if ($bentrok) {
            return response()->json([
                'success' => false,
                'message' => 'Barang sudah dibooking di tanggal tersebut'
            ], 400);
        }

        // SIMPAN TRANSAKSI
        $transaksi = Transaksi::create([
            'id_barang' => $request->id_barang,
            'id_admin' => null,
            'id_penyewa' => $request->id_penyewa,

            'tgl_transaksi' => now(),

            'tanggal_sewa' => $request->tanggal_sewa,
            'tanggal_kembali' => $request->tanggal_kembali,

            'jumlah' => $request->jumlah,
            'total_bayar' => $request->total_bayar,

            'status' => 'pending'
        ]);

        // KURANGI STOK
        $barang->stok -= $request->jumlah;

        // Kalau stok habis
        if ($barang->stok <= 0) {
            $barang->status = 'disewa';
        }

        $barang->save();

        return response()->json([
            'success' => true,
            'message' => 'Booking berhasil dibuat',
            'data' => $transaksi
        ]);
    }

    public function show($id)
    {
        $transaksi = Transaksi::with([
            'barang',
            'admin',
            'penyewa'
        ])->find($id);

        if (!$transaksi) {
            return response()->json([
                'success' => false,
                'message' => 'Transaksi tidak ditemukan'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $transaksi
        ]);
    }

    public function destroy($id)
    {
        $transaksi = Transaksi::find($id);

        if (!$transaksi) {
            return response()->json([
                'success' => false,
                'message' => 'Transaksi tidak ditemukan'
            ], 404);
        }

        $transaksi->delete();

        return response()->json([
            'success' => true,
            'message' => 'Transaksi berhasil dihapus'
        ]);
    }

    public function unavailableDates($id_barang)
    {
        $transaksi = Transaksi::where('id_barang', $id_barang)
            ->whereIn('status', [
                'pending',
                'dibayar'
            ])
            ->get();

        $tanggalBooked = [];

        foreach ($transaksi as $item) {

            $mulai = strtotime($item->tanggal_sewa);
            $selesai = strtotime($item->tanggal_kembali);

            while ($mulai <= $selesai) {

                $tanggalBooked[] = date(
                    'Y-m-d',
                    $mulai
                );

                $mulai = strtotime(
                    '+1 day',
                    $mulai
                );
            }
        }

        return response()->json([
            'success' => true,
            'message' => 'Tanggal booking berhasil diambil',
            'data' => array_values(
                array_unique($tanggalBooked)
            )
        ]);
    }

    public function uploadBukti(Request $request, $id)
    {
        $transaksi = Transaksi::find($id);

        if (!$transaksi) {
            return response()->json([
                'success' => false,
                'message' => 'Transaksi tidak ditemukan'
            ], 404);
        }

        $request->validate([
            'bukti_pembayaran' => 'required|image|mimes:jpg,jpeg,png|max:2048'
        ]);

        // upload file
        $file = $request->file('bukti_pembayaran');

        $namaFile = time() . '_' . $file->getClientOriginalName();

        // simpan ke storage/app/public/bukti_pembayaran
        $file->storeAs(
            'bukti_pembayaran',
            $namaFile,
            'public'
        );

        // simpan ke DB
        $transaksi->update([
            'bukti_pembayaran' => $namaFile
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Bukti pembayaran berhasil diupload',
            'data' => $transaksi
        ]);
    }

    // APPROVE PEMBAYARAN
    public function approve($id)
    {
        $transaksi = Transaksi::with('barang')
            ->find($id);

        if (!$transaksi) {
            return response()->json([
                'success' => false,
                'message' => 'Transaksi tidak ditemukan'
            ], 404);
        }

        $transaksi->status = 'dibayar';
        $transaksi->tanggal_bayar = now();
        $transaksi->save();

        return response()->json([
            'success' => true,
            'message' => 'Pembayaran berhasil diapprove',
            'data' => $transaksi
        ]);
    }


    // REJECT PEMBAYARAN
    public function reject($id)
    {
        $transaksi = Transaksi::with('barang')
            ->find($id);

        if (!$transaksi) {
            return response()->json([
                'success' => false,
                'message' => 'Transaksi tidak ditemukan'
            ], 404);
        }

        // balikin stok
        $barang = $transaksi->barang;

        $barang->stok += $transaksi->jumlah;

        // kalau stok ada lagi
        if ($barang->stok > 0) {
            $barang->status = 'tersedia';
        }

        $barang->save();

        // ubah status transaksi
        $transaksi->status = 'dibatalkan';
        $transaksi->save();

        return response()->json([
            'success' => true,
            'message' => 'Pembayaran ditolak',
            'data' => $transaksi
        ]);
    }




}
