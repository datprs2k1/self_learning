<?php

namespace App\Http\Controllers;

use App\Models\ClassModel;
use App\Models\Result;
use App\Models\Student;
use Illuminate\Http\Request;
use App\Models\Teacher;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
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
        $teacher = Teacher::with('subjects')->orderBy('id', 'desc')->get();
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
                    'email' => 'required|email|unique:teacher|unique:users',
                    'phone' => 'required|numeric|digits:10|unique:teacher',
                    'subject_id' => 'required',
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
                    'subject_id.required' => 'Môn học không được để trống.',
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

            $teacher->subjects()->attach($request->subject_id);

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

        $teacher = Teacher::with('subjects')->find($id);
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

            $teacher->subjects()->sync($request->subject_id);

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

    public function addTeacher(Request $request)
    {
        $a = DB::table('subject_class_teacher')->where('class_id', $request->class_id)->where('subject_id', $request->subject_id)->update(['teacher_id' => $request->teacher_id]);
        return response()->json([
            'success' => 'true'
        ], 200);
    }

    public function getTeachersBySubject($subject_id)
    {
        $teachers = Teacher::whereHas('subjects', function ($query) use ($subject_id) {
            $query->where('subject_id', $subject_id);
        })->get();
        return response()->json($teachers, 200);
    }

    public function getTeachersBySubjectClass(Request $request)
    {
        $teacher_id = DB::table('subject_class_teacher')->where('class_id', $request->class_id)->where('subject_id', $request->subject_id)->pluck('teacher_id');
        $teachers = Teacher::whereIn('id', $teacher_id)->get();
        return response()->json($teachers, 200);
    }

    public function getTeacherCount()
    {
        $count = Teacher::count();
        return response()->json($count, 200);
    }

    public function xemketqua(Request $request)
    {
        $data = Result::with('student')
            ->where('result.class_id', $request->class_id)
            ->where('subject_id', $request->subject_id)
            ->groupBy('student_id', 'subject_id', 'week')
            ->get([
                'student_id',
                DB::raw('MAX(totalScore) as score'),
                'week'
            ]);


        $student = Student::where('class_id', $request->class_id)->get([
            'id',
            'name',
            'code'
        ]);

        $result = [];

        for ($i = 1; $i <= $request->week; $i++) {
            foreach ($student as $item) {
                $result[] = [
                    'id' => $item->id,
                    'name' => $item->name,
                    'code' => $item->code,
                    'score' => 0,
                    'week' => $i
                ];
            }
        }


        foreach ($data as $item) {
            foreach ($result as $key => $value) {
                if ($value['id'] == $item->student_id && $value['week'] == $item->week) {
                    $result[$key]['score'] = $item->score;
                }
            }
        }

        return response()->json($result, 200);
    }
}
