<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Teacher;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $teacher = Teacher::orderBy('id', 'desc')->get();
        return response()->json($teacher, 200);
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
        //
        if (auth()->user()->hasRole('admin')) {
            $request->validate(
                [
                    'name' => 'required',
                    'email' => 'required|email|unique:teacher',
                    'phone' => 'required|numeric|digits:10|unique:teacher',
                ],
                [
                    'name.required' => 'Tên giảng viên không được để trống.',
                    'email.required' => 'Email không được để trống.',
                    'email.email' => 'Email không đúng định dạng.',
                    'email.unique' => 'Email đã tồn tại.',
                    'phone.required' => 'Số điện thoại không được để trống.',
                    'phone.numeric' => 'Số điện thoại phải là số.',
                    'phone.digits' => 'Số điện thoại phải có 10 số.',
                    'phone.unique' => 'Số điện thoại đã tồn tại.',
                ]
            );

            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = Hash::make($request->phone);
            $user->save();

            $teacher = new Teacher();
            $teacher->name = $request->name;
            $teacher->email = $request->email;
            $teacher->phone = $request->phone;
            $teacher->created_at = date('Y-m-d H:i:s');
            $teacher->user_id = $user->id;
            $teacher->save();


            $user->assignRole('teacher');

            return response()->json([
                'message' => 'Thêm giảng viên thành công.',
            ], 200);
        } else {
            return response()->json(['errors' => ['auth' => ['Bạn không có quyền truy cập.']]], 302);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //

        $teacher = Teacher::find($id);
        return response()->json($teacher, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
        if (auth()->user()->hasRole('admin')) {
            $request->validate(
                [
                    'name' => 'required',
                    'email' => 'required|email',
                    'phone' => 'required|numeric|digits:10|unique:teacher,phone,' . $id,
                ],
                [
                    'name.required' => 'Tên giảng viên không được để trống.',
                    'email.required' => 'Email không được để trống.',
                    'email.email' => 'Email không đúng định dạng.',
                    'phone.required' => 'Số điện thoại không được để trống.',
                    'phone.numeric' => 'Số điện thoại phải là số.',
                    'phone.digits' => 'Số điện thoại phải có 10 số.',
                    'phone.unique' => 'Số điện thoại đã tồn tại.',
                ]
            );

            $teacher = Teacher::find($id);
            $teacher->name = $request->name;
            $teacher->email = $request->email;
            $teacher->phone = $request->phone;
            $teacher->updated_at = date('Y-m-d H:i:s');
            $teacher->save();



            return response()->json([
                'message' => 'Cập nhật giảng viên thành công.',
            ], 200);
        } else {
            return response()->json([
                'error' => 'unauthorized'
            ], 401);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        if (auth()->user()->hasRole('admin')) {
            $teacher = Teacher::find($id);
            $teacher->delete();

            return response()->json([
                'success' => 'true'
            ], 200);
        } else {
            return response()->json([
                'error' => 'unauthorized'
            ], 401);
        }
    }

    public function deleteMutiple($ids)
    {
        if (auth()->user()->hasRole('admin')) {
            $ids = explode(',', $ids);
            foreach ($ids as $id) {
                $teacher = Teacher::find($id);
                $teacher->delete();
            }
            return response()->json([
                'success' => 'true'
            ], 200);
        } else {
            return response()->json([
                'error' => 'unauthorized'
            ], 401);
        }
    }
}
