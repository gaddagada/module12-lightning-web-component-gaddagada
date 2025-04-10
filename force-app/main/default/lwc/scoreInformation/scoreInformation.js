import { LightningElement, api } from 'lwc';
export default class ScoreInformation extends LightningElement {
    
    @api score;
    @api attemptId;
    @api numberOfQuestions;
    
    // Child to Parent
    get numberofQuestionsCorrect(){
        return Math.floor((this.score / 100) * this.numberOfQuestions);
    }

    get numberOfWrongQuestions(){
        return this.numberOfQuestions - this.numberofQuestionsCorrect;
    }

    // Child to Parent
    handleDeleteAttempt(){
        const deleteEvent = new CustomEvent('deleteattempt',{
            detail: this.attemptId
        });
        this.dispatchEvent(deleteEvent);
    }

}