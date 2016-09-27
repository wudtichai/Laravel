<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        Auth::logout();
        $studentId = $request->input('studentId');
        Auth::loginUsingId($studentId);
        if (Auth::check()) {
            $data = [
                'message' => 'Login success',
                'user' => Auth::user()
            ]; 
            return response()->json(['data'=> $data]);
        }
        return response()->json(['data'=>['message'=>'Access denied']], 401);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json(['data'=>['message'=>'logout']]);
    }

    public function status()
    {
        if (Auth::check()) {
            $data = ['user' => Auth::user()];
            return response()->json(['data'=> $data]);
        }
        return response()->json(['data'=>['message'=>'Unauthorized']], 401);
    }

}
