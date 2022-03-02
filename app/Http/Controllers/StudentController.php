<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $student = Student::with('Department')->with('Class')->orderBy('id', 'desc')->get();
        return response()->json($student, 200);
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
                    'code' => 'required|unique:student',
                    'name' => 'required',
                    'email' => 'required|email|unique:student',
                    'phone' => 'required|numeric|digits:10',
                    'dept_id' => 'required',
                    'class_id' => 'required',
                ],
                [
                    'code.required' => 'Mã sinh viên không được để trống.',
                    'code.unique' => 'Mã sinh viên đã tồn tại.',
                    'name.required' => 'Tên sinh viên không được để trống.',
                    'email.required' => 'Email không được để trống.',
                    'email.email' => 'Email không đúng định dạng.',
                    'email.unique' => 'Email đã tồn tại.',
                    'phone.required' => 'Số điện thoại không được để trống.',
                    'phone.numeric' => 'Số điện thoại phải là số.',
                    'phone.digits' => 'Số điện thoại phải có 10 số.',
                    'dept_id.required' => 'Khoa không được để trống.',
                    'class_id.required' => 'Lớp không được để trống.',
                ]
            );

            $student = new Student();
            $student->code = $request->code;
            $student->name = $request->name;
            $student->email = $request->email;
            $student->phone = $request->phone;
            $student->dept_id = $request->dept_id;
            $student->class_id = $request->class_id;
            $student->created_at = date('Y-m-d H:i:s');
            $student->save();

            return response()->json([
                'message' => 'Thêm sinh viên thành công.',
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

        $student = Student::with('Department')->with('Class')->find($id);
        return response()->json($student, 200);
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
                    'code' => 'required',
                    'name' => 'required',
                    'email' => 'required|email',
                    'phone' => 'required|numeric|digits:10',
                    'dept_id' => 'required',
                    'class_id' => 'required',
                ],
                [
                    'code.required' => 'Mã sinh viên không được để trống.',
                    'name.required' => 'Tên sinh viên không được để trống.',
                    'email.required' => 'Email không được để trống.',
                    'email.email' => 'Email không đúng định dạng.',
                    'phone.required' => 'Số điện thoại không được để trống.',
                    'phone.numeric' => 'Số điện thoại phải là số.',
                    'phone.digits' => 'Số điện thoại phải có 10 số.',
                    'dept_id.required' => 'Khoa không được để trống.',
                    'class_id.required' => 'Lớp không được để trống.',
                ]
            );

            $student = Student::find($id);
            $student->code = $request->code;
            $student->name = $request->name;
            $student->email = $request->email;
            $student->phone = $request->phone;
            $student->dept_id = $request->dept_id;
            $student->class_id = $request->class_id;
            $student->updated_at = date('Y-m-d H:i:s');
            $student->save();

            return response()->json([
                'message' => 'Cập nhật sinh viên thành công.',
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
            $student = Student::find($id);
            $student->delete();

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
                $student = Student::find($id);
                $student->delete();
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
