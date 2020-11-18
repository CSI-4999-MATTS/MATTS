import React from 'react'
import NavBar from '../NavBar';
import QuizQuestion from '../skills_quiz/QuizQuestion';

// We're using a class component here, because they tend to make dealing with state a little easier.
class QuizStart extends React.Component {
    constructor(props){
        super();
        this.state = {
            track: 'Planning',
            progress: 0
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
        console.log('Clicked!')
        this.setState(state => ({
            progress: 1
        }));
    }


    render() {
        let display;

        if (this.state.progress === 0){
            display = <button onClick={this.handleClick}>Start</button>
        } else {
            display = <QuizQuestion />
        }

        return (
            <div>
                <NavBar loggedIn={this.props.isLoggedIn}/>
                <h1>{this.state.track} Quiz</h1>
                {/* Would want a conditionally rendering component here that will render question text, or not show up at all? */}
                {/* Do ideally need a start button */}
                {display}

            </div>
        )
    }
}

export default QuizStart