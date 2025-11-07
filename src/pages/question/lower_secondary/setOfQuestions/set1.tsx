import QuestionBox, { type QuestionBoxProps } from "../../../../components/questionBox";

function Set1() {


    const questionsSet1: QuestionBoxProps = {
        title: 'ช่วงชั้นที่ 1',
        setOf: '1',
        shortParagraph: 'วันหนึ่งแม่พามายด์ไปตลาด  มายด์เห็นลูกแมวสีดำหน้าตาน่ารักตัวหนึ่ง เธอขอแม่ซื้อมันกลับบ้าน มายด์ตั้งชื่อว่า มันนี่ ทุกเช้ามายด์ตื่นแต่เช้าเพื่อให้นมและเล่นด้วยกันอย่างสนุกสนาน',
        headerParagraph: 'อ่านข้อความแล้วตอบคำถาม',
        question: [{
            questionNumber: 1,
            questionText: 'แมวสีดำชื่อว่าอะไร',
            options: [{
                optionText: 'มีนนี่',
                optionId: 1
            }, {
                optionText: 'แมนนี่',
                optionId: 2
            }, {
                optionText: 'โมนี่',
                optionId: 3
            }, {
                optionText: 'มันนี่',
                optionId: 4,
                isCorrect: true
            }]
        },
        {
            questionNumber: 2,
            questionText: 'มายด์ได้ลูกแมวมาจากที่ใด',
            options: [{
                optionText: 'ตลาด',
                optionId: 1,
                isCorrect: true
            }, {
                optionText: 'สวนผลไม้',
                optionId: 2
            }, {
                optionText: 'โรงเรียน',
                optionId: 3
            }, {
                optionText: 'บ้านเพื่อน',
                optionId: 4
            }]
        },
        ]
    }

    return (
        <div className="max-h-screen w-full flex justify-center items-center">
            {QuestionBox(questionsSet1)}
        </div>
    )
}

export default Set1