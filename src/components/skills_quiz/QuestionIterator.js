import React, { useState, useEffect, useRef } from 'react';
import { db } from '../../firebase/config';
import { questionConverter } from './QuestionClass';
import QuizQDisplay from './QuizQDisplay';

function QuestionIterator(props){

    var [questions, setQuestions] = useState([])
    var [loading, setLoading] = useState(true);
    var collection = useRef('Planning'); 
    var [questionNum, setQuestionNum] = useState(0);

    // Fetches questions from DB
    useEffect(() => {
        if (props.track === 'Testing & Deployment') {
            collection.current = 'Test_Deploy';
        } else {
            collection.current = props.track;
        }

        if (questions.length === 0){
            const questionSet = db.collection('Quizzes').doc(collection.current).collection('Questions')
            var tempArray = [];

            questionSet.withConverter(questionConverter).get().then(function(response) {
                response.forEach(document => {
                    var question = document.data()
                    tempArray.push(question)
                })
                setQuestions(tempArray)
            })
            setLoading(false)
        }
    }, [props.track, questions.length]);

    function advanceQ(){
        let last = questionNum
        console.log('Last', last)
    }
    
    return (
        <div>
            {/* Want to add another spinner while loading */}
            {loading ? <h1>HIIIIIII</h1> : 
            <div>
                {/* On click, advance question */}
                <QuizQDisplay qN={questions[questionNum]}/>
                <button onClick={() => advanceQ()}>Next</button>
            </div>}
        </div>
    )

}

export default QuestionIterator;