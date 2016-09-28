<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
    return view('angular2');
});

Route::group(['prefix' => 'auth'], function () {
	Route::post('login', 'Auth\AuthController@login');
	Route::get('logout', 'Auth\AuthController@logout');
	Route::get('status', 'Auth\AuthController@status');
});