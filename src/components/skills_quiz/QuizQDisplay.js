import React from 'react';

function QuizQDisplay(props) {

    var help = {...props.qN}

    function passResult(value){
        props.result(value);
    }

    return (
        <div>
           <h3 style={{color: "#32E0C4", paddingLeft: 15}}>Question: {help.q_text}</h3>
           {help.q_options.map(function(option){
               return <label style={{color: "#EEEEEE"}} key={option}>
                        <input type="radio" name="selections" key={option} onClick={() => passResult(option)}/>
                        {option}
                    <br/></label>
           })}
        </div> 
    )
}

export default QuizQDisplay;