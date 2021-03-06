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
        if (auth()->user()->hasRole('admin') || auth()->user()->hasRole('teacher')) {
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
                'message' => 'Th??m th??nh c??ng.',
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
        if (auth()->user()->hasRole('admin') || auth()->user()->hasRole('teacher')) {
            $request->validate(
                [
                    'name' => 'required|max:255',
                    'introduce' => 'required|max:255',
                    'content' => 'required|max:255',
                    'subj_id' => 'required',
                    'class_id' => 'required',
                ],
                [
                    'name.required' => 'B???n ch??a nh???p t??n b??i h???c',
                    'introduce.required' => 'B???n ch??a nh???p gi???i thi???u b??i h???c',
                    'content.required' => 'B???n ch??a nh???p n???i dung b??i h???c',
                    'subj_id.required' => 'B???n ch??a ch???n m??n h???c',
                    'class_id.required' => 'B???n ch??a ch???n l???p h???c',
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
        if (auth()->user()->hasRole('admin') || auth()->user()->hasRole('teacher')) {
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
        if (auth()->user()->hasRole('admin') || auth()->user()->hasRole('teacher')) {
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
                'name.required' => 'T??n b??i gi???ng kh??ng ???????c ????? tr???ng',
                'path.required' => 'N???i dung b??i gi???ng kh??ng ???????c ????? tr???ng',
                'path.mimes' => '?????nh d???ng file kh??ng h???p l???, ?????nh d???ng h???p l??? (pdf, doc, docx, ppt, pptx)',
                'path.max' => 'Dung l?????ng file v?????t gi???i h???n (100MB)',
                'week.required' => 'Tu???n kh??ng ???????c ????? tr???ng',
                'subject_id.required' => 'M??n h???c kh??ng ???????c ????? tr???ng',
                'class_id.required' => 'L???p kh??ng ???????c ????? tr???ng',
            ]
        );
    }

    public function validateVideo(Request $request)
    {
        $request->validate(
            [
                'video_path' => 'required|string',
                'week.required' => 'Tu???n kh??ng ???????c ????? tr???ng',
                'subject_id.required' => 'M??n h???c kh??ng ???????c ????? tr???ng',
                'class_id.required' => 'L???p kh??ng ???????c ????? tr???ng',
            ],
            [
                'video_path.required' => '???????ng d???n video kh??ng ???????c ????? tr???ng',
                'video_path.string' => '???????ng d???n video kh??ng h???p l???',
                'week.required' => 'Tu???n kh??ng ???????c ????? tr???ng',
                'subject_id.required' => 'M??n h???c kh??ng ???????c ????? tr???ng',
                'class_id.required' => 'L???p kh??ng ???????c ????? tr???ng',
            ]
        );
    }
}
