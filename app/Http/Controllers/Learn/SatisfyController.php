<?php

namespace App\Http\Controllers\Learn;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;

class SatisfyController extends Controller
{

    public function post(Request $request)
    {
        $user = Auth::user();
        if ($user->stage == 7) {
            $satisfy = $user->satisfy()->create($request->all());
            $user->stage = 8;
            $user->save();
            return response()->json(['data'=> ['satisfy' => $satisfy]], 201);
        } else {
            return response()->json(['message'=> 'Forbidden'], 403);
        }
    }

}
