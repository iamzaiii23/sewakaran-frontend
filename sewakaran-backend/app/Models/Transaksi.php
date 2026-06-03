<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaksi extends Model
{
    protected $table = 'transaksis';

    protected $primaryKey = 'id_transaksi';

    protected $fillable = [
        'id_barang',
        'id_admin',
        'id_penyewa',
        'tgl_transaksi',
        'tanggal_sewa',
        'tanggal_kembali',
        'jumlah',
        'total_bayar',
        'tanggal_bayar',
        'status',
        'bukti_pembayaran'
    ];

    public $timestamps = true;

    // Relasi ke barang
    public function barang()
    {
        return $this->belongsTo(
            Barang::class,
            'id_barang',
            'id_barang'
        );
    }

    // Relasi ke penyewa
    public function penyewa()
    {
        return $this->belongsTo(
            Penyewa::class,
            'id_penyewa',
            'id_penyewa'
        );
    }

    // Relasi ke admin
    public function admin()
    {
        return $this->belongsTo(
            Admin::class,
            'id_admin',
            'id_admin'
        );
    }
}