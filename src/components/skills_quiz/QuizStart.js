import React from 'react'
import NavBar from '../NavBar';

class QuizStart extends React.Component {
    constructor(props){
        super();
    }

    render() {
        return (
            <dvi>
                <NavBar loggedIn={this.props.isLoggedIn}/>
                <h1>Greetings mortals</h1>
            </dvi>
        )
    }
}

export default QuizStart