<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\BarangController;
use App\Http\Controllers\PenyewaController;
use App\Http\Controllers\TransaksiController;


// =========================
// TEST API
// =========================
Route::get('/test', function () {
    return response()->json([
        'success' => true,
        'message' => 'Backend Sewakaran berjalan cuy 🔥'
    ]);
});


// =========================
// LOGIN
// =========================
Route::post('/login', [
    AuthController::class,
    'login'
]);


// =========================
// PUBLIC ROUTE
// =========================

// =========================
// BARANG
// =========================

// CRUD BARANG
Route::apiResource(
    'barang',
    BarangController::class
);

// SEARCH BARANG
Route::get(
    '/barang/search',
    [BarangController::class, 'search']
);

// TANGGAL TIDAK TERSEDIA
Route::get(
    '/barang/{id}/unavailable-dates',
    [TransaksiController::class, 'unavailableDates']
);


// =========================
// PENYEWA
// =========================
// sementara public buat testing
Route::apiResource(
    'penyewa',
    PenyewaController::class
);


// =========================
// TRANSAKSI / BOOKING
// =========================
Route::apiResource(
    'transaksi',
    TransaksiController::class
);


// APPROVE PEMBAYARAN
Route::post(
    '/transaksi/{id}/approve',
    [TransaksiController::class, 'approve']
);


// REJECT PEMBAYARAN
Route::post(
    '/transaksi/{id}/reject',
    [TransaksiController::class, 'reject']
);


// UPLOAD BUKTI PEMBAYARAN
Route::post(
    '/transaksi/{id}/upload-bukti',
    [TransaksiController::class, 'uploadBukti']
);


// =========================
// WAJIB LOGIN ADMIN
// =========================
Route::middleware('auth:sanctum')->group(function () {

    // LOGOUT
    Route::post(
        '/logout',
        [AuthController::class, 'logout']
    );

    // CRUD ADMIN
    Route::apiResource(
        'admin',
        AdminController::class
    );
});