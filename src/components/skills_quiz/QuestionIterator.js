import React, { useState, useEffect, useRef } from 'react';
import { db } from '../../firebase/config';
import { questionConverter } from './QuestionClass';
import QuizQDisplay from './QuizQDisplay';

function QuestionIterator(props){

    var [questionNum, setQuestionNum] = useState(0);
    var advanceText = useRef('Next');

    var questions = props.questions;

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
            {/* Want to add another spinner while loading */}
            <div>
                {/* On click, advance question */}
                <h1>HIIIIII</h1>
                {/* <QuizQDisplay qN={questions[questionNum]}/>
                <button onClick={() => advanceQ()}>{advanceText.current}</button> */}
            </div>
            {/* Add element which renders when some conditional state is achieved. */}
        </div>
    )

}

export default QuestionIterator;