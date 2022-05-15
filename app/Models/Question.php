<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Test;

class Question extends Model
{
    use HasFactory;

    protected $fillable = ['question, Ans_A, Ans_B, Ans_C, Ans_D, Correct_Ans, lesson_id, total_time'];
    protected $primaryKey = 'id';
    protected $table = 'question';
    protected $casts = [
        'created_at' => 'datetime:d/m/Y H:i:s',
        'updated_at' => 'datetime:d/m/Y H:i:s',
    ];

    public $timestamps = false;

    public function test()
    {
        return $this->belongsTo(Test::class);
    }

    public function Class()
    {
        return $this->belongsToMany(ClassModel::class, 'class_id', 'class_id', 'subject_id', 'lesson_id', 'week');
    }
}
