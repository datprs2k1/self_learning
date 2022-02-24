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

    protected $appends = ['value', 'text'];

    public $timestamps = false;

    public function getValueAttribute($value)
    {
        return $this->id;
    }

    public function getTextAttribute($value)
    {
        return $this->name;
    }

    public function CLASS()
    {
        return $this->hasMany(ClassModel::class, 'dept_id', 'id');
    }
}
