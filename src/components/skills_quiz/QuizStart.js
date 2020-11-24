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

    componentWillUnmount() {
        this.setState({
            questions: [],
            isHome: true,
            isLoading: true
        });
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
            display = <QuestionIterator questions={this.state.questions} track={this.state.track} />
        } else {
            display = <button onClick={this.handleClick} 
                        style={{marginLeft: '44%', backgroundColor: "#32E0C4",
                                borderRadius: 5, paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20, border: 0, marginTop: 5, marginBottom: 10, color: "#0D7377"}}
                        >Start</button>
        }

        return (
            <div style={{backgroundColor: "#EEEEEE"}}>
                <NavBar loggedIn={this.props.isLoggedIn}/>
                
            
                <div style={{border: '2px solid #0D7377', width: '40%', marginLeft: '30%', marginRight: '30%', borderRadius: 10, backgroundColor: "#0D7377", marginTop: 200, paddingTop: 20, paddingBottom: 25}}>
                    <h1 style={{color: "#EEEEEE", textAlign: 'center'}}>{this.state.track} Quiz</h1>
                    {display}
                </div>
            
                <div style={{textAlign:'center', height: 75, opacity: .3, fontSize: 10, marginTop: 400, bottom: 0, display: 'block', width: '100%',}}>
                Copyright: Allison Broski, Shelby McKay, Maurice Fuentes, Timothy Carpenter, Tanner Porteous
                <p>Oakland University</p>
            
            </div>
            </div>
        )
    }
}

export default QuizStart