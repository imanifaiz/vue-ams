<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableDevices extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hht', function (Blueprint $table) {
            $table->increments('id');
            $table->string('serial_no')->unique();
            $table->enum('status', ['ACTIVE', 'LUPUS']);
            $table->unsignedInteger('pma_id')->nullable();
            $table->timestamps();
        });

        Schema::create('hhp', function (Blueprint $table) {
            $table->increments('id');
            $table->string('serial_no')->unique();
            $table->enum('status', ['ACTIVE', 'LUPUS']);
            $table->unsignedInteger('pma_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hht');
        Schema::dropIfExists('hhp');
    }
}
