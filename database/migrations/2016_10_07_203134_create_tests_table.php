<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tests', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id');
            $table->primary('user_id');
            $table->timestamps();
            $table->unsignedTinyInteger('t1');
            $table->unsignedTinyInteger('t2');
            $table->unsignedTinyInteger('t3');
            $table->unsignedTinyInteger('t4');
            $table->unsignedTinyInteger('t5');
            $table->unsignedTinyInteger('t6');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tests');
    }
}
