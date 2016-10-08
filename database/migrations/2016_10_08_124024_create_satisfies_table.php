<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSatisfiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('satisfies', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id');
            $table->primary('user_id');
            $table->timestamps();
            // 1
            $table->unsignedTinyInteger('s1_1');
            $table->unsignedTinyInteger('s1_2');
            $table->unsignedTinyInteger('s1_3');
            $table->unsignedTinyInteger('s1_4');
            // 2
            $table->unsignedTinyInteger('s2_1');
            // 3
            $table->unsignedTinyInteger('s3_1');
            $table->unsignedTinyInteger('s3_2');
            $table->unsignedTinyInteger('s3_3');
            $table->unsignedTinyInteger('s3_4');
            $table->unsignedTinyInteger('s3_5');
            // 4
            $table->unsignedTinyInteger('s4_1');
            $table->unsignedTinyInteger('s4_2');
            $table->unsignedTinyInteger('s4_3');
            $table->unsignedTinyInteger('s4_4');
            $table->unsignedTinyInteger('s4_5');
            $table->unsignedTinyInteger('s4_6');
            $table->unsignedTinyInteger('s4_7');
            // 5
            $table->unsignedTinyInteger('s5_1');
            $table->unsignedTinyInteger('s5_2');
            $table->unsignedTinyInteger('s5_3');
            $table->unsignedTinyInteger('s5_4');
            // 6
            $table->unsignedTinyInteger('s6_1');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('satisfies');
    }
}
