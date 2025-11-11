import QuestionBox, { type QuestionBoxProps } from "../../../../components/questionBox"

function Set2() {

    const questionsSet2: QuestionBoxProps = {
        title: 'ช่วงชั้นที่ 2',
        setOf: '2',
        shortParagraph: [
            {
                label: 'อ่านข้อความแล้วตอบคำถามข้อ 1 - 2',
                text: 'วันหนึ่งต้นกล้าเห็นคุณยายกำลังถือของหนัก เขาจึงรีบวิ่งไปช่วยถือของจนถึงบ้าน  คุณยายยิ้มและกล่าวว่า ขอบใจนะหนูเป็นเด็กดีจริงๆ',
                appliesTo: { start: 0, end: 2 }
            },
            {
                label: 'อ่านข้อความแล้วตอบคำถามข้อ 3 - 5',
                text: 'เมื่อครูถามคำถาม เด็กชายภัทร ตอบผิดแต่เขายังยิ้มและตั้งใจฟังคำอธิบายจากครู',
                appliesTo: { start: 3, end: 5 }
            },
        ],
        headerParagraph: '',
        question: [{
            questionNumber: 1,
            questionText: 'พฤติกรรมที่น่ายกย่องของต้นกล้าคือข้อใด',
            options: [{
                optionText: 'ไปวิ่งเล่นกับเพื่อน',
                optionId: 1
            }, {
                optionText: 'รีบวิ่งช่วยคุณยายถือของ',
                optionId: 2,
                isCorrect: true
            }, {
                optionText: 'ยิ้มให้คุณยาย',
                optionId: 3
            }, {
                optionText: 'มองดูคุณยายด้วยความเห็นใจ',
                optionId: 4,
            }]
        },
        {
            questionNumber: 2,
            questionText: 'ต้นกล้ามีคุณธรรมข้อใด',
            options: [{
                optionText: 'มีความรับผิดชอบ ',
                optionId: 1,
            }, {
                optionText: 'มีความอ่อนน้อมถ่อมตน',
                optionId: 2
            }, {
                optionText: 'มีความกล้าหาญ',
                optionId: 3
            }, {
                optionText: 'มีความเอื้อเฟื้อเผื่อแผ่',
                optionId: 4,
                isCorrect: true
            }]
        },
        {
            questionNumber: 3,
            questionText: 'ข้อใดไม่ตรงกับลักษณะนิสัยของภัทร',
            options: [{
                optionText: 'ตั้งใจเรียน',
                optionId: 1,
            }, {
                optionText: 'มีความพยายาม',
                optionId: 2,
                isCorrect: true
            }, {
                optionText: 'กล้าหาญ',
                optionId: 3
            }, {
                optionText: 'อดทนอดกลั้น',
                optionId: 4
            }
            ]
        },
        {
            questionNumber: 4,
            questionText: 'จากข้อความมีคำเชื่อมกี่คำ',
            options: [{
                optionText: '๒ คำ ',
                optionId: 1
            }, {
                optionText: '๓ คำ ',
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
        {
            questionNumber: 5,
            questionText: '“หย่อมหญ้าเหี่ยวแห้งเรื้อ  บอกร้ายแสลงดิน”    ข้อใดกล่าวถูกต้อง',
            options: [{
                optionText: 'หย่อม – หญ้า  เป็นสัมผัสพยัญชนะ',
                optionId: 1,
                isCorrect: true
            }, {
                optionText: 'เหี่ยว - แห้ง    เป็นสัมผัสบังคับ',
                optionId: 2
            }, {
                optionText: 'หญ้า -  เรื้อ     มีเสียงวรรณยุกต์โท',
                optionId: 3
            }, {
                optionText: 'มีเสียงวรรณยุกต์เอกมากที่สุด',
                optionId: 4,
            }
            ]
        },
        ]
    }

    return (
        <div className="max-h-screen w-full flex justify-center items-center">
            {QuestionBox(questionsSet2)}
        </div>
    )
}

export default Set2