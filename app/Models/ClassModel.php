<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Department;

class ClassModel extends Model
{
    use HasFactory;
    protected $fillable = ['name, dept_id'];
    protected $primaryKey = 'id';
    protected $table = 'class';

    public $timestamps = true;

    protected $casts = [
        'created_at' => 'datetime:d-m-Y',
        'updated_at' => 'datetime:d-m-Y',
    ];

    public function department()
    {
        return $this->belongsTo(Department::class, 'dept_id', 'id');
    }
}
