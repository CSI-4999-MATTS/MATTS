import React, { useState, useEffect, useCallback, useRef } from 'react';
import { db } from '../../firebase/config';
import { questionConverter } from './QuestionClass';

function QuizQDisplay(props) {

    var questions = [];
    var collection = useRef('Planning');
    var [loading, setLoading] = useState(true);  


    useEffect(() => {
        if (props.track === 'Testing & Deployment') {
            collection.current = 'Test_Deploy';
        } else {
            collection.current = props.track;
        }

        if(questions.length !== 0){
            setLoading(false)
        } else {
            var questionSet = db.collection('Quizzes').doc(collection.current).collection('Questions')

            // We use a converter object to transform the incoming question object from Firestore into a custom Question object, which you can see in QuestionClass.js
            // Idea would be to create methods in QuestionClass to handle to comparison and tallying of each question object.
            questionSet.withConverter(questionConverter).get().then(function(response) {
                    response.forEach(document => {
                        var question = document.data();
                        // running asynch - need to address
                        console.log('Question in')
                        questions.push(question)
                    })
            })
            setLoading(false)
        }

    }, [props.track, questions])


    return (
        <div>
            {loading ? <h2>We're waiting</h2> : 
            <h2>We're done</h2>}
        </div> 
    )
}

export default QuizQDisplay;