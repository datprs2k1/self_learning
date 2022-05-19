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
        $delete = json_decode($request->delete);
        if (count($delete) > 0) {
            foreach ($delete as $id) {
                $question = Question::find($id);
                $question->delete();
            }
        }

        if (auth()->user()->hasRole('admin')) {
            $questions = $request->questions;
            $questions = json_decode($questions);
            foreach ($questions as $question) {
                if ($this->checkQuestion($question->id)) {
                    $a = Question::find($question->id);
                } else {
                    $a = new Question();
                }
                $a->question = $question->question;
                $a->Ans_A = $question->Ans_A;
                $a->Ans_B = $question->Ans_B;
                $a->Ans_C = $question->Ans_C;
                $a->Ans_D = $question->Ans_D;
                $a->lesson_id = $question->lesson_id;
                $a->total_time =  $request->totalTime;
                $a->Correct_Ans = $question->Correct_Ans;
                $a->created_at = date('Y-m-d H:i:s');
                $a->save();
            }
        }

        return response()->json(['success' => 'Thành công'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        //
        $class_id = $request->class_id;
        $subject_id = $request->subject_id;
        $lesson_id = $request->lesson_id;
        $week = $request->week;
        $question = Question::where('class_id', $class_id)->where('subject_id', $subject_id)->where('lesson_id', $lesson_id)->where('week', $week)->get();
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
            if ($question) {
                $question->delete();
                return response()->json([
                    'message' => 'Xóa câu hỏi thành công.',
                ], 200);
            }
        }
    }

    public function deleteMutiple(Request $request)
    {
        dd($request);
    }

    public function checkQuestion($id)
    {
        $question = Question::find($id);
        if ($question) {
            return true;
        }
        return false;
    }
}
