<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/



$app->group(['prefix' => 'api/v1'], function () use ($app) {
    $app->group(['prefix' => 'districts'], function () use ($app) {
        $app->get('', 'DistrictController@index');
        $app->get('create', 'DistrictController@create');
        $app->post('', 'DistrictController@store');
        $app->get('{id}', 'DistrictController@show');
        $app->get('{id}/edit', 'DistrictController@edit');
        $app->put('{id}', 'DistrictController@update');
        $app->delete('{id}', 'DistrictController@destroy');
    });

    $app->group(['prefix' => 'pma'], function () use ($app) {
        $app->get('', 'PmaController@index');
        $app->get('create', 'PmaController@create');
        $app->post('', 'PmaController@store');
        $app->get('{id}', 'PmaController@show');
        $app->get('{id}/edit', 'PmaController@edit');
        $app->put('{id}', 'PmaController@update');
        $app->delete('{id}', 'PmaController@destroy');
    });

    $app->group(['prefix' => 'hht'], function () use ($app) {
        $app->get('', 'HhtController@index');
        $app->get('create', 'HhtController@create');
        $app->post('', 'HhtController@store');
        $app->get('{id}', 'HhtController@show');
        $app->get('{id}/edit', 'HhtController@edit');
        $app->put('{id}', 'HhtController@update');
        $app->delete('{id}', 'HhtController@destroy');
    });

    $app->group(['prefix' => 'hhp'], function () use ($app) {
        $app->get('', 'HhpController@index');
        $app->get('create', 'HhpController@create');
        $app->post('', 'HhpController@store');
        $app->get('{id}', 'HhpController@show');
        $app->get('{id}/edit', 'HhpController@edit');
        $app->put('{id}', 'HhpController@update');
        $app->delete('{id}', 'HhpController@destroy');
    });

    $app->group(['prefix' => 'histories'], function () use ($app) {
        $app->get('', 'HistoryController@index');
        $app->get('create', 'HistoryController@create');
        $app->post('', 'HistoryController@store');
        $app->get('{id}', 'HistoryController@show');
        $app->get('{id}/edit', 'HistoryController@edit');
        $app->put('{id}', 'HistoryController@update');
        $app->delete('{id}', 'HistoryController@destroy');
    });

    $app->group(['prefix' => 'repairs'], function () use ($app) {
        $app->get('', 'RepairController@index');
        $app->get('create', 'RepairController@create');
        $app->post('', 'RepairController@store');
        $app->get('{id}', 'RepairController@show');
        $app->get('{id}/edit', 'RepairController@edit');
        $app->put('{id}', 'RepairController@update');
        $app->delete('{id}', 'RepairController@destroy');
    });

    $app->get('/districts-selectlist-opts', 'SelectlistOptsController@getDistricts');
    $app->get('/pma-selectlist-opts', 'SelectlistOptsController@getPma');
    $app->get('/pma-details-selectlist-opts', 'SelectlistOptsController@getPmaDetails');
    $app->get('/hht-selectlist-opts', 'SelectlistOptsController@getHht');
    $app->get('/hhp-selectlist-opts', 'SelectlistOptsController@getHhp');
});

$app->get('/{any:.*}', function () {
    return view('index');
});
