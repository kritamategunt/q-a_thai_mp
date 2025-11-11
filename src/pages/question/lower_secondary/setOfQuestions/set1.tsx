import QuestionBox, { type QuestionBoxProps } from "../../../../components/questionBox";

function Set1() {


    const questionsSet1: QuestionBoxProps = {
        title: 'ช่วงชั้นที่ 1',
        setOf: '1',
        shortParagraph: [
            {
                label: '',
                text: 'วันหนึ่งแม่พามายด์ไปตลาด  มายด์เห็นลูกแมวสีดำหน้าตาน่ารักตัวหนึ่ง เธอขอแม่ซื้อมันกลับบ้าน มายด์ตั้งชื่อว่า มันนี่ ทุกเช้ามายด์ตื่นแต่เช้าเพื่อให้นมและเล่นด้วยกันอย่างสนุกสนาน',
                appliesTo: { start: 0, end: 4 }
            }
        ],
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
        {
            questionNumber: 3,
            questionText: 'เหตุการณ์ใดเกิดขึ้นเป็นอันดับที่ ๒',
            options: [{
                optionText: 'แม่พามายด์ไปตลาด  ',
                optionId: 1,
                isCorrect: true
            }, {
                optionText: 'ขอแม่มายด์ป้อนนมลูกแมว',
                optionId: 2
            }, {
                optionText: 'มันนี่เป็นชื่อของแมว',
                optionId: 3
            }, {
                optionText: 'แม่ซื้อลูกแมวสีดำ ',
                optionId: 4,
                isCorrect: true
            }
            ]
        },
        {
            questionNumber: 4,
            questionText: 'ลักษณะนิสัยของมายด์ตรงกับข้อใด',
            options: [{
                optionText: 'มีน้ำใจ',
                optionId: 1,
                isCorrect: true
            }, {
                optionText: 'เอื้อเฟื้อเผื่อแผ่',
                optionId: 2
            }, {
                optionText: 'เสียสละ',
                optionId: 3
            }, {
                optionText: 'เมตตา',
                optionId: 4,
                isCorrect: true
            }
            ]
        },
        {
            questionNumber: 5,
            questionText: 'มายด์เห็นลูกแมวสีดำหน้าตาน่ารักตัวหนึ่ง  มีตัวสะกดมาตราใด (ตามลำดับ)',
            options: [{
                optionText: 'เกย กม เกอว  กก  กง  กง',
                optionId: 1,
            }, {
                optionText: 'เกอว  กง กก กน กบ กง',
                optionId: 2
            }, {
                optionText: 'เกย กน กก เกอว กก  กง',
                optionId: 3,
                isCorrect: true
            }, {
                optionText: 'เกอว  กน  กก  กง กก กง',
                optionId: 4,

            }
            ]
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