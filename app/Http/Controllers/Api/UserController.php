<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $requestAction = $request->input("action");

        switch ($requestAction) {
            case "register":
                // Create User
                $user = new User;
                $user->name = $request->input('username');
                $user->email = $request->input('email');
                $user->password = $request->input('password');
                $user->save();

                $input = $request->all();

                return $input;
            case "login":
                $conditions = [
                    'email' => $request->input('email'),
                    'password' => $request->input('password'),
                ];

                $userExists = DB::table('users')->where($conditions)->exists();

                if ($userExists == true) {
                    $user = DB::table('users')->where($conditions)->first();

                    return $user->name;
                }

                return false;
            default:
                return null;
        }

        return null;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // return "Users";
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // return "Users";
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // return "Users";
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // return "Users";
    }
}
