// Defining variables

const weight = document.querySelector('.weight-input')
const height = document.querySelector('.height-input')
const BMI = document.querySelector('.BMI-input')
const finalParagraph = document.querySelector('.paragraph')
const calculateButton = document.querySelector('#calculate')
const clearButton = document.querySelector('#clear')

// Functions


function calculateBMI(){
    let method = (weight.value / Math.pow( (height.value/100), 2 ));
    console.log(method)
    let result = method.toFixed(2);

    if(weight.value && height.value == ''){
        return BMI.value = "Please enter weight and height";
    } else{
        console.log(result)
        document.querySelector('.BMI-input').value = result;
    }
}

function paragraphStuff(){
    if(BMI.value < 18.5){
        finalParagraph.style.visibility = 'visible'
        finalParagraph.textContent = "You are underweight ☹️"
        finalParagraph.style.color = "yellow"
    }else if(BMI.value >= 18.5 && BMI.value <= 24.9){
        finalParagraph.style.visibility = 'visible'
        finalParagraph.textContent = "Your weight is normal 😼"
        finalParagraph.style.color = "lime"
    }else if (BMI.value >= 25 && BMI.value <= 29.9){
        finalParagraph.style.visibility = 'visible'
        finalParagraph.textContent = "You are overweight 😞"
        finalParagraph.style.color = "orangered"
    }else if (BMI.value >= 30){
        finalParagraph.style.visibility = 'visible'
        finalParagraph.textContent = "You are obese 😱"
        finalParagraph.style.color = "red"
    }
}

calculateButton.addEventListener('click',()=>{
    calculateBMI(Number);
    paragraphStuff();
})

clearButton.addEventListener('click',()=>{
    if (BMI.value == BMI.value){
        BMI.value = '';
    } 
    if(weight.value == weight.value){
        weight.value = '';
    }
    if(height.value == height.value){
        height.value = '';
    }
})

