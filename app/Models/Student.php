<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Department;
use App\Models\ClassModel;

class Student extends Model
{
    use HasFactory;

    protected $fillable = ['code, name, email, phone, dept_id, class_id'];
    protected $primaryKey = 'id';
    protected $table = 'student';
    protected $casts = [
        'created_at' => 'datetime:d/m/Y H:i:s',
        'updated_at' => 'datetime:d/m/Y H:i:s',
    ];

    public $timestamps = false;

    public function Department()
    {
        return $this->belongsTo(Department::class, 'dept_id', 'id');
    }

    public function Class()
    {
        return $this->belongsTo(ClassModel::class, 'class_id', 'id');
    }
}
