import React, { useState, useRef } from 'react';
import QuizQDisplay from './QuizQDisplay';

function QuestionIterator(props){

    var [questionNum, setQuestionNum] = useState(0);
    var advanceText = useRef('Next');
    var questionResponse = useRef('');
    var questions = props.questions;

    function questionNextSteps(){
        calculateResults();
        advanceQ();
    }

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

    // This is where we'll calculate out the response total
    function calculateResults(){
        // Check if correct answer
        var response = questions[questionNum].isCorrectAnswer(questionResponse.current)
        
    }

    //Gets result from QuizQDisplay through some funky backpropogation
    function setEarlyResult(result){
        questionResponse.current = result;
    }
    
    return (
        <div>
            <div>
                {/* On click, advance question */}
                <QuizQDisplay qN={questions[questionNum]} result={setEarlyResult}/>
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
                    onClick={() => questionNextSteps()}
                    >{advanceText.current}
                </button>
            </div>
            {/* Add element which renders when some conditional state is achieved. */}
        </div>
    )

}

export default QuestionIterator;