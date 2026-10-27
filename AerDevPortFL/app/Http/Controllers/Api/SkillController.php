<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use Illuminate\Http\JsonResponse;

class SkillController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(
            Skill::where('status', true)
                ->orderBy('sort_order')
                ->get()
        );
    }
}