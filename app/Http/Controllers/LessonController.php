<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lesson;

class LessonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $lesson = Lesson::with('Class', 'Subject')->get();
        return response()->json($lesson);
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
                    'name' => 'required|max:255',
                    'introduce' => 'required|max:255',
                    'content' => 'required|max:255',
                    'subj_id' => 'required',
                    'class_id' => 'required',
                ],
                [
                    'name.required' => 'Bạn chưa nhập tên bài học',
                    'introduce.required' => 'Bạn chưa nhập giới thiệu bài học',
                    'content.required' => 'Bạn chưa nhập nội dung bài học',
                    'subj_id.required' => 'Bạn chưa chọn môn học',
                    'class_id.required' => 'Bạn chưa chọn lớp học',
                ]
            );

            $lesson = new Lesson();
            $lesson->name = $request->name;
            $lesson->introduce = $request->introduce;
            $lesson->content = $request->content;
            $lesson->subj_id = $request->subj_id;
            $lesson->class_id = $request->class_id;
            $lesson->created_at = date('Y-m-d H:i:s');
            $lesson->save();

            return response()->json([
                'message' => 'Thêm bài giảng thành công.',
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
        $lesson = Lesson::with('Class', 'Subject')->find($id);
        return response()->json($lesson);
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
                    'name' => 'required|max:255',
                    'introduce' => 'required|max:255',
                    'content' => 'required|max:255',
                    'subj_id' => 'required',
                    'class_id' => 'required',
                ],
                [
                    'name.required' => 'Bạn chưa nhập tên bài học',
                    'introduce.required' => 'Bạn chưa nhập giới thiệu bài học',
                    'content.required' => 'Bạn chưa nhập nội dung bài học',
                    'subj_id.required' => 'Bạn chưa chọn môn học',
                    'class_id.required' => 'Bạn chưa chọn lớp học',
                ]
            );

            $lesson = Lesson::find($id);
            $lesson->name = $request->name;
            $lesson->introduce = $request->introduce;
            $lesson->content = $request->content;
            $lesson->subj_id = $request->subj_id;
            $lesson->class_id = $request->class_id;
            $lesson->updated_at = date('Y-m-d H:i:s');
            $lesson->save();

            return response()->json([
                'success' => 'true'
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
            $lesson = Lesson::find($id);
            $lesson->delete();

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
                $lesson = Lesson::find($id);
                $lesson->delete();
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
