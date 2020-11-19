import React from 'react';
import { db } from '../../firebase/config';
import { questionConverter } from './QuestionClass';

class QuizQuestion extends React.Component {
    constructor(props){
        super();
        this.state = {
            points: 0,
            qNum: 0,
        }
    }

    componentDidMount(){
        var collection;
        // Because firestore keeps the testing and deployment questions under a different heading, we need to fix things up a bit
        if (this.props.track === 'Testing & Deployment') {
            collection = 'Test_Deploy'
        } else {
            collection = this.props.track
        }

        var questionSet = db.collection('Quizzes').doc(collection).collection('Questions')

        // We use a converter object to transform the incoming question object from Firestore into a custom Question object, which you can see in QuestionClass.js
        // Idea would be to create methods in QuestionClass to handle to comparison and tallying of each question object.
        questionSet.withConverter(questionConverter).get().then(function(response) {
                response.forEach(document => {
                    var question = document.data();
                    question.toString();
                })
            })
    }

    render(){
        return (
            <div>
                <h1>Hello sweetie</h1>
                <h2>{this.state.qNum}</h2>
            </div> 
        )
    }
}

export default QuizQuestion;