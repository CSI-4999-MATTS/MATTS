import React, { useState, useEffect, useCallback, useRef } from 'react';

function QuizQDisplay(props) {

    /** Maybe this page only displays the question text, then calls on the Quiz Class methods to perform computation
     * <h1> Question text </h1>
     * <ol> Options </ol>
     * <li onClick={question.computeScore()} />
     * 
     * Will get in full question info
     */

    var help = {...props.qN}
    console.log(help.q_text)
    // console.log('q an: ', props.qN.q_answer)
    // console.log('q_opt:', props.qN.q_options)
    // console.log('q_text: ', props.qN.q_text)

    return (
        <div>
           <h1>Question: {help.q_text}</h1>
        </div> 
    )
}

export default QuizQDisplay;