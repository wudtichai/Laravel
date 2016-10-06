<?php

namespace App\Http\Controllers\Learn;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;

class NatureController extends Controller
{

    public function post(Request $request)
    {
        $user = Auth::user();
        if ($user->stage == 2) {
            $data = $request->all();
            foreach ($data as $key => $value) {
                if ($value['selected'] == true) {
                    $data[$key] = 1;
                } else {
                    $data[$key] = 0;
                }
            }
            return response()->json(['data'=> $data], 201);
        } else {
            return response()->json(['message'=> 'Forbidden'], 403);
        }


    }

}
