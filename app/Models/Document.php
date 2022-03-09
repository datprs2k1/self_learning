<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ClassModel;
use App\Models\Subject;
use App\Models\Lesson;

class Document extends Model
{
    use HasFactory;

    protected $fillable = ['name, content, file_name, subj_id, class_id'];
    protected $primaryKey = 'id';
    protected $table = 'document';

    public $timestamps = false;

    protected $casts = [
        'created_at' => 'datetime:d/m/Y H:i:s',
        'updated_at' => 'datetime:d/m/Y H:i:s',
    ];

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
}
