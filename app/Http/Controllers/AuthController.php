<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Dotenv\Exception\ValidationException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{

    public function login(Request $request)
    {
        $request->validate(
            [
                'email' => 'required|email',
                'password' => 'required'
            ],
            [
                'email.required' => 'Tài khoản và mật khẩu không được để trống.',
                'password.required' => 'Tài khoản và mật khẩu không được để trống.',
            ]
        );

        if (Auth::attempt($request->only('email', 'password'))) {
            $token = Auth::user()->createToken('MyApp')->plainTextToken;
            return response()->json([
                "id" => Auth::user()->id,
                "name" => Auth::user()->name,
                "email" => Auth::user()->email,
                "role" => Auth::user()->getRoleNames()[0],
                "token" => $token
            ], 200);
        }

        return response()->json([
            'errors' => ['email' => ['Tài khoản hoặc mật khẩu không chính xác']]
        ], 401);
    }

    public function register(Request $request)
    {
        $request->validate(
            [
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:6',
            ],
            [
                'name.required' => 'Tên không được để trống.',
                'email.required' => 'Email không được để trống.',
                'password.required' => 'Mật khẩu không được để trống.',
                'password.min' => 'Mật khẩu phải có ít nhất 6 ký tự.',
            ]
        );

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();

        return response()->json(['message' => 'Đăng ký thành công.'], 200);
    }

    public function logout()
    {
        Auth::user()->tokens()->delete();
    }
}
