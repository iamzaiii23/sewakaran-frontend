<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use Illuminate\Http\Request;

class BarangController extends Controller
{
    // GET semua barang
    public function index()
    {
        $barang = Barang::all();

        return response()->json([
            'success' => true,
            'message' => 'Data barang berhasil diambil',
            'data' => $barang
        ]);
    }

    // GET detail barang
    public function show($id)
    {
        $barang = Barang::find($id);

        if (!$barang) {
            return response()->json([
                'success' => false,
                'message' => 'Barang tidak ditemukan'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Detail barang berhasil diambil',
            'data' => $barang
        ]);
    }

    // POST tambah barang
    public function store(Request $request)
    {
        $request->validate([
            'nama_barang' => 'required|max:100',
            'deskripsi' => 'required',
            'harga_12_jam' => 'required|integer',
            'harga_24_jam' => 'required|integer',
            'stok' => 'required|integer',
            'status' => 'required',
            'kategori' => 'required',
            'gambar' => 'nullable|image|mimes:jpg,jpeg,png|max:2048'
        ]);

        $data = $request->all();

        if ($request->hasFile('gambar')) {

            $file = $request->file('gambar');

            $filename =
                time() .
                '_' .
                $file->getClientOriginalName();

            $file->move(
                public_path('uploads'),
                $filename
            );

            $data['gambar'] =
                'uploads/' . $filename;
        }

        $barang = Barang::create($data);

        return response()->json([
            'success' => true,
            'message' => 'Barang berhasil ditambahkan',
            'data' => $barang
        ], 201);
    }

    // PUT update barang
    public function update(Request $request, $id)
    {
        $barang = Barang::find($id);

        if (!$barang) {
            return response()->json([
                'success' => false,
                'message' => 'Barang tidak ditemukan'
            ], 404);
        }

        $barang->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Barang berhasil diupdate',
            'data' => $barang
        ]);
    }

    // DELETE barang
    public function destroy($id)
    {
        $barang = Barang::find($id);

        if (!$barang) {
            return response()->json([
                'success' => false,
                'message' => 'Barang tidak ditemukan'
            ], 404);
        }

        $barang->delete();

        return response()->json([
            'success' => true,
            'message' => 'Barang berhasil dihapus'
        ]);
    }

    // SEARCH barang
    public function search(Request $request)
    {
        $keyword = $request->query('keyword');

        $barang = Barang::where(
            'nama_barang',
            'like',
            '%' . $keyword . '%'
        )->get();

        return response()->json([
            'success' => true,
            'message' => 'Hasil pencarian barang',
            'data' => $barang
        ]);
    }
}