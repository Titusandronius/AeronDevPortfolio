<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Experience;
use Illuminate\Http\JsonResponse;

class ExperienceController extends Controller
{
    public function index(): JsonResponse
    {
        $experiences = Experience::query()
            ->where('status', true)
            ->orderBy('sort_order')
            ->orderByDesc('start_date')
            ->get();

        return response()->json($experiences);
    }
}