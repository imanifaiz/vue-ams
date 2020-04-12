<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableHistories extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hhp_prev_pma', function (Blueprint $table) {
            $table->unsignedInteger('hhp_id');
            $table->unsignedInteger('pma_id');
            $table->timestamps();

            $table->primary(['hhp_id', 'pma_id'], 'id');
        });

        Schema::create('hht_prev_pma', function (Blueprint $table) {
            $table->unsignedInteger('hht_id');
            $table->unsignedInteger('pma_id');
            $table->timestamps();

            $table->primary(['hht_id', 'pma_id'], 'id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hhp_prev_pma');
        Schema::dropIfExists('hht_prev_pma');
    }
}
