<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableRepairs extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('repairs', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('pma_id')->nullable();
            $table->string('status')->nullable();
            $table->date('reported_at')->nullable();
            $table->date('repaired_at')->nullable();
            $table->date('returned_at')->nullable();
            $table->text('reason');
            $table->text('remarks')->nullable();
            $table->unsignedInteger('repairable_id');
            $table->string('repairable_type');
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
        Schema::dropIfExists('repairs');
    }
}
