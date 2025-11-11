import QuestionBox, { type QuestionBoxProps } from "../../../../components/questionBox"

function Set2() {

    const questionsSet2: QuestionBoxProps = {
        title: 'ช่วงชั้นที่ 1',
        setOf: '2',
        shortParagraph: [
            {
                label: '',
                text: 'ที่บ้านป้าชุมีต้นมะม่วงต้นใหญ่ \nทุกปีป้าชุจะเก็บมะม่วงไปแจกเพื่อนบ้าน บางส่วนเอาไปทำข้าวเหนียวมะม่วง\n เด็กในหมู่บ้านชอบข้าวเหนียวมะม่วงมากเพราะหอมหวานมันอร่อย',
                appliesTo: { start: 0, end: 4 }
            }
        ],
        headerParagraph: 'อ่านข้อความแล้วตอบคำถาม',
        question: [{
            questionNumber: 1,
            questionText: 'ป้าชุเก็บมะม่วงไปทำอะไร',
            options: [{
                optionText: 'แจกเพื่อนบ้าน',
                optionId: 1,
                isCorrect: true
            }, {
                optionText: 'ตักบาตร',
                optionId: 2
            }, {
                optionText: 'ทำอาหาร ',
                optionId: 3
            }, {
                optionText: 'มะม่วงกวน',
                optionId: 4,
            }]
        },
        {
            questionNumber: 2,
            questionText: 'เหตุการณ์ใดเกิดขึ้นเป็นลำดับที่ ๑',
            options: [{
                optionText: 'เด็กๆชอบกินข้าวเหนียวมะม่วง',
                optionId: 1,
            }, {
                optionText: 'ป้าชุเก็บมะม่วง',
                optionId: 2
            }, {
                optionText: 'ป้าชุมีต้นมะม่วงต้นใหญ่',
                optionId: 3,
                isCorrect: true
            }, {
                optionText: 'ป้าชุปลูกผลไม้มากมาย',
                optionId: 4
            }]
        },
        {
            questionNumber: 3,
            questionText: 'ป้าชุมีลักษณะนิสัยอย่างไร',
            options: [{
                optionText: 'มีความเมตตา',
                optionId: 1,
            }, {
                optionText: 'มีความเสียสละ',
                optionId: 2
            }, {
                optionText: 'มีน้ำใจ',
                optionId: 3
            }, {
                optionText: 'มีมารยาทที่ดี',
                optionId: 4,
                isCorrect: true
            }
            ]
        },
        {
            questionNumber: 4,
            questionText: 'เด็กในหมู่บ้านชอบข้าวเหนียวมะม่วงมากเพราะหอมหวานมันอร่อย \nข้อความนี้ใช้สระประสมกี่คำ',
            options: [{
                optionText: '๒ คำ ',
                optionId: 1,
                isCorrect: true
            }, {
                optionText: '๓ คำ ',
                optionId: 2
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
            questionText: 'ข้าวเหนียวมะม่วง  มีเสียงวรรณยุกต์ใด',
            options: [{
                optionText: 'เสียงจัตวา  เอก  โท  ตรี',
                optionId: 1,
            }, {
                optionText: 'เสียงจัตวา   เอก  โท ตรี',
                optionId: 2
            }, {
                optionText: 'เสียงโท  จัตวา  ตรี  โท',
                optionId: 3,
                isCorrect: true
            }, {
                optionText: 'เสียงโท  เอก  โท จัตวา',
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