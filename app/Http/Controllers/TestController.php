<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Test;
use App\Models\Question;

class TestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

        $test = Test::with('Subject', 'Class', 'Lesson')->get();
        return response()->json($test);
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
                    'type' => 'required',
                    'lesson_id' => 'required',
                    'subj_id' => 'required',
                    'class_id' => 'required',
                ],
                [
                    'name.required' => 'Tên đề thi không được để trống.',
                    'type.required' => 'Loại đề thi không được để trống.',
                    'lesson_id.required' => 'Mã môn học không được để trống.',
                    'subj_id.required' => 'Mã môn học không được để trống.',
                    'class_id.required' => 'Mã lớp không được để trống.',
                ]
            );

            $test = new Test();
            $test->name = $request->name;
            $test->type = $request->type;
            $test->lesson_id = $request->lesson_id;
            $test->subj_id = $request->subj_id;
            $test->class_id = $request->class_id;
            $test->created_at = date('Y-m-d H:i:s');
            $test->save();

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

        $test = Test::with('Class', 'Lesson', 'Subject')->find($id);

        return response()->json($test, 200);
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
                    'type' => 'required',
                    'lesson_id' => 'required',
                    'subj_id' => 'required',
                    'class_id' => 'required',
                ],
                [
                    'name.required' => 'Tên đề thi không được để trống.',
                    'type.required' => 'Loại đề thi không được để trống.',
                    'lesson_id.required' => 'Mã môn học không được để trống.',
                    'subj_id.required' => 'Mã môn học không được để trống.',
                    'class_id.required' => 'Mã lớp không được để trống.',
                ]
            );

            $test = Test::find($id);
            $test->name = $request->name;
            $test->type = $request->type;
            $test->lesson_id = $request->lesson_id;
            $test->subj_id = $request->subj_id;
            $test->class_id = $request->class_id;
            $test->updated_at = date('Y-m-d H:i:s');
            $test->save();

            return response()->json([
                'message' => 'Sửa sinh viên thành công.',
            ], 200);
        } else {
            return response()->json(['errors' => ['auth' => ['Bạn không có quyền truy cập.']]], 302);
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
            $test = Test::find($id);
            $test->delete();

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
                $test = Test::find($id);
                $test->delete();
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

    public function checkTest($id, Request $request)
    {
        $answer = Question::where('test_id', $id)->select('Correct_Ans')->orderBy('id', 'asc')->get();
        $selected = $request->selected;

        $count = 0;

        foreach ($answer as $key => $value) {
            if ($value->Correct_Ans == $selected[$key]) {
                $count++;
            }
        }

        return response()->json([
            'result' => $count,
            'total' => count($answer)
        ], 200);
    }
}
