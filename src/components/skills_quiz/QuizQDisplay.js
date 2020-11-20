import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { questionConverter } from './QuestionClass';

function QuizQDisplay(props) {

    var questions = [];
    var collection;

    useEffect(() => {
        if (props.track === 'Testing & Deployment') {
            collection = 'Test_Deploy'
        } else {
            collection = props.track
        }

    }, [props.track]);

    retrieveQuestions(collection);

    function retrieveQuestions(collection){
        var questionSet = db.collection('Quizzes').doc(collection).collection('Questions')

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
    }

    return (
        <div>
            <h1>Hello sweetie</h1>
            <h2>NEW!</h2>
            <ol>
            </ol>
        </div> 
    )
}

export default QuizQDisplay;