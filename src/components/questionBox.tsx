import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [timerActive, setTimerActive] = useState(true);
    const navigate = useNavigate();
    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes} นาที ${remainingSeconds} วินาที`;
    };

    useEffect(() => {

        let timer: number;
        if (timerActive) {
            timer = setInterval(() => {
                setTimeElapsed((prev) => prev + 1);
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        };
    }, [timerActive]);

    const showResult = (score: number, total: number, correct: number, incorrect: number, timeTaken: any) => {
        Swal.fire({
            title: '',
            html: `
      <div class="bg-white w-full rounded-2xl p-6 shadow-md max-w-xs mx-auto">
        <h2 class="text-gray-600 text-sm font-medium">คุณได้คะแนน</h2>
        <h2 class="text-gray-600 text-sm font-medium">${title}: คำถามชุดที่ ${setOf}</h2>

        <p class="text-4xl font-bold mt-1">${score}/${total}</p>
        <p class="text-lg text-gray-500 font-semibold">${Math.round((score / total) * 100)}%</p>

        <div class="flex justify-center my-3">
          ${'<span class="text-yellow-400 text-xl">★</span>'.repeat(Math.round((score / total) * 5))}
        </div>

        <div class="grid gap-3 mt-5 text-sm">
          <div class="flex justify-between bg-green-100 p-3 rounded-lg">
            <span class="flex gap-2 items-center">
              ✅ จำนวนคำตอบถูกต้อง
            </span>
            <span class="font-bold">${correct}</span>
          </div>
          <div class="flex justify-between bg-red-100 p-3 rounded-lg">
            <span class="flex gap-2 items-center">
              ❌ จำนวนคำตอบผิด
            </span>
            <span class="font-bold">${incorrect}</span>
          </div>
          <div class="flex justify-between bg-blue-100 p-3 rounded-lg">
            <span class="flex gap-2 items-center">
              ⏱ ใช้เวลา
            </span>
            <span class="font-bold">${timeTaken}</span>
          </div>
          <p>*อย่าลืมแคปรูปหน้าจอให้พี่ๆดูด้วยละ!</p>
        </div>
      </div>
    `,
            showConfirmButton: true,
            confirmButtonText: 'ตกลง',
            background: 'transparent',
            customClass: {
                popup: 'p-0 border-0 shadow-none',
            }
        }).then(() => {
            navigate('/');
        });
    };

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
                setTimerActive(false);
                showResult(score, question.length, score, question.length - score, formatTime(timeElapsed));
            }
        });
    }

    useEffect(() => {
        setScore(0);
    }, [setOf]);

    return (
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-4">
            <h1 className="text-right">{formatTime(timeElapsed)}</h1>
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
                                } else {
                                    setScore(score + 0);
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
