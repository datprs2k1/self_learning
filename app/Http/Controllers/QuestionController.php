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
                $a->answer_A = $question->answer_A;
                $a->answer_B = $question->answer_B;
                $a->answer_C = $question->answer_C;
                $a->answer_D = $question->answer_D;
                $a->class_id = $question->class_id;
                $a->subject_id = $question->subject_id;
                $a->week = $question->week;
                $a->total_time = $request->total_time;
                $a->correct_Answer = $question->correct_Answer;
                $a->created_at = date('Y-m-d H:i:s');
                $a->save();
            }
        }

        return response()->json(['success' => 'Th??nh c??ng'], 200);
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
        $week = $request->week;
        $question = Question::where('class_id', $class_id)->where('subject_id', $subject_id)->where('week', $week)->get();
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

        if (auth()->user()->hasRole('admin') || auth()->user()->hasRole('teacher')) {
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
                    'question.required' => 'C??u h???i kh??ng ???????c ????? tr???ng.',
                    'Ans_A.required' => '????p ??n A kh??ng ???????c ????? tr???ng.',
                    'Ans_B.required' => '????p ??n B kh??ng ???????c ????? tr???ng.',
                    'Ans_C.required' => '????p ??n C kh??ng ???????c ????? tr???ng.',
                    'Ans_D.required' => '????p ??n D kh??ng ???????c ????? tr???ng.',
                    'Correct_Ans.required' => '????p ??n ????ng kh??ng ???????c ????? tr???ng.',
                    'test_id.required' => 'M?? ????? thi kh??ng ???????c ????? tr???ng.',
                ]
            );

            $question = Question::find($id);
            $question->question = $request->question;
            $question->answer_A = $request->answer_A;
            $question->answer_B = $request->answer_B;
            $question->answer_C = $request->answer_C;
            $question->answer_D = $request->answer_D;
            $question->correct_Answer = $request->correct_Answer;
            $question->total_time = $request->total_time;
            $question->updated_at = date('Y-m-d H:i:s');
            $question->save();

            return response()->json([
                'message' => 'S???a c??u h???i th??nh c??ng.',
            ], 200);
        } else {
            return response()->json(['errors' => ['auth' => ['B???n kh??ng c?? quy???n truy c???p.']]], 302);
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
                    'message' => 'X??a c??u h???i th??nh c??ng.',
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
