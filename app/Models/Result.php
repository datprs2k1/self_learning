<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Question;

class Result extends Model
{
    use HasFactory;

    protected $fillable = ['user_id, question_id, answer, begin, end'];
    protected $primaryKey = 'id';
    protected $table = 'result';
    protected $casts = [
        'created_at' => 'datetime:d/m/Y H:i:s',
        'updated_at' => 'datetime:d/m/Y H:i:s',
        'begin' => 'date:hh:mm:ss',
        'end' => 'date:hh:mm:ss',
    ];

    public $timestamps = false;

    public function User()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function Question()
    {
        return $this->belongsTo(Question::class, 'question_id', 'id');
    }
}
