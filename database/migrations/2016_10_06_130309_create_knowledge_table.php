<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateKnowledgeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('knowledges', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id');
            $table->primary('user_id');
            $table->unsignedTinyInteger('three_d_printing');
            $table->unsignedTinyInteger('advanced_search');
            $table->unsignedTinyInteger('banner_ad');
            $table->unsignedTinyInteger('bcc_on_email');
            $table->unsignedTinyInteger('blog');
            $table->unsignedTinyInteger('bookmark');
            $table->unsignedTinyInteger('browser');
            $table->unsignedTinyInteger('cache');
            $table->unsignedTinyInteger('cloud_storage');
            $table->unsignedTinyInteger('cookie');
            $table->unsignedTinyInteger('ebook');
            $table->unsignedTinyInteger('filtibly');
            $table->unsignedTinyInteger('jfw');
            $table->unsignedTinyInteger('jpg');
            $table->unsignedTinyInteger('pdf');
            $table->unsignedTinyInteger('phishing');
            $table->unsignedTinyInteger('podcasting');
            $table->unsignedTinyInteger('preference_setting');
            $table->unsignedTinyInteger('refresh_reload');
            $table->unsignedTinyInteger('remote_login');
            $table->unsignedTinyInteger('spam');
            $table->unsignedTinyInteger('spyware');
            $table->unsignedTinyInteger('torrent');
            $table->unsignedTinyInteger('wiki');
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
        Schema::dropIfExists('knowledges');
    }
}
