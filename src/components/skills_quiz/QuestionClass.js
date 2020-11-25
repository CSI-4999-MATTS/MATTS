class Question {
    constructor (q_text, q_options, q_answer, pointValue) {
        this.q_text = q_text;
        this.q_options = q_options;
        this.q_answer = q_answer;
        this.pointValue = pointValue;
    }
    // Can add in methods here
    toString(){
        console.log('Question text: ', this.q_text, '\nQuestion options: ', this.q_options,
        '\nQuestion answer: ', this.q_answer)
    }

    isCorrectAnswer(userResponse){
        if (userResponse === this.q_answer){
            return true;
        } else {
            return false;
        }
    }

    getPointValue(){
        return this.pointValue
    }

    
}

export var questionConverter = {
    // We shouldn't have to use this, as I believe is sends the data to Firestore
    toFirestore: function(question) {
        return {
            question_text: question.q_text,
            question_options: question.q_options,
            question_answer: question.q_answer,
            pointValue: question.pointValue
        }
    },

    // Should have to utilize this
    fromFirestore: function(snapshot, options){
        const data = snapshot.data(options);
        return new Question(data.question_text, data.question_options, data.question_answer, data.pointValue);
    }
}
