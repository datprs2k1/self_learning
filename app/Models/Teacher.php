<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Teacher extends Model
{
    use HasFactory;

    protected $fillable = ['name, email, phone, user_id'];
    protected $primaryKey = 'id';
    protected $table = 'teacher';
    protected $casts = [
        'created_at' => 'datetime:d/m/Y H:i:s',
        'updated_at' => 'datetime:d/m/Y H:i:s',
    ];

    public $timestamps = false;

    public function Teacher()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

}
