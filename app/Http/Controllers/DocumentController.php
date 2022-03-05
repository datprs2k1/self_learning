<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Document;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $document = Document::with('Subject')->with('Class')->orderBy('id', 'desc')->get();
        return response()->json($document, 200);
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
                    'content' => 'required',
                    'file' => 'required',
                    'subj_id' => 'required|integer',
                    'class_id' => 'required|integer',
                ],
                [
                    'name.required' => 'Tên tài liệu không được để trống.',
                    'content.required' => 'Nội dung tài liệu không được để trống.',
                    'file.required' => 'Tài liệu không được để trống.',
                    'subj_id.required' => 'Mã môn học không được để trống.',
                    'subj_id.integer' => 'Mã môn học không được để trống.',
                    'class_id.required' => 'Mã lớp không được để trống.',
                    'class_id.integer' => 'Mã lớp không được để trống.',
                ]
            );

            $file = $request->file;
            $name = time() . '_' . $file->getClientOriginalName();
            Storage::disk('public')->put($name, File::get($file));

            $document = new Document();
            $document->name = $request->name;
            $document->content = $request->content;
            $document->file_name = $name;
            $document->subj_id = $request->subj_id;
            $document->class_id = $request->class_id;
            $document->created_at = date('Y-m-d H:i:s');
            $document->save();

            return response()->json([
                'message' => 'Thêm thành công.',
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
        $document = Document::with('Subject')->with('Class')->find($id);
        return response()->json($document, 200);
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
                    'content' => 'required',
                    'subj_id' => 'required|integer',
                    'class_id' => 'required|integer',

                ],
                [
                    'name.required' => 'Tên tài liệu không được để trống.',
                    'content.required' => 'Nội dung tài liệu không được để trống.',
                    'subj_id.required' => 'Mã môn học không được để trống.',
                    'subj_id.integer' => 'Mã môn học không được để trống.',
                    'class_id.required' => 'Mã lớp không được để trống.',
                    'class_id.integer' => 'Mã lớp không được để trống.',
                ]
            );


            $document = Document::find($id);

            if ($request->file != 'undefined') {
                $file = $request->file;
                $name = time() . '_' . $file->getClientOriginalName();
                Storage::disk('public')->put($name, File::get($file));

                if (Storage::disk('public')->exists($document->file_name)) {
                    Storage::disk('public')->delete($document->file_name);
                }
            } else {
                $name = $document->file_name;
            }

            $document->name = $request->name;
            $document->content = $request->content;
            $document->file_name = $name;
            $document->subj_id = $request->subj_id;
            $document->class_id = $request->class_id;
            $document->created_at = date('Y-m-d H:i:s');
            $document->save();


            return response()->json([
                'message' => 'Thêm thành công.',
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
            $document = Document::find($id);
            $document->delete();

            if (Storage::disk('public')->exists($document->file_name)) {
                Storage::disk('public')->delete($document->file_name);
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

    public function deleteMutiple($ids)
    {
        if (auth()->user()->hasRole('admin')) {
            $ids = explode(',', $ids);
            foreach ($ids as $id) {
                $department = Document::find($id);
                $department->delete();

                if (Storage::disk('public')->exists($department->file_name)) {
                    Storage::disk('public')->delete($department->file_name);
                }
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
