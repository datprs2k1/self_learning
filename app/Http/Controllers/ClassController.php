<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ClassModel;
use App\Models\Subject;
use DB;

class ClassController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $data = ClassModel::with('department', 'subject', 'student')->orderBy('id', 'desc')->get();
        return response()->json($data, 200);
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
                    'dept_id' => 'required',
                    'name' => 'required|unique:class',
                ],
                [
                    'dept_id.required' => 'Khoa không được để trống.',
                    'name.required' => 'Tên lớp không được để trống.',
                    'name.unique' => 'Tên lớp đã tồn tại.',
                ]
            );

            $class = new ClassModel();
            $class->dept_id = $request->dept_id;
            $class->name = $request->name;
            $class->created_at = date('Y-m-d H:i:s');
            $class->save();

            return response()->json([
                'message' => 'Thêm khoa thành công.',
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
        $class = ClassModel::with('department', 'subject', 'student')->find($id);
        return response()->json($class, 200);
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
                    'dept_id' => 'required',
                    'name' => 'required',
                ],
                [
                    'dept_id.required' => 'Khoa không được để trống.',
                    'name.required' => 'Tên khoa không được để trống.',
                ]
            );

            $class = ClassModel::find($id);
            $class->dept_id = $request->dept_id;
            $class->name = $request->name;
            $class->updated_at = date('Y-m-d H:i:s');
            $class->save();

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
            $class = ClassModel::find($id);
            $class->delete();

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
                $class = ClassModel::find($id);
                $class->delete();
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

    public function addSubject(Request $request)
    {
        if (auth()->user()->hasRole('admin')) {
            foreach ($request->subject_ids as $subject_id) {
                if (!$this->checkAddSubjects($request->class_id, $subject_id)) {
                    $subjectName = Subject::find($subject_id)->name;
                    $subjectCode = Subject::find($subject_id)->code;
                    return response()->json([
                        'errors' => [
                            'Môn học: ' . $subjectName . ' (' . $subjectCode . ') đã tồn tại trong lớp.'
                        ]
                    ], 422);
                }
            }

            foreach ($request->subject_ids as $id) {
                $class = ClassModel::find($request->class_id);
                $class->subject()->attach($id);
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

    public function checkAddSubjects($class_id, $subject_id)
    {
        $row = DB::select('select * from subject_class where subject_id = ? and class_id = ?', [$subject_id, $class_id]);
        if ($row) {
            return false;
        }
        return true;
    }

    public function deleteSubjects(Request $request)
    {
        if (auth()->user()->hasRole('admin')) {
            foreach ($request->subject_ids as $id) {
                $class = ClassModel::find($request->class_id);
                $class->subject()->detach($id);
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

    public function deleteSubject(Request $request)
    {
        if (auth()->user()->hasRole('admin')) {
            $class = ClassModel::find($request->class_id);
            $class->subject()->detach($request->subject_id);
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
