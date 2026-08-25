<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\Profile;

class ProfileController extends Controller
{
    public function show(): JsonResponse
    {
        $profile = Profile::first();

        if(!$profile){
            return response()->json([
                'message' => 'Profile not found',
            ], 404);
        }

        return response()->json($profile);
    }
}
