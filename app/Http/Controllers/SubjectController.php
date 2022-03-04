<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subject;
use Mockery\Matcher\Subset;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $subject = Subject::with('Class')->orderBy('id', 'desc')->get();
        return response()->json($subject, 200);
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
                    'class_id' => 'required',
                ],
                [
                    'name.required' => 'Tên môn học không được để trống.',
                    'class_id.required' => 'Lớp không được để trống.',
                ]
            );

            $subject = new Subject();
            $subject->name = $request->name;
            $subject->class_id = $request->class_id;
            $subject->created_at = date('Y-m-d H:i:s');
            $subject->save();

            return response()->json([
                'message' => 'Thêm môn học thành công.',
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
        $subject = Subject::find($id);
        return response()->json($subject, 200);
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
                    'class_id' => 'required',
                ],
                [
                    'name.required' => 'Tên môn học không được để trống.',
                    'class_id.required' => 'Lớp không được để trống.',
                ]
            );

            $subject = Subject::find($id);
            $subject->name = $request->name;
            $subject->class_id = $request->class_id;
            $subject->updated_at = date('Y-m-d H:i:s');
            $subject->save();

            return response()->json([
                'message' => 'Cập nhật môn học thành công.',
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
            $subject = Subject::find($id);
            $subject->delete();

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
                $subject = Subject::find($id);
                $subject->delete();
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
