<?php

namespace App\Http\Controllers;

use App\Models\Penyewa;
use Illuminate\Http\Request;

class PenyewaController extends Controller
{
    // GET semua penyewa
    public function index()
    {
        $penyewa = Penyewa::all();

        return response()->json([
            'success' => true,
            'message' => 'Data penyewa berhasil diambil',
            'data' => $penyewa
        ]);
    }

    // POST tambah penyewa
    public function store(Request $request)
    {
        $request->validate([
            'nama_penyewa' => 'required|max:100',
            'no_hp' => 'required|max:15'
        ]);

        $penyewa = Penyewa::create([
            'nama_penyewa' => $request->nama_penyewa,
            'no_hp' => $request->no_hp
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Penyewa berhasil ditambahkan',
            'data' => $penyewa
        ]);
    }

    // GET detail penyewa by id
    public function show($id)
    {
        $penyewa = Penyewa::find($id);

        if (!$penyewa) {
            return response()->json([
                'success' => false,
                'message' => 'Penyewa tidak ditemukan'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Detail penyewa berhasil diambil',
            'data' => $penyewa
        ]);
    }

    // PUT update penyewa
    public function update(Request $request, $id)
    {
        $penyewa = Penyewa::find($id);

        if (!$penyewa) {
            return response()->json([
                'success' => false,
                'message' => 'Penyewa tidak ditemukan'
            ], 404);
        }

        $request->validate([
            'nama_penyewa' => 'required|max:100',
            'no_hp' => 'required|max:15'
        ]);

        $penyewa->update([
            'nama_penyewa' => $request->nama_penyewa,
            'no_hp' => $request->no_hp
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Penyewa berhasil diupdate',
            'data' => $penyewa
        ]);
    }

    // DELETE penyewa
    public function destroy($id)
    {
        $penyewa = Penyewa::find($id);

        if (!$penyewa) {
            return response()->json([
                'success' => false,
                'message' => 'Penyewa tidak ditemukan'
            ], 404);
        }

        $penyewa->delete();

        return response()->json([
            'success' => true,
            'message' => 'Penyewa berhasil dihapus'
        ]);
    }
}