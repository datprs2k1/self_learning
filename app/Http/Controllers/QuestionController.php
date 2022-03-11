<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Question;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

        $questions = Question::with('test')->get();
        return response()->json($questions, 200);
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
                    'question' => 'required',
                    'Ans_A' => 'required',
                    'Ans_B' => 'required',
                    'Ans_C' => 'required',
                    'Ans_D' => 'required',
                    'Correct_Ans' => 'required',
                    'test_id' => 'required',
                ],
                [
                    'question.required' => 'Câu hỏi không được để trống.',
                    'Ans_A.required' => 'Đáp án A không được để trống.',
                    'Ans_B.required' => 'Đáp án B không được để trống.',
                    'Ans_C.required' => 'Đáp án C không được để trống.',
                    'Ans_D.required' => 'Đáp án D không được để trống.',
                    'Correct_Ans.required' => 'Đáp án đúng không được để trống.',
                    'test_id.required' => 'Mã đề thi không được để trống.',
                ]
            );

            $question = new Question();
            $question->question = $request->question;
            $question->Ans_A = $request->Ans_A;
            $question->Ans_B = $request->Ans_B;
            $question->Ans_C = $request->Ans_C;
            $question->Ans_D = $request->Ans_D;
            $question->Correct_Ans = $request->Correct_Ans;
            $question->test_id = $request->test_id;
            $question->created_at = date('Y-m-d H:i:s');
            $question->save();

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
        $question = Question::with('test')->find($id);
        return response()->json($question, 200);
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
                    'question' => 'required',
                    'Ans_A' => 'required',
                    'Ans_B' => 'required',
                    'Ans_C' => 'required',
                    'Ans_D' => 'required',
                    'Correct_Ans' => 'required',
                    'test_id' => 'required',
                ],
                [
                    'question.required' => 'Câu hỏi không được để trống.',
                    'Ans_A.required' => 'Đáp án A không được để trống.',
                    'Ans_B.required' => 'Đáp án B không được để trống.',
                    'Ans_C.required' => 'Đáp án C không được để trống.',
                    'Ans_D.required' => 'Đáp án D không được để trống.',
                    'Correct_Ans.required' => 'Đáp án đúng không được để trống.',
                    'test_id.required' => 'Mã đề thi không được để trống.',
                ]
            );

            $question = Question::find($id);
            $question->question = $request->question;
            $question->Ans_A = $request->Ans_A;
            $question->Ans_B = $request->Ans_B;
            $question->Ans_C = $request->Ans_C;
            $question->Ans_D = $request->Ans_D;
            $question->Correct_Ans = $request->Correct_Ans;
            $question->test_id = $request->test_id;
            $question->created_at = date('Y-m-d H:i:s');
            $question->save();

            return response()->json([
                'message' => 'Thêm sinh viên thành công.',
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
            $question = Question::find($id);
            $question->delete();

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
                $question = Question::find($id);
                $question->delete();
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
