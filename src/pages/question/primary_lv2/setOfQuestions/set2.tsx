import QuestionBox, { type QuestionBoxProps } from "../../../../components/questionBox"

function Set2() {

    const questionsSet2: QuestionBoxProps = {
        title: 'ช่วงชั้นที่ 3',
        setOf: '2',
        shortParagraph: [
            {
                label: '',
                text: 'ในยุคปัจจุบัน ผู้คนหันมาใช้บริการอาหารออนไลน์กันมากขึ้น ความสะดวกสบายเป็นปัจจัยสำคัญที่ทำให้ธุรกิจนี้เติบโตอย่างรวดเร็ว  อย่างไรก็ตามการใช้บรรจุภัณฑ์พลาสติกจำนวนมากจากการสั่งอาหารอาจสร้างปัญหาด้านสิ่งแวดล้อมจึงมีมาตรการลดการใช้ภาชนะย่อยสลาย',
                appliesTo: { start: 0, end: 4 }
            }
        ],
        headerParagraph: 'อ่านข้อความแล้วตอบคำถาม',
        question: [{
            questionNumber: 1,
            questionText: 'ใจความสำคัญของข้อความคือข้อใด',
            options: [{
                optionText: 'ผู้คนควรเลิกสั่งอาหารออนไลน์',
                optionId: 1
            }, {
                optionText: 'การสั่งอาหารออนไลน์เป็นวิถีใหม่ของคนยุคนี้',
                optionId: 2
            }, {
                optionText: 'ธุรกิจอาหารออนไลน์เติบโตเพราะความสะดวก',
                optionId: 3
            }, {
                optionText: 'การสั่งอาหารออนไลน์อาจสร้างปัญหาด้านสิ่งแวดล้อม',
                optionId: 4,
                isCorrect: true
            }]
        },
        {
            questionNumber: 2,
            questionText: 'ผู้เขียนมีเจตนาในการเขียนข้อความนี้อะไร',
            options: [{
                optionText: 'บอกเล่าความนิยมในการสั่งอาหารออนไลน์ ',
                optionId: 1,
            }, {
                optionText: 'ชักชวนให้บริการสั่งอาหารออนไลน์',
                optionId: 2
            }, {
                optionText: 'วิจารณ์การทำงานของบริษัทส่งอาหาร',
                optionId: 3
            }, {
                optionText: 'เตือนให้เห็นผลกระทบต่อสิ่งแวดล้อมจากบรรจุภัณฑ์',
                optionId: 4,
                isCorrect: true
            }]
        },
        {
            questionNumber: 3,
            questionText: 'คำว่า “ปัจจัย” มีความหมายตรงกับข้อใด',
            options: [{
                optionText: 'สาเหตุ',
                optionId: 1,
                isCorrect: true
            }, {
                optionText: 'ตัวอย่าง',
                optionId: 2
            }, {
                optionText: 'อุปสรรค',
                optionId: 3
            }, {
                optionText: 'ผลลัพธ์',
                optionId: 4
            }
            ]
        },
        {
            questionNumber: 4,
            questionText: 'คำใดไม่ใช่คำบาลี',
            options: [{
                optionText: 'ปัจจัย',
                optionId: 1
            }, {
                optionText: 'ปัญหา',
                optionId: 2
            }, {
                optionText: 'ภัณฑ์',
                optionId: 3
            }, {
                optionText: 'บรรจุ',
                optionId: 4,
                isCorrect: true
            }
            ]
        },
        {
            questionNumber: 5,
            questionText: 'คำใดไม่ใช่คำเชื่อมในข้อความ',
            options: [{
                optionText: 'ที่',
                optionId: 1
            }, {
                optionText: 'จาก',
                optionId: 2,
                isCorrect: true
            }, {
                optionText: 'จึง',
                optionId: 3
            }, {
                optionText: 'อย่างไรก็ตาม',
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