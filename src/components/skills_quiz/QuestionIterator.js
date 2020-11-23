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

    function setEarlyResult(result){

    }
    
    return (
        <div>
            <div>
                {/* On click, advance question */}
                <QuizQDisplay qN={questions[questionNum]}/>
                <button 
                    style={{marginLeft: '44%', 
                            backgroundColor: "#32E0C4", 
                            borderRadius: 5, 
                            paddingTop: 10, 
                            paddingBottom: 10, 
                            paddingLeft: 20, 
                            paddingRight: 20, 
                            border: 0, 
                            marginTop: 5, 
                            marginBottom: 10, 
                            color: "#0D7377"}} 
                    onClick={() => advanceQ()}
                    result={setEarlyResult}>{advanceText.current}
                </button>
            </div>
            {/* Add element which renders when some conditional state is achieved. */}
        </div>
    )

}

export default QuestionIterator;