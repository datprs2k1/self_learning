<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Lesson;
use App\Models\Subject;
use App\Models\ClassModel;
use App\Models\Question;

class Test extends Model
{
    use HasFactory;

    protected $fillable = ['name, type, lesson_id, subj_id, class_id'];
    protected $primaryKey = 'id';
    protected $table = 'test';
    protected $casts = [
        'created_at' => 'datetime:d/m/Y H:i:s',
        'updated_at' => 'datetime:d/m/Y H:i:s',
    ];

    public $timestamps = false;

    public function Subject()
    {
        return $this->belongsTo(Subject::class, 'subj_id', 'id');
    }

    public function Class()
    {
        return $this->belongsTo(ClassModel::class, 'class_id', 'id');
    }

    public function Lesson()
    {
        return $this->belongsTo(Lesson::class, 'lesson_id', 'id');
    }

    public function Question()
    {
        return $this->hasMany(Question::class, 'test_id', 'id');
    }
}
