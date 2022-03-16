<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDocumentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('document', function (Blueprint $table) {
            $table->id();
            $table->text('name');
            $table->text('content');
            $table->text('file_name');
            $table->bigInteger('lesson_id')->unsigned();
            $table->bigInteger('subj_id')->unsigned();
            $table->bigInteger('class_id')->unsigned();
            $table->foreign('lesson_id')->references('id')->on('lesson')->onDelete('cascade');
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
        Schema::dropIfExists('document');
    }
}
