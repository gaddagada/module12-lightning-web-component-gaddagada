import { LightningElement } from 'lwc';
    // Const weights 
    const devFundWeight = 0.23; 
    const processAutoWeight = 0.30; 
    const userIntWeight = 0.25; 
    const testDebugWeight = 0.22; 
    const passingScore = 68; 


export default class PlatformDevCertCalculator extends LightningElement {

    // Input Information variables 
    devFundamentalScore = 50;
    processAutomationScore = 50; 
    userInterfaceScore = 50; 
    testingScore = 50; 

    showResources = false;
    showGoodJob = false;

    attemptHistory = [
        {Id: 1, Score:50}, 
        {Id: 2, Score:25}, 
        {Id: 3, Score:70},
        {Id: 4, Score:90}
    ];

    //Certification score variable
    certificationScore = 90; 

    calculateScore(){
        let devFundamentalScore = this.devFundamentalScore * devFundWeight; 
        let processAutomationScore = this.processAutomationScore * processAutoWeight;
        let userInterfaceScore = this.userInterfaceScore * userIntWeight; 
        let testingScore = this.testingScore * testDebugWeight;
        this.certificationScore = devFundWeight + processAutoWeight + userIntWeight + testDebugWeight;

        this.showResourceIfFailed();

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

    showResourceIfFailed(){
        if(this.certificationScore < passingScore){
            this.showResources = true;
        }else{
            this.showResources = false;
        }
        this.showGoodJob = !showResources;
    }
}