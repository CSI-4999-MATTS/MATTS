import { Title } from '@material-ui/icons';
import React from 'react'
import NavBar from '../NavBar';

class QuizStart extends React.Component {
    constructor(props){
        super();
        this.state = {
            track: 'Planning'
        };
    }

    componentDidMount () {
        const { track } = this.props.location.state
        this.setState({
            track: track
        })
    }


    render() {
        return (
            <div>
                <NavBar loggedIn={this.props.isLoggedIn}/>
                <h1>Greetings mortals</h1>
                <h2>{this.state.track}</h2>
            </div>
        )
    }
}

export default QuizStart