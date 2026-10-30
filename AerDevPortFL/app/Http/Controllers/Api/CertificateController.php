<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\Certificate;

class CertificateController extends Controller
{
    public function index(): JsonResponse
    {
        $certificates = Certificate::query()
            ->where('status', 'published')
            ->orderByDesc('is_featured')
            ->orderBy('sort_order')
            ->orderByDesc('issue_date')
            ->get();
        return response()->json($certificates);
    }
}
