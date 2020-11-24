let resultButton = document.querySelector('.result-button');
let womanGenderButton = document.querySelector('#woman-button');
let manGenderButton = document.querySelector('#man-button');

let resultWeightMaintenance = document.querySelector('#weight-maintenance');
let resultWeightLoss = document.querySelector('#weight-loss');
let resultWeightGain = document.querySelector('#weight-gain');

const ageIndex = 5;
const weightIndex = 10;
const heightIndex = 6.25;
const womanIndex = -165;
const manIndex = 5;

function calculateIndex() {
    //DCI Index = (weight * 10 + height * 6.25 - age * 5 - 165(woman)) * activityIndex
    let ageInput = document.querySelector('#age-input').value;
    let heightInput = document.querySelector('#height-input').value;
    let weightInput = document.querySelector('#weight-input').value;
    let resultSelectedRadio = document.querySelector('input[name="activity-value"]:checked')
        .dataset.index;
    let genderSelectValue = womanGenderButton.classList.contains('active') ? womanIndex 
        : manIndex; 

    let DCIIndex = (weightInput * weightIndex + heightInput * heightIndex - ageInput *
         ageIndex + (genderSelectValue)) * resultSelectedRadio;

    //delete fractional part
    DCIIndex = Math.trunc(DCIIndex);

    resultWeightMaintenance.innerHTML = DCIIndex + ' ккал';
    resultWeightGain.innerHTML = DCIIndex + 300 + ' ккал';
    resultWeightLoss.innerHTML = DCIIndex - 300 + ' ккал';

    
}

womanGenderButton.onclick = function() {
    if (!womanGenderButton.classList.contains('active')) {
        manGenderButton.classList.remove('active');
        womanGenderButton.classList.add('active');
    }
}

manGenderButton.onclick = function() {
    if (!manGenderButton.classList.contains('active')) {
        womanGenderButton.classList.remove('active');
        manGenderButton.classList.add('active');
    }
}