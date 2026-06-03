<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Penyewa extends Model
{
    protected $table = 'penyewas';

    protected $primaryKey = 'id_penyewa';

    protected $fillable = [
        'nama_penyewa',
        'no_hp'
    ];

    public $timestamps = false;
}