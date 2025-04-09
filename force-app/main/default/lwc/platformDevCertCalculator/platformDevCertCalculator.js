import { LightningElement } from 'lwc';

export default class PlatformDevCertCalculator extends LightningElement {

    // Input Information variables 
    devFundamentalScore = 50;
    processAutomationScore = 50; 
    userInterfaceScore = 50; 
    testingScore = 50; 

    //Certification score variable
    certificationScore = 90; 

    calculateScore(){
        certificationScore = this.devFundamentalScore + this.processAutomationScore + this.userInterfaceScore + this.testingScore;
    }

    handleChange(event){
        console.log(event);
        console.log(event.target);
    }
}