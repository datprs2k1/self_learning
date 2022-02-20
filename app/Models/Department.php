<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use HasFactory;

    protected $fillable = ['department_id, name'];
    protected $primaryKey = 'id';
    protected $table = 'department';
    protected $dateFormat = 'Y-m-d H:i:s';

    public $timestamps = false;
}
