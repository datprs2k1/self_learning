<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ClassModel;
use App\Models\Lesson;

class Subject extends Model
{
    use HasFactory;

    protected $fillable = ['code, name , weeks'];
    protected $primaryKey = 'id';
    protected $table = 'subject';
    protected $casts = [
        'created_at' => 'datetime:d/m/Y H:i:s',
        'updated_at' => 'datetime:d/m/Y H:i:s',
    ];

    public $timestamps = false;

    public function Class()
    {
        return $this->belongsToMany(ClassModel::class, 'subject_class', 'subject_id', 'class_id');
    }

    // public function Lesson()
    // {
    //     return $this->hasMany(Lesson::class, 'subj_id', 'id');
    // }
}
