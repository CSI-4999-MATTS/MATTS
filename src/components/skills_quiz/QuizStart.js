import React from 'react'
import NavBar from '../NavBar';
import QuestionIterator from './QuestionIterator';

// We're using a class component here, because they tend to make dealing with state a little easier.
class QuizStart extends React.Component {
    constructor(props){
        super();
        this.state = {
            track: 'Planning',
            isHome: true,
        };
    }

    componentDidMount () {
        const { track } = this.props.location.state;
        this.setState({
            track: track
        });

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isHome: false
        }));
    }


    render() {
        let display;
        // Send to QuestionIterator in order to fetch questions from DB. We'll do logic in QuestionIterator, and display in QuizQDsplay
        if (this.state.isHome){
            display = <button onClick={this.handleClick}>Start</button>
        } else {
            display = <QuestionIterator track={this.state.track}/>
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