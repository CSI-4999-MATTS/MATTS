import React from 'react';
import { db } from '../../firebase/config';

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

        questionSet.get().then(function(response) {
            response.forEach(document => {
                // May make sense to make response a custom object?
                console.log(document.data())
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