<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lesson;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

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
            $checkExist = $this->checkExistLesson($request->class_id, $request->subject_id, $request->week);
            if ($checkExist != 0) {
                $lesson = Lesson::find($checkExist);
                if ($request->type == "slide") {
                    if (!$request->hasFile('path')) {
                        $lesson->path = $lesson->path;
                        $lesson->updated_at = date('Y-m-d H:i:s');
                    } else {
                        $this->validateSlide($request);
                        $file = $request->file('path');
                        $name = time() . '_' . $file->getClientOriginalName();
                        Storage::disk('public')->put($name, File::get($file));
                        File::delete('files/' . $lesson->path);
                        $lesson->path = $name;
                        $lesson->name = $request->name;
                        $lesson->updated_at = date('Y-m-d H:i:s');
                    }
                } else if ($request->type == "video") {
                    if ($request->video_path == null) {
                        $lesson->video_path = $lesson->video_path;
                    } else {
                        $lesson->video_path = $request->video_path;
                    }
                }
            } else {
                if ($request->type == "slide") {
                    $this->validateSlide($request);
                    $file = $request->file('path');
                    $name = time() . '_' . $file->getClientOriginalName();
                    Storage::disk('public')->put($name, File::get($file));
                    $lesson = new Lesson();
                    $lesson->class_id = $request->class_id;
                    $lesson->subject_id = $request->subject_id;
                    $lesson->week = $request->week;
                    $lesson->path = $name;
                    $lesson->name = $request->name;
                    $lesson->created_at = date('Y-m-d H:i:s');
                } else {
                    $this->validateVideo($request);
                    $lesson = new Lesson();
                    $lesson->class_id = $request->class_id;
                    $lesson->subject_id = $request->subject_id;
                    $lesson->week = $request->week;
                    $lesson->video_path = $request->video_path;
                    $lesson->created_at = date('Y-m-d H:i:s');
                }
            }

            $lesson->save();

            return response()->json([
                'message' => 'Thêm thành công.',
            ], 200);
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

    public function checkExistLesson($class_id, $subject_id, $week)
    {
        $lesson = Lesson::where('class_id', $class_id)
            ->where('subject_id', $subject_id)
            ->where('week', $week)
            ->pluck('id');
        if (count($lesson) != 0) {
            return $lesson[0];
        }
        return 0;
    }

    public function validateSlide(Request $request)
    {
        $request->validate(
            [
                'name' => 'required|string|max:255',
                'path' => 'required|mimes:pdf,doc,docx,ppt,pptx|max:100000',
                'week' => 'required|integer',
                'subject_id' => 'required',
                'class_id' => 'required',
            ],
            [
                'name.required' => 'Tên bài giảng không được để trống',
                'path.required' => 'Nội dung bài giảng không được để trống',
                'path.mimes' => 'Định dạng file không hợp lệ, định dạng hợp lệ (pdf, doc, docx, ppt, pptx)',
                'path.max' => 'Dung lượng file vượt giới hạn (100MB)',
                'week.required' => 'Tuần không được để trống',
                'subject_id.required' => 'Môn học không được để trống',
                'class_id.required' => 'Lớp không được để trống',
            ]
        );
    }

    public function validateVideo(Request $request)
    {
        $request->validate(
            [
                'video_path' => 'required|string',
                'week.required' => 'Tuần không được để trống',
                'subject_id.required' => 'Môn học không được để trống',
                'class_id.required' => 'Lớp không được để trống',
            ],
            [
                'video_path.required' => 'Đường dẫn video không được để trống',
                'video_path.string' => 'Đường dẫn video không hợp lệ',
                'week.required' => 'Tuần không được để trống',
                'subject_id.required' => 'Môn học không được để trống',
                'class_id.required' => 'Lớp không được để trống',
            ]
        );
    }
}
