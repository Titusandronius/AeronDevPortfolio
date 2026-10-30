<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\JsonResponse;

class ProjectController extends Controller
{
    public function index(): JsonResponse
    {
        $projects = Project::query()
            ->where('status', true)
            ->orderByDesc('is_featured')
            ->orderBy('sort_order')
            ->orderByDesc('year')
            ->get();
        return response()->json($projects);
    }

    public function show(string $slug): JsonResponse
    {
        $project = Project::query()
            ->where('slug', $slug)
            ->where('status', true)
            ->firstOrFail();
        return response()->json($project);
    }
}
