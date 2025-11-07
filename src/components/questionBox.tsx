import { useState } from "react";
import { indexIdGenerator } from "../utils/idGenarator"
import Swal from 'sweetalert2';

export interface QuestionBoxProps {
    title: string,
    setOf: string,
    shortParagraph: string,
    headerParagraph?: string,
    question: {
        questionNumber: number,
        questionText: string,
        options: {
            optionText: string,
            optionId: number,
            isCorrect?: boolean
        }[]
    }[]
}

const QuestionBox = ({
    title,
    setOf,
    shortParagraph,
    headerParagraph,
    question
}: QuestionBoxProps) => {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const currentQuestion = question[currentQuestionIndex];

    const handleNext = () => {
        if (currentQuestionIndex < question.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleSubmit = () => {
        Swal.fire({
            title: 'ต้องการส่งคำตอบหรือไม่?',
            icon: 'info',
            confirmButtonText: 'ตกลง',
            showCancelButton: true,
            cancelButtonText: 'ยกเลิก',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'ส่งคำตอบเรียบร้อย!',
                    text: `คุณได้คะแนน ${score} จาก ${question.length} ข้อ`,
                    icon: 'success',
                    confirmButtonText: 'ตกลง',
                });
            }
        });
    }

    return (
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-4">

            <h1 className="text-xl font-bold">{title}: คำถามชุดที่ {setOf}</h1>

            <div className="text-sm text-gray-600">
                คำถามข้อที่ {currentQuestion.questionNumber} จาก {question.length}
            </div>

            <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                    className="bg-blue-500 h-2 rounded-full transition-all"
                    style={{ width: `${((currentQuestionIndex + 1) / question.length) * 100}%` }}
                ></div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
                <h2 className="font-semibold mb-2">{headerParagraph}</h2>
                <p className="text-sm text-gray-700">{shortParagraph}</p>
            </div>

            <div>
                <p className="font-semibold mb-2">{currentQuestion.questionNumber}. {currentQuestion.questionText}</p>

                <div className="space-y-2">
                    {currentQuestion.options.map((option) => (
                        <label key={option.optionId} className="flex items-center gap-2 p-2 border rounded-lg cursor-pointer hover:bg-gray-50">
                            <input type="radio" name={`q${currentQuestionIndex}`} onClick={() => {
                                if (option.isCorrect) {
                                    setScore(score + 1);
                                }
                            }} />
                            {option.optionText}
                        </label>
                    ))}
                </div>
            </div>

            <div className="flex justify-between mt-4">
                <button
                    className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
                    disabled={currentQuestionIndex === 0}
                    onClick={handlePrev}
                >
                    ก่อนหน้า
                </button>


                {
                    currentQuestionIndex === question.length - 1 ? (
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
                            onClick={handleSubmit}
                        >
                            จบแบบทดสอบ
                        </button>
                    ) : (
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
                            disabled={currentQuestionIndex === question.length - 1}
                            onClick={handleNext}
                        >
                            ถัดไป
                        </button>
                    )
                }
            </div>

        </div>
    );
};

export default QuestionBox;
