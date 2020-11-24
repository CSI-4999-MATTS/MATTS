import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import QuizQDisplay from './QuizQDisplay';

// Need to reset status after launch
function QuestionIterator(props){

    var [questionNum, setQuestionNum] = useState(0);
    var advanceText = useRef('Next');
    var questionResponse = useRef('');
    var userTotal = useRef(0);
    var totalTotal = useRef(0);
    const questions = props.questions;
    const history = useHistory();


    function questionNextSteps(){

        calculateResults();

        if (advanceText.current === 'End'){
            advanceQ(true)
            history.push('/Quiz');
        } else {
            console.log('Advance')
            advanceQ();
        }
    }

    // Advances each question by setting questionNum to the next value
    function advanceQ(conditionalStop=false){
        if (conditionalStop){
            console.log('Conditional stop')
            // Do nothing
        } else {
            let last = questionNum
            // If on the last question, display 'End'
            if (last === questions.length - 2) {
                advanceText.current = 'End';
            }
            setQuestionNum(last+1)
        }
    }

    // This is where we'll calculate out the response total
    function calculateResults(){
        const q = questions[questionNum];
        const value = q.getPointValue();
        var response = q.isCorrectAnswer(questionResponse.current);

        if (response){
            userTotal.current += value;
            console.log('User: ', userTotal.current)
        }
        totalTotal.current += value;
        console.log('Total:' , totalTotal.current)
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