<?php

namespace App\Http\Controllers\Learn;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;

class ConfirmController extends Controller
{

    public function confirm(Request $request)
    {
        $user = Auth::user();
        $user->update($request->all());
        $user->stage = 1;
        $user->save();
        return response()->json(['data'=> ['user' => $user]]);
    }

}
