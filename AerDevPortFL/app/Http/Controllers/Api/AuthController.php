<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    public function user(Request $request): JsonResponse
    {
        return response()->json([
            'user' => $request->attributes->get('supabase_user'),
        ]);
    }
}
