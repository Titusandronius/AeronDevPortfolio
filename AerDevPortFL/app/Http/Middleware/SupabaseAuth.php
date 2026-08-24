<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Http;

class SupabaseAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $token = $request->bearerToken();//Extract the token

        if (!$token) {
            return response()->json([
                'message' => 'Unauthenticated.',
            ], 401);
        }

        $response = Http::withHeaders([
            'apikey' => env('SUPABASE_PUBLISHABLE_KEY'),
            'Authorization' => 'Bearer ' . $token,
        ])->get(
            rtrim(env('SUPABASE_URL'), '/') . '/auth/v1/user'
        );

        if (!$response->successful()) {
            return response()->json([
                'message' => 'Invalid or expired token.',
            ], 401);
        }

        $request->attributes->set('supabase_user', $response->json());//store user information & allow the req to continue

        return $next($request);
    }
}
