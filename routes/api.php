<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\ClassController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\TeacherController;

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
Route::get('logout', 'App\Http\Controllers\AuthController@logout');


Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::resource('/department', DepartmentController::class);
    Route::resource('/class', ClassController::class);
    Route::resource('/student', StudentController::class);
    Route::resource('/subject', SubjectController::class);
    Route::resource('/lesson', LessonController::class);
    Route::resource('/document', DocumentController::class);
    Route::resource('/question', QuestionController::class);
    Route::resource('/teacher', TeacherController::class);
    Route::delete('/department/delete/{department}', 'App\Http\Controllers\DepartmentController@deleteMutiple');
    Route::delete('/class/delete/{class}', 'App\Http\Controllers\ClassController@deleteMutiple');
    Route::delete('/student/delete/{student}', 'App\Http\Controllers\StudentController@deleteMutiple');
    Route::delete('/subject/delete/{subject}', 'App\Http\Controllers\SubjectController@deleteMutiple');
    Route::delete('/lesson/delete/{lesson}', 'App\Http\Controllers\LessonController@deleteMutiple');
    Route::delete('/document/delete/{document}', 'App\Http\Controllers\DocumentController@deleteMutiple');
    Route::delete('/question/deleteMutiple', 'App\Http\Controllers\QuestionController@deleteMutiple');
    Route::get('/question/test/{test}', 'App\Http\Controllers\QuestionController@getQuestionTest');
    Route::post('/class/addSubject', 'App\Http\Controllers\ClassController@addSubject');
    Route::post('/class/deleteSubject', 'App\Http\Controllers\ClassController@deleteSubject');
    Route::post('/class/deleteSubjects', 'App\Http\Controllers\ClassController@deleteSubjects');
    Route::post('/teacher/addTeacher', 'App\Http\Controllers\TeacherController@addTeacher');
    Route::post('/teacher/editTeacher', 'App\Http\Controllers\TeacherController@editTeacher');
    Route::get('/teacher/subject/{teacher}', 'App\Http\Controllers\TeacherController@getTeachersBySubject');
    Route::get('/getMyCoursesByClassId', 'App\Http\Controllers\StudentController@getMyCourses');
    Route::post('/checkTest', 'App\Http\Controllers\StudentController@checkTest');
    Route::get('/getResult', 'App\Http\Controllers\StudentController@getResult');
});
