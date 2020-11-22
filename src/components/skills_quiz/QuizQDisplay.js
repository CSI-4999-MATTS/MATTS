import React, { useState, useEffect, useCallback, useRef } from 'react';

function QuizQDisplay(props) {

    var [loadQ, setLoadQ] = useState(false);
    var help = {...props.qN}

    /** Maybe this page only displays the question text, then calls on the Quiz Class methods to perform computation
     * <h1> Question text </h1>
     * <ol> Options </ol>
     * <li onClick={question.computeScore()} />
     * 
     * Will get in full question info
     */

    console.log(help.q_text)
    // console.log('q an: ', props.qN.q_answer)
    console.log('q_opt:', help.q_options)
    if (help.q_options !== undefined){
        setLoadQ(true);
    }
    // console.log('q_text: ', props.qN.q_text)

    return (
        <div>
           <h1>Question: {help.q_text}</h1>
           {/* <h2>{help.q_options}</h2> */}
           {/* {help.q_options.map(function(option, i){
               return <label key={option[i]}>
                        <input type="radio" key={option[i]}/>
                        {option[i]}
                    </label>
           })} */}
        </div> 
    )
}

export default QuizQDisplay;