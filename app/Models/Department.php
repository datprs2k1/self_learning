<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ClassModel;

class Department extends Model
{
    use HasFactory;

    protected $fillable = ['code, name'];
    protected $primaryKey = 'id';
    protected $table = 'department';
    protected $casts = [
        'created_at' => 'datetime:d-m-Y',
        'updated_at' => 'datetime:d-m-Y',
    ];


    public $timestamps = true;

    public function Class()
    {
        return $this->hasMany(ClassModel::class, 'dept_id', 'id');
    }
}
