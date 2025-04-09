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
        let devFundWeight = this.devFundamentalScore * 0.23; 
        let processAutoWeight = this.processAutomationScore * 0.30;
        let userIntWeight = this.userInterfaceScore * 0.25; 
        let testDebugWeight = this.testingScore * 0.22;
        this.certificationScore = devFundWeight + processAutoWeight + userIntWeight + testDebugWeight;
    }

    handleChange(event){
        console.log(event.target.name, event.target.value);
        const inputType = event.target.name;

        // Store the input coming in and convert it to number using JavaScript 
        let value =  Number(event.target.value);
        if(inputType === 'devFundamentals'){
            this.devFundamentalScore = value;
        }else if(inputType === 'processAutomationScore'){
            this.processAutomationScore = value;
        }if(inputType === 'userInterfaceScore'){
            this.userInterfaceScore = value;
        }if(inputType === 'testingScore'){
            this.testingScore = value;
        }
    


    }
}