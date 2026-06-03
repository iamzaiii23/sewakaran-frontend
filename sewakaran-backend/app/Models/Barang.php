<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Barang extends Model
{
    protected $table = 'barangs';

    protected $primaryKey = 'id_barang';

    protected $fillable = [
        'nama_barang',
        'deskripsi',
        'harga_12_jam',
        'harga_24_jam',
        'stok',
        'gambar',
        'status',
        'kategori',
        'spesifikasi'
    ];

    protected $casts = [
        'spesifikasi' => 'array'
    ];
}