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
        console.log(event.target.name, event.target.value);
        const inputType = event.target.name;
        
        // Store the input coming in and convert it to number using JavaScript 
        let value =  Number(event.target.value);
        if(inputType === 'devFundamentals'){
            this.devFundamentalScore = event.target.value;
        }else if(inputType === 'processAutomationScore'){
            this.processAutomationScore = event.target.value;
        }if(inputType === 'userInterfaceScore'){
            this.userInterfaceScore = event.target.value;
        }if(inputType === 'testingScore'){
            this.testingScore = event.target.value;
        }
    


    }
}