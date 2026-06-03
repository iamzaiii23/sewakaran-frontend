<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class Admin extends Authenticatable
{
    use HasFactory, HasApiTokens;

    protected $table = 'admins';

    protected $primaryKey = 'id_admin';

    protected $fillable = [
        'nama_admin',
        'email',
        'password',
        'jabatan'
    ];

    protected $hidden = [
        'password'
    ];
}