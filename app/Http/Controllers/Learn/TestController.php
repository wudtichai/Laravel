<?php

namespace App\Http\Controllers\Learn;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;

class TestController extends Controller
{

    public function post(Request $request)
    {
        $user = Auth::user();
        if ($user->stage == 6) {
            $test = $user->test()->create($request->all());
            $user->stage = 7;
            $user->save();
            return response()->json(['data'=> ['test' => $test]], 201);
        } else {
            return response()->json(['message'=> 'Forbidden'], 403);
        }
    }

}
