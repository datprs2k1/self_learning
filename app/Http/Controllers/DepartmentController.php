<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Department;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $data = Department::with('Class')->orderBy('id', 'desc')->get();
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
                    'code' => 'required|unique:department',
                    'name' => 'required|unique:department',
                ],
                [
                    'code.required' => 'Mã khoa không được để trống.',
                    'code.unique' => 'Mã khoa đã tồn tại.',
                    'name.required' => 'Tên khoa không được để trống.',
                    'name.unique' => 'Tên khoa đã tồn tại.',
                ]
            );

            $department = new Department();
            $department->code = $request->code;
            $department->name = $request->name;
            $department->created_at = date('Y-m-d H:i:s');
            $department->save();

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
        return Department::find($id);
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
                ],
                [
                    'code.required' => 'Mã khoa không được để trống.',
                    'name.required' => 'Tên khoa không được để trống.',
                ]
            );

            $department = Department::find($id);
            $department->code = $request->code;
            $department->name = $request->name;
            $department->updated_at = date('Y-m-d H:i:s');
            $department->save();

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
            $department = Department::find($id);
            $department->delete();

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
                $department = Department::find($id);
                $department->delete();
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

    public function getDepartmentCount()
    {
        $count = Department::count();

        return response()->json($count, 200);
    }
}
