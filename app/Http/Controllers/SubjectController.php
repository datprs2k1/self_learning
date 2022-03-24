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
        $subject = Subject::with('class')->orderBy('id', 'desc')->get();
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
        if (auth()->user()->hasRole('admin')) {
            $request->validate(
                [
                    'code' => 'required|max:255|unique:subject',
                    'name' => 'required|max:255|unique:subject',
                ],
                [
                    'name.required' => 'Tên môn học không được để trống.',
                    'name.max' => 'Tên môn học không được quá 255 ký tự.',
                    'name.unique' => 'Tên môn học đã tồn tại.',
                    'code.required' => 'Mã môn học không được để trống.',
                    'code.max' => 'Mã môn học không được quá 255 ký tự.',
                    'code.unique' => 'Mã môn học đã tồn tại.',
                ]
            );

            $subject = new Subject();
            $subject->name = $request->name;
            $subject->code = $request->code;
            $subject->weeks = $request->weeks;
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
        $subject = Subject::with('class')->where('id', $id)->first();
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
                    'code' => 'required|max:255|unique:subject,code,' . $id,
                    'name' => 'required|max:255|unique:subject,name,' . $id,
                ],
                [
                    'name.required' => 'Tên môn học không được để trống.',
                    'name.max' => 'Tên môn học không được quá 255 ký tự.',
                    'name.unique' => 'Tên môn học đã tồn tại.',
                    'code.required' => 'Mã môn học không được để trống.',
                    'code.max' => 'Mã môn học không được quá 255 ký tự.',
                    'code.unique' => 'Mã môn học đã tồn tại.',
                ]
            );

            $subject = Subject::find($id);
            $subject->name = $request->name;
            $subject->code = $request->code;
            $subject->weeks = $request->weeks;
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
