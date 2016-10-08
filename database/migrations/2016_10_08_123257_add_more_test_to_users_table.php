<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddMoreTestToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tests', function (Blueprint $table) {
            $table->unsignedTinyInteger('t7');
            $table->unsignedTinyInteger('t8');
            $table->unsignedTinyInteger('t9');
            $table->unsignedTinyInteger('t10');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tests', function (Blueprint $table) {
             $table->dropColumn(['t7','t8','t9','t10']);
        });
    }
}
