import React from 'react'
import NavBar from '../NavBar';
import QuestionIterator from './QuestionIterator';
import { db } from '../../firebase/config';
import { questionConverter } from './QuestionClass';

// We're using a class component here, because they tend to make dealing with state a little easier.
class QuizStart extends React.Component {
    constructor(props){
        super();
        this.state = {
            track: 'Planning',
            isHome: true,
            questions: [],
            isLoading: true
        };
    }

    componentDidMount () {
        const { track } = this.props.location.state;
        this.setState({
            track: track
        });

        this.handleClick = this.handleClick.bind(this);
        this.loadData(track)
    }

    // Fetch data from this step instead of the QuestionIterator. Otherwise, we'd have to do a whole bunch of checks that keep the code messy
    loadData(track) {
        console.log('Enter in with: ', track)
        var collection;

        if (track === 'Testing & Deployment') {
            collection = 'Test_Deploy';
        } else {
            collection = track;
        }

        if (this.state.questions.length === 0){
            const questionSet = db.collection('Quizzes').doc(collection).collection('Questions')
            var tempArray = [];

            questionSet.withConverter(questionConverter).get().then(function(response) {
                response.forEach(document => {
                    var question = document.data()
                    tempArray.push(question)
                })
            })
            this.setState({
                questions: tempArray,
                isLoading: false
            })
        }
    }

    handleClick() {
        this.setState(state => ({
            isHome: false
        }));
    }


    render() {
        let display;
        if (!this.state.isHome && !this.state.isLoading) {
            display = <QuestionIterator questions={this.state.questions}/>
        } else {
            display = <button onClick={this.handleClick}>Start</button>
        }

        return (
            <div>
                <NavBar loggedIn={this.props.isLoggedIn}/>
                <h1>{this.state.track} Quiz</h1>
                {display}
            </div>
        )
    }
}

export default QuizStart