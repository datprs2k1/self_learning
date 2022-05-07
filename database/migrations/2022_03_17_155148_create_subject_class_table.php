<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubjectClassTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subject_class_teacher', function (Blueprint $table) {
            $table->bigInteger('subject_id')->unsigned();
            $table->bigInteger('class_id')->unsigned();
            $table->bigInteger('teacher_id')->unsigned();
            $table->foreign('teacher_id')->references('id')->on('teacher')->onDelete('cascade');
            $table->foreign('subject_id')->references('id')->on('subject')
                ->onDelete('cascade');
            $table->foreign('class_id')->references('id')->on('class')
                ->onDelete('cascade');
            $table->unique(['subject_id', 'class_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subject_class');
    }
}
