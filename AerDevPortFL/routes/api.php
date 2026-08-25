<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Support\Facades\Route;
use App\http\Controllers\Api\ProfileController;


Route::middleware('supabase.auth')->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
});

Route::get('/profile', [ProfileController::class, 'show']);