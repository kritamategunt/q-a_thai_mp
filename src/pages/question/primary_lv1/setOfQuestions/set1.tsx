import QuestionBox, { type QuestionBoxProps } from "../../../../components/questionBox";

function Set1() {


    const questionsSet1: QuestionBoxProps = {
        title: 'ช่วงชั้นที่ 2',
        setOf: '1',
        shortParagraph: [
            {
                label: '',
                text: 'มีต้นไม้ใหญ่อยู่ต้นหนึ่งเด็กชายคนหนึ่งชอบมานั่งเล่นใต้ต้นไม้นี้ทุกวัน  เขามักจะปีนขึ้นไปเก็บผลไม้ของมันไปกิน เมื่อโตขึ้นเขาไม่ค่อยได้มาหาต้นไม้อีกเพราะต้องไปเรียนหนังสือ  วันหนึ่งเขากลับมาหาต้นไม้และขอผลไม้ไปขายเพื่อนำเงินไปเรียนต่อ  ต้นไม้ยอมให้ผลไม้ไปทั้งหมด  หลายปีต่อมาเด็กชายกลับมาอีก ขอไม้ไปสร้างบ้าน ต้นไม้จึงให้กิ่งก้านของมันไปหมดจนในที่สุดต้นไม้เหลือแต่ตอ เด็กชายกลับมาอีกครั้งในวัยชราต้นไม้บอกให้เขานั่งพักบนตอของมัน',
                appliesTo: { start: 0, end: 4 }
            }
        ],
        headerParagraph: 'เรื่องเด็กชายกับต้นไม้ใหญ่',
        question: [{
            questionNumber: 1,
            questionText: 'ข้อใดกล่าวถูกต้องที่สุดเกี่ยวกับต้นไม้ใหญ่',
            options: [{
                optionText: 'ต้นไม้เห็นแก่ตัว',
                optionId: 1
            }, {
                optionText: 'ต้นไม้ชอบเก็บของไว้ใช้เอง',
                optionId: 2
            }, {
                optionText: 'ต้นไม้รักและเสียสละให้เด็กชายเสมอ',
                optionId: 3,
                isCorrect: true
            }, {
                optionText: 'ต้นไม้ไม่อยากให้เด็กชายกลับมา',
                optionId: 4,
            }]
        },
        {
            questionNumber: 2,
            questionText: 'เด็กชายมีนิสัยอย่างไรในช่วงแรกของเรื่อง',
            options: [{
                optionText: 'ขยันและอดทน',
                optionId: 1
            }, {
                optionText: 'เห็นแก่ตัวเล็กน้อย',
                optionId: 2,
                isCorrect: true
            }, {
                optionText: 'ชอบช่วยเหลือต้นไม้',
                optionId: 3
            }, {
                optionText: 'เป็นคนเงียบๆไม่พูดคุยกับผู้อื่น',
                optionId: 4
            }]
        },
        {
            questionNumber: 3,
            questionText: 'ข้อคิดที่ได้จากเรื่องนี้ตรงกับข้อใด',
            options: [{
                optionText: 'ไม่ควรไว้ใจใครง่ายๆ',
                optionId: 1,
            }, {
                optionText: 'ควรเก็บผลไม้ไว้ขายเอง',
                optionId: 2
            }, {
                optionText: 'อย่าตัดต้นไม้เพราะโลกร้อน',
                optionId: 3
            }, {
                optionText: 'ควรตอบแทนคุณแก่ผู้มีพระคุณ',
                optionId: 4,
                isCorrect: true
            }
            ]
        },
        {
            questionNumber: 4,
            questionText: 'เรื่องนี้ใช้โวหารใด',
            options: [{
                optionText: 'พรรณนาโวหาร',
                optionId: 1,
            }, {
                optionText: 'บรรยายโวหาร',
                optionId: 2,
                isCorrect: true
            }, {
                optionText: 'สาธกโวหาร',
                optionId: 3
            }, {
                optionText: 'อุปมาโวหาร',
                optionId: 4
            }
            ]
        },
        {
            questionNumber: 5,
            questionText: 'คำในข้อใดมีเสียงวรรณยุกต์โทมากที่สุด',
            options: [{
                optionText: 'เด็กชายชอบมานั่งเล่นใต้ต้นไม้ทุกวัน',
                optionId: 1,
                isCorrect: true
            }, {
                optionText: 'เด็กชายนำผลไม้ไปขายเพื่อนำเงินไปเรียนหนังสือ',
                optionId: 2
            }, {
                optionText: 'เด็กชายกลับมาขอไม้ไปสร้างบ้าน',
                optionId: 3
            }, {
                optionText: 'ต้นไม้บอกให้เขานั่งพักบนตอของมัน',
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