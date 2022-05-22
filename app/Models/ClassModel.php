<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Department;
use App\Models\Subject;
use App\Models\Lesson;
use App\Models\Student;
use App\Models\Question;

class ClassModel extends Model
{
    use HasFactory;
    protected $fillable = ['name, dept_id'];
    protected $primaryKey = 'id';
    protected $table = 'class';

    public $timestamps = false;

    protected $casts = [
        'created_at' => 'datetime:d/m/Y H:i:s',
        'updated_at' => 'datetime:d/m/Y H:i:s',
    ];

    public function department()
    {
        return $this->belongsTo(Department::class, 'dept_id', 'id');
    }

    public function subject()
    {
        return $this->belongsToMany(Subject::class, 'subject_class_teacher', 'class_id', 'subject_id');
    }

    public function lesson()
    {
        return $this->hasMany(Lesson::class, 'class_id', 'id');
    }

    public function student()
    {
        return $this->hasMany(Student::class, 'class_id', 'id');
    }
    public function teacher()
    {
        return $this->belongsToMany(Teacher::class, 'subject_class_teacher', 'class_id', 'teacher_id');
    }

    public function question()
    {
        return $this->hasMany(Question::class, 'class_id', 'id');
    }
}
