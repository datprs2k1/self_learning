<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\ClassController;

class Department extends Model
{
    use HasFactory;

    protected $fillable = ['department_id, name'];
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
        return $this->department_id;
    }

    public function getTextAttribute($value)
    {
        return $this->name;
    }
}
