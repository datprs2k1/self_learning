<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\User;
use Spatie\Permission\Models\Role;
use App\Models\ClassModel;
use App\Models\Result;
use App\Models\Question;

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

            $user = new User();
            $user->name = $student->name;
            $user->email = $student->email;
            $user->password = bcrypt($student->phone);
            $user->save();

            $user->assignRole('student');

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

    public function getMyCourses()
    {
        $email = auth()->user()->email;
        $student = Student::where('email', $email)->first();
        $class = ClassModel::with('department', 'subject', 'student', 'lesson', 'teacher', 'question')->find($student->class_id);
        foreach ($class->question as $value) {
            unset($value['correct_Answer']);
        }
        return response()->json($class, 200);
    }

    public function checkTest(Request $request)
    {
        $email = auth()->user()->email;
        $student = Student::where('email', $email)->first();
        $count = 0;
        foreach ($request->selected as $value) {
            $result = new Result();
            $result->student_id = $student->id;
            $result->question_id = $value['question_id'];
            $result->answer = $value['value'];
            $result->totalTime = $request->totalTime;
            $result->created_at = date('Y-m-d H:i:s');
            $result->save();

            $question = Question::find($value['question_id']);
            if ($question->correct_Answer == $value['value']) {
                $count++;
            }
        }
        $scores = round(10 / ($request->lengthQuestions) * $count, 2);
        return response()->json([
            'scores' => $scores
        ], 200);
    }

    public function getResult(Request $request)
    {
        $email = auth()->user()->email;
        $student = Student::where('email', $email)->first();
        $results = Result::with('Question')->where('student_id', $student->id)->get();
        return response()->json($results, 200);
    }
}
