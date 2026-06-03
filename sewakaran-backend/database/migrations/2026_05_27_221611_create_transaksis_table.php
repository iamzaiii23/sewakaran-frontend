<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transaksis', function (Blueprint $table) {

            $table->increments('id_transaksi');

            // RELASI
            $table->unsignedInteger('id_barang');

            // admin & penyewa kemungkinan BIGINT
            $table->unsignedBigInteger('id_admin')->nullable();
            $table->unsignedBigInteger('id_penyewa');

            // TANGGAL
            $table->date('tgl_transaksi');

            $table->date('tanggal_sewa');
            $table->date('tanggal_kembali');

            // BOOKING
            $table->integer('jumlah')->default(1);
            $table->integer('total_bayar');

            $table->date('tanggal_bayar')->nullable();

            // STATUS BOOKING
            $table->enum('status', [
                'pending',
                'dibayar',
                'selesai',
                'dibatalkan'
            ])->default('pending');

            $table->timestamps();

            // FK BARANG
            $table->foreign('id_barang')
                ->references('id_barang')
                ->on('barangs')
                ->onDelete('cascade');

            // FK ADMIN
            $table->foreign('id_admin')
                ->references('id_admin')
                ->on('admins')
                ->onDelete('cascade');

            // FK PENYEWA
            $table->foreign('id_penyewa')
                ->references('id_penyewa')
                ->on('penyewas')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transaksis');
    }
};