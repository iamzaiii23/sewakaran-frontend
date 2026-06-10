<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    // =========================
    // REGISTER USER
    // =========================
    public function register(Request $request)
    {
        $request->validate([
            'username' =>
                'required|string|max:255|unique:users,username',

            'password' =>
                'required|min:6'
        ]);

        $user =
            User::create([
                'username' =>
                    $request->username,

                'name' =>
                    $request->username,

                'email' =>
                    null,

                'password' =>
                    Hash::make(
                        $request->password
                    )
            ]);

        $token =
            $user
            ->createToken(
                'user_token'
            )
            ->plainTextToken;

        return response()->json([
            'success' => true,
            'message' =>
                'Register berhasil',

            'role' =>
                'user',

            'token' =>
                $token,

            'data' =>
                $user
        ]);
    }

    // =========================
    // LOGIN ADMIN + USER
    // =========================
    public function login(Request $request)
    {
        $request->validate([
            'email' =>
                'required',

            'password' =>
                'required'
        ]);

        // =====================
        // LOGIN ADMIN
        // pakai EMAIL
        // =====================
        if (
            str_contains(
                $request->email,
                '@'
            )
        ) {

            $admin =
                Admin::where(
                    'email',
                    $request->email
                )->first();

            if (
                !$admin ||
                !Hash::check(
                    $request->password,
                    $admin->password
                )
            ) {
                return response()->json([
                    'success' => false,
                    'message' =>
                        'Email atau password admin salah'
                ], 401);
            }

            $token =
                $admin
                ->createToken(
                    'admin_token'
                )
                ->plainTextToken;

            return response()->json([
                'success' => true,
                'message' =>
                    'Login admin berhasil',

                'role' =>
                    'admin',

                'token' =>
                    $token,

                'data' =>
                    $admin
            ]);
        }

        // =====================
        // LOGIN USER
        // pakai USERNAME
        // =====================
        $user =
            User::where(
                'username',
                $request->email
            )->first();

        if (
            !$user ||
            !Hash::check(
                $request->password,
                $user->password
            )
        ) {
            return response()->json([
                'success' => false,
                'message' =>
                    'Username atau password salah'
            ], 401);
        }

        $token =
            $user
            ->createToken(
                'user_token'
            )
            ->plainTextToken;

        return response()->json([
            'success' => true,
            'message' =>
                'Login user berhasil',

            'role' =>
                'user',

            'token' =>
                $token,

            'data' =>
                $user
        ]);
    }

    // =========================
    // LOGOUT
    // =========================
    public function logout(Request $request)
    {
        $request
            ->user()
            ->currentAccessToken()
            ->delete();

        return response()->json([
            'success' => true,
            'message' =>
                'Logout berhasil'
        ]);
    }
}