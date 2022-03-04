<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ClassModel;

class Subject extends Model
{
    use HasFactory;

    protected $fillable = ['name, class_id'];
    protected $primaryKey = 'id';
    protected $table = 'subject';
    protected $casts = [
        'created_at' => 'datetime:d/m/Y H:i:s',
        'updated_at' => 'datetime:d/m/Y H:i:s',
    ];

    public $timestamps = false;

    public function Class()
    {
        return $this->belongsTo(ClassModel::class, 'class_id', 'id');
    }
}
