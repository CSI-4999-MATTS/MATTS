import React, { useState, useEffect, useCallback, useRef } from 'react';

function QuizQDisplay(props) {

    var [loadQ, setLoadQ] = useState(false);
    var help = {...props.qN}
    console.log(help.q_options)

    /** Maybe this page only displays the question text, then calls on the Quiz Class methods to perform computation
     * <h1> Question text </h1>
     * <ol> Options </ol>
     * <li onClick={question.computeScore()} />
     * 
     * Will get in full question info
     */

    return (
        <div>
           <h3 style={{color: "#32E0C4", paddingLeft: 15}}>Question: {help.q_text}</h3>
           {help.q_options.map(function(option){
               return <label style={{color: "#EEEEEE"}} key={option}>
                        <input type="radio" name="selections" key={option} value={option} />
                        {option}
                    <br/></label>
           })}
        </div> 
    )
}

export default QuizQDisplay;