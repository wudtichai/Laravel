<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $studentId = $request->input('studentId');
        if (Auth::loginUsingId($studentId)->check()) {
            $data = [
                'message' => 'Login success',
                'user' => Auth::user()
            ]; 
            response()->json(['data'=> $data]);
        }
        return response()->json(['data'=>['message'=>'Access denied']], 401);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json(['data'=>['message'=>'logout']]);
    }

}
