<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/adminpanel/{any?}', function () {
    return view('dashboard');
})->where('any', '[\/\w\.-]*');


Route::get('/lecturer/{any?}', function () {
    return view('dashboard');
})->where('any', '[\/\w\.-]*');

Route::get('/student/{any?}', function () {
    return view('dashboard');
})->where('any', '[\/\w\.-]*');

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
