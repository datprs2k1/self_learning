<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLessonTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lesson', function (Blueprint $table) {
            $table->id();
            $table->text('name');
            $table->text('introduce');
            $table->text('content');
            $table->bigInteger('subj_id')->unsigned();
            $table->bigInteger('class_id')->unsigned();
            $table->foreign('subj_id')->references('id')->on('subject')->onDelete('cascade');
            $table->foreign('class_id')->references('id')->on('class')->onDelete('cascade');
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
        Schema::dropIfExists('lesson');
    }
}
