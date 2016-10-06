<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNaturesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('natures', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id');
            $table->primary('user_id');
            $table->timestamps();

            // 1
            $table->boolean('q1_1');
            $table->boolean('q1_2');
            $table->boolean('q1_3');
            $table->boolean('q1_4');
            // 2
            $table->boolean('q2_1');
            $table->boolean('q2_2');
            $table->boolean('q2_3');
            $table->boolean('q2_4');
            // 3
            $table->boolean('q3_1');
            $table->boolean('q3_2');
            $table->boolean('q3_3');
            $table->boolean('q3_4');
            // 4
            $table->boolean('q4_1');
            $table->boolean('q4_2');
            $table->boolean('q4_3');
            $table->boolean('q4_4');
            // 5
            $table->boolean('q5_1');
            $table->boolean('q5_2');
            $table->boolean('q5_3');
            $table->boolean('q5_4');
            // 6
            $table->boolean('q6_1');
            $table->boolean('q6_2');
            $table->boolean('q6_3');
            $table->boolean('q6_4');
            // 7
            $table->boolean('q7_1');
            $table->boolean('q7_2');
            $table->boolean('q7_3');
            $table->boolean('q7_4');
            // 8
            $table->boolean('q8_1');
            $table->boolean('q8_2');
            $table->boolean('q8_3');
            $table->boolean('q8_4');
            // 9
            $table->boolean('q9_1');
            $table->boolean('q9_2');
            $table->boolean('q9_3');
            $table->boolean('q9_4');
            // 10
            $table->boolean('q10_1');
            $table->boolean('q10_2');
            $table->boolean('q10_3');
            $table->boolean('q10_4');
            // 11
            $table->boolean('q11_1');
            $table->boolean('q11_2');
            $table->boolean('q11_3');
            $table->boolean('q11_4');
            // 12
            $table->boolean('q12_1');
            $table->boolean('q12_2');
            $table->boolean('q12_3');
            $table->boolean('q12_4');
            // 13
            $table->boolean('q13_1');
            $table->boolean('q13_2');
            $table->boolean('q13_3');
            $table->boolean('q13_4');
            // 14
            $table->boolean('q14_1');
            $table->boolean('q14_2');
            $table->boolean('q14_3');
            $table->boolean('q14_4');
            // 15
            $table->boolean('q15_1');
            $table->boolean('q15_2');
            $table->boolean('q15_3');
            $table->boolean('q15_4');
            // 16
            $table->boolean('q16_1');
            $table->boolean('q16_2');
            $table->boolean('q16_3');
            $table->boolean('q16_4');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('natures');
    }
}
