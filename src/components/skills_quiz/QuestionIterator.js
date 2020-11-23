import React, { useState, useRef } from 'react';
import QuizQDisplay from './QuizQDisplay';

function QuestionIterator(props){

    var [questionNum, setQuestionNum] = useState(0);
    var advanceText = useRef('Next');
    // Need to address question looping - questions is an array
    var questions = props.questions;

    console.log(questions[0].q_text)

    // Advances each question by setting questionNum to the next value
    function advanceQ(){
        let last = questionNum
        // If on the last question, display 'End'
        if (last === questions.length - 2) {
            console.log('Enter end')
            advanceText.current = 'End';
        }
        setQuestionNum(last+1)
    }
    
    return (
        <div>
            <div>
                {/* On click, advance question */}
                <QuizQDisplay qN={questions[questionNum]}/>
                <button onClick={() => advanceQ()}>{advanceText.current}</button>
            </div>
            {/* Add element which renders when some conditional state is achieved. */}
        </div>
    )

}

export default QuestionIterator;