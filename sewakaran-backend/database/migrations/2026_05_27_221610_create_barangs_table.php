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
        Schema::create('barangs', function (Blueprint $table) {

            $table->increments('id_barang');

            $table->string('nama_barang');
            $table->text('deskripsi')->nullable();

            $table->integer('harga_12_jam');
            $table->integer('harga_24_jam');

            $table->integer('stok')->default(1);

            $table->string('gambar')->nullable();

            $table->enum('status', [
                'tersedia',
                'disewa'
            ])->default('tersedia');

            $table->string('kategori')->nullable();

            // simpan spesifikasi fleksibel
            $table->json('spesifikasi')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('barangs');
    }
};