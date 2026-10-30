<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Support\Facades\Route;
use App\http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\SkillController;
use App\Http\Controllers\Api\ExperienceController;
use App\Http\Controllers\Api\ProjectController;

Route::middleware('supabase.auth')->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
});

Route::get('/profile', [ProfileController::class, 'show']);
Route::get('/skills', [SkillController::class,'index']);
Route::get('/experiences', [ExperienceController::class, 'index']);
Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/projects/{slug}', [ProjectController::class, 'show']);
