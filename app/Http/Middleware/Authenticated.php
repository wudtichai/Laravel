<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class Authenticated
{
    public function handle($request, Closure $next)
    {
        if (!Auth::check()) {
            return response()->json(['message'=>'Access denied'], 401);
        }

        return $next($request);
    }
}
