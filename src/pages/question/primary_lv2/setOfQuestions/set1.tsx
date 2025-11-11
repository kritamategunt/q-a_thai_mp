import QuestionBox, { type QuestionBoxProps } from "../../../../components/questionBox";

function Set1() {


    const questionsSet1: QuestionBoxProps = {
        title: 'ช่วงชั้นที่ 3',
        setOf: '1',
        shortParagraph: [
            {
                label: '',
                text: 'ปัจจุบันคนรุ่นใหม่หันมาให้ความสำคัญกับสิ่งแวดล้อมมากขึ้น การลดการใช้พลาสติกและการนำวัสดุกลับมาใช้ซ้ำเป็นแนวทางที่ช่วยลดปริมาณขยะได้อย่างมีประสิทธิภาพ นอกจากนี้เทคโนโลยีสีเขียวยังเข้ามามีบทบาทในการผลิตพลังงานสะอาด เช่นพลังงานแสงอาทิตย์และพลังงานลม ซึ่งช่วยลดการปล่อยก๊าซเรือนกระจกได้ในระยะยาว',
                appliesTo: { start: 0, end: 4 }
            }
        ],
        headerParagraph: 'อ่านข้อความแล้วตอบคำถาม',
        question: [{
            questionNumber: 1,
            questionText: 'ข้อความกล่าวถึงเรื่องใดเป็นสำคัญ',
            options: [{
                optionText: 'การใช้พลังงานทดแทน',
                optionId: 1
            }, {
                optionText: 'การอนุรักษ์สิ่งแวดล้อม',
                optionId: 2,
                isCorrect: true
            }, {
                optionText: 'การพัฒนาเทคโนโลยี',
                optionId: 3
            }, {
                optionText: 'การลดมลพิษทางอากาศ',
                optionId: 4,
            }]
        },
        {
            questionNumber: 2,
            questionText: 'ข้อใดไม่สอดคล้องกับแนวคิดของบทอ่าน',
            options: [{
                optionText: 'การใช้ถุงผ้าแทนถุงพลาสติก',
                optionId: 1
            }, {
                optionText: 'การเผาขยะเป็นวิธีลดก๊าซเรือนกระจก',
                optionId: 2,
                isCorrect: true
            }, {
                optionText: 'การติดตั้งแผงโซลาร์เซลล์ช่วยลดพลังงานฟอสซิล',
                optionId: 3
            }, {
                optionText: 'การใช้วัสดุรีไซเคิลเป็นการใช้ทรัพยากรอย่างคุ้มค่า',
                optionId: 4
            }]
        },
        {
            questionNumber: 3,
            questionText: 'ผู้เขียนต้องการสื่อสารสิ่งใด',
            options: [{
                optionText: 'เทคโนโลยีทำลายสิ่งแวดล้อม',
                optionId: 1,
            }, {
                optionText: 'คนรุ่นใหม่ไม่ใส่ใจสิ่งแวดล้อม',
                optionId: 2
            }, {
                optionText: 'การร่วมมือกันอนุรักษ์สิ่งแวดล้อมสิ่งสำคัญ',
                optionId: 3,
                isCorrect: true
            }, {
                optionText: 'เชิญชวนให้ใช้พลังงานแสงอาทิตย์',
                optionId: 4
            }
            ]
        },
        {
            questionNumber: 4,
            questionText: 'ข้อใดมีคำสมาส',
            options: [{
                optionText: 'การนำวัสดุกลับมาใช้ซ้ำ',
                optionId: 1,
            }, {
                optionText: 'พลังงานแสงอาทิตย์และพลังงานลม',
                optionId: 2
            }, {
                optionText: 'คนรุ่นใหม่หันมาให้ความสำคัญกับสิ่งแวดล้อม',
                optionId: 3
            }, {
                optionText: 'แนวทางที่ช่วยลดปริมาณขยะอย่างมีประสิทธิภาพ',
                optionId: 4,
                isCorrect: true
            }
            ]
        },
        {
            questionNumber: 5,
            questionText: 'ข้อความนี้มีคำทับศัพท์กี่คำ',
            options: [{
                optionText: '๒ คำ',
                optionId: 1
            }, {
                optionText: '๓ คำ',
                optionId: 2,
                isCorrect: true
            }, {
                optionText: '๔ คำ',
                optionId: 3
            }, {
                optionText: '๕ คำ',
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