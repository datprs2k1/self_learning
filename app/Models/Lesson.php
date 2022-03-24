<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ClassModel;
use App\Models\Subject;

class Lesson extends Model
{
    use HasFactory;

    use HasFactory;
    protected $fillable = ['name, path, video_path, week, subject_id, class_id'];
    protected $primaryKey = 'id';
    protected $table = 'lesson';

    public $timestamps = false;

    protected $casts = [
        'created_at' => 'datetime:d/m/Y H:i:s',
        'updated_at' => 'datetime:d/m/Y H:i:s',
    ];

    public function Class()
    {
        return $this->belongsTo(ClassModel::class, 'class_id', 'id');
    }

    public function Subject()
    {
        return $this->belongsTo(Subject::class, 'subject_id', 'id');
    }
}
