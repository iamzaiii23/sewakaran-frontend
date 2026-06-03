<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    // GET semua admin
    public function index()
    {
        $admin = Admin::all();

        return response()->json([
            'success' => true,
            'message' => 'Data admin berhasil diambil',
            'data' => $admin
        ]);
    }

    // POST tambah admin
    public function store(Request $request)
    {
        $request->validate([
            'nama_admin' => 'required|max:100',
            'jabatan' => 'required|max:100'
        ]);

        $admin = Admin::create([
            'nama_admin' => $request->nama_admin,
            'jabatan' => $request->jabatan
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Admin berhasil ditambahkan',
            'data' => $admin
        ]);
    }

    // GET detail admin
    public function show($id)
    {
        $admin = Admin::find($id);

        if (!$admin) {
            return response()->json([
                'success' => false,
                'message' => 'Admin tidak ditemukan'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Detail admin berhasil diambil',
            'data' => $admin
        ]);
    }

    // PUT update admin
    public function update(Request $request, $id)
    {
        $admin = Admin::find($id);

        if (!$admin) {
            return response()->json([
                'success' => false,
                'message' => 'Admin tidak ditemukan'
            ], 404);
        }

        $request->validate([
            'nama_admin' => 'required|max:100',
            'jabatan' => 'required|max:100'
        ]);

        $admin->update([
            'nama_admin' => $request->nama_admin,
            'jabatan' => $request->jabatan
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Admin berhasil diupdate',
            'data' => $admin
        ]);
    }

    // DELETE admin
    public function destroy($id)
    {
        $admin = Admin::find($id);

        if (!$admin) {
            return response()->json([
                'success' => false,
                'message' => 'Admin tidak ditemukan'
            ], 404);
        }

        $admin->delete();

        return response()->json([
            'success' => true,
            'message' => 'Admin berhasil dihapus'
        ]);
    }
}