<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Student;

class Result extends Model
{
    use HasFactory;

    protected $fillable = ['student_id, subject_id, class_id, week, totalTime, totalScore'];
    protected $primaryKey = 'id';
    protected $table = 'result';
    protected $casts = [
        'created_at' => 'datetime:d/m/Y H:i:s',
        'updated_at' => 'datetime:d/m/Y H:i:s',
    ];

    public $timestamps = false;

    public function student()
    {
        return $this->belongsTo(Student::class, 'student_id');
    }
}
