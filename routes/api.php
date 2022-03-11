<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\ClassController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\QuestionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', 'App\Http\Controllers\AuthController@login');
Route::post('register', 'App\Http\Controllers\AuthController@register');

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::resource('/department', DepartmentController::class);
    Route::resource('/class', ClassController::class);
    Route::resource('/student', StudentController::class);
    Route::resource('/subject', SubjectController::class);
    Route::resource('/lesson', LessonController::class);
    Route::resource('/document', DocumentController::class);
    Route::resource('/test', TestController::class);
    Route::resource('/question', QuestionController::class);
    Route::delete('/department/delete/{department}', 'App\Http\Controllers\DepartmentController@deleteMutiple');
    Route::delete('/class/delete/{class}', 'App\Http\Controllers\ClassController@deleteMutiple');
    Route::delete('/student/delete/{student}', 'App\Http\Controllers\StudentController@deleteMutiple');
    Route::delete('/subject/delete/{subject}', 'App\Http\Controllers\SubjectController@deleteMutiple');
    Route::delete('/lesson/delete/{lesson}', 'App\Http\Controllers\LessonController@deleteMutiple');
    Route::delete('/document/delete/{document}', 'App\Http\Controllers\DocumentController@deleteMutiple');
    Route::delete('/test/delete/{test}', 'App\Http\Controllers\TestController@deleteMutiple');
    Route::delete('/question/delete/{question}', 'App\Http\Controllers\QuestionController@deleteMutiple');
    Route::get('logout', 'App\Http\Controllers\AuthController@logout');
});
