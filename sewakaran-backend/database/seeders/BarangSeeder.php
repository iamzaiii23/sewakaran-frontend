<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BarangSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('barangs')->insert([

            [
                'nama_barang' => 'Handie Talkie',
                'deskripsi' => 'HT untuk komunikasi acara',
                'harga_12_jam' => 8000,
                'harga_24_jam' => 12000,
                'stok' => 5,
                'gambar' => 'handie-talkie.jpeg',
                'status' => 'tersedia',
                'kategori' => 'barang',
                'spesifikasi' => json_encode([
                    'Frequency Range' => 'UHF 400-438MHz',
                    'RF Rated Power' => '2W',
                    'Channel Capacity' => '16',
                    'Battery' => '1500mAh'
                ]),
                'created_at' => now(),
                'updated_at' => now()
            ],

            [
                'nama_barang' => 'Sound System',
                'deskripsi' => 'Speaker acara',
                'harga_12_jam' => 25000,
                'harga_24_jam' => 40000,
                'stok' => 3,
                'gambar' => 'sound-system.jpeg',
                'status' => 'tersedia',
                'kategori' => 'barang',
                'spesifikasi' => json_encode([
                    'Power' => '300W',
                    'Input' => 'Bluetooth + AUX'
                ]),
                'created_at' => now(),
                'updated_at' => now()
            ],

            [
                'nama_barang' => 'Tripod',
                'deskripsi' => 'Tripod kamera',
                'harga_12_jam' => 8000,
                'harga_24_jam' => 13000,
                'stok' => 4,
                'gambar' => 'tripod.jpeg',
                'status' => 'tersedia',
                'kategori' => 'barang',
                'spesifikasi' => json_encode([
                    'Height' => '180cm',
                    'Material' => 'Aluminium'
                ]),
                'created_at' => now(),
                'updated_at' => now()
            ]

        ]);
    }
}