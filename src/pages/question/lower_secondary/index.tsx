import { useEffect, useState } from "react"
import { getRandomQuestion } from "../../../components/randomQuestion";
import Set1 from "./setOfQuestions/set1";
import Set2 from "./setOfQuestions/set2";

function LowerSecondary() {

    const [setOfQuestions, setSetOfQuestions] = useState<number | null>(null);


    const randomQuestion = () => {
        const question = getRandomQuestion(2);
        setSetOfQuestions(question);
        console.log(question);
    };

    const renderSetOfQuestion = () => {
        if (setOfQuestions === 1) {
            return <Set1 />;
        } else if (setOfQuestions === 2) {
            return <Set2 />;
        } else {
            return null;
        }
    };

    useEffect(() => {
        randomQuestion();
    }, []);


    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            {renderSetOfQuestion()}
        </div>
    )
}

export default LowerSecondary