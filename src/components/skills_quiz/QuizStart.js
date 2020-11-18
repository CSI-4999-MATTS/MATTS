import React from 'react'
import NavBar from '../NavBar';

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
        const { track } = this.props.location.state
        this.setState({
            track: track
        })
    }


    render() {
        let button;
        if (this.state.progress === 0){
            button = "Start";
        } else {
            button = "Next";
        }

        return (
            <div>
                <NavBar loggedIn={this.props.isLoggedIn}/>
                <h1>{this.state.track} Quiz</h1>
                <button>{button}</button>
            </div>
        )
    }
}

export default QuizStart