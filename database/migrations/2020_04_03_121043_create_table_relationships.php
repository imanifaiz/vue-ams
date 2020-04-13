<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableRelationships extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('pma', function (Blueprint $table) {
            $table->foreign('district_id')->references('id')->on('districts');
        });

        Schema::table('hht', function (Blueprint $table) {
            $table->foreign('pma_id')->references('id')->on('pma');
        });

        Schema::table('hhp', function (Blueprint $table) {
            $table->foreign('pma_id')->references('id')->on('pma');
        });

        // Schema::table('hhp_prev_pma', function (Blueprint $table) {
        //     $table->foreign('hhp_id')->references('id')->on('hhp');
        //     $table->foreign('pma_id')->references('id')->on('pma');
        // });

        // Schema::table('hht_prev_pma', function (Blueprint $table) {
        //     $table->foreign('hht_id')->references('id')->on('hht');
        //     $table->foreign('pma_id')->references('id')->on('pma');
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('pma', function (Blueprint $table) {
            $table->dropForeign('pma_district_id_foreign');
        });

        // Schema::table('hhp_prev_pma', function (Blueprint $table) {
        //     $table->dropForeign('hhp_id_foreign');
        //     $table->dropForeign('pma_id_foreign');
        // });

        // Schema::table('hht_prev_pma', function (Blueprint $table) {
        //     $table->dropForeign('hht_id_foreign');
        //     $table->dropForeign('pma_id_foreign');
        // });

        Schema::table('hht', function (Blueprint $table) {
            $table->dropForeign('hht_pma_id_foreign');
        });

        Schema::table('hhp', function (Blueprint $table) {
            $table->dropForeign('hhp_pma_id_foreign');
        });
    }
}
