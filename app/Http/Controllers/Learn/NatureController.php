<?php

namespace App\Http\Controllers\Learn;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\User;

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
            $nature = $user->nature()->create($data);
            $user->stage = 3;
            $max = User::all()->max('random');
            $max = empty($max) ? 0:$max;
            $user->random = $max + 1;
            $user->save();
            return response()->json(['data' => ['nature'=> $nature, 'user' => $user]], 201);
        } else {
            return response()->json(['message'=> 'Forbidden'], 403);
        }
    }

}
