<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuestionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('question', function (Blueprint $table) {
            $table->id();
            $table->string('question');
            $table->string('Ans_A');
            $table->string('Ans_B');
            $table->string('Ans_C');
            $table->string('Ans_D');
            $table->integer('Correct_Ans');
            $table->bigInteger('lesson_id')->unsigned();
            $table->integer('total_time');
            $table->foreign('lesson_id')->references('id')->on('lesson')->onDelete('cascade');
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
        Schema::dropIfExists('question');
    }
}
