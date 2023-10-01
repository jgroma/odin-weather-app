import {displayForecast, switchUnits, globalForecastArr} from './modules/display.js'

const form = document.getElementsByTagName("form");
const searchBtn = document.getElementById("search-btn");

let tempUnit = "Celcius";

const tempSwitchBtn = document.getElementById("temp-switch");

searchBtn.addEventListener("click", () => {
    //stop form submission
    event.preventDefault();

    displayForecast();
    form[0].reset();
})



tempSwitchBtn.addEventListener("click", () => {

    if (tempUnit == "Celcius") {
        tempSwitchBtn.innerHTML = "&#8451";
        switchUnits(tempUnit, globalForecastArr);
        //has to be below switchUnits call
        //otherwise the button takes double clicking before working
        tempUnit = "Fahrenheit";
    } else {
        tempSwitchBtn.innerHTML = "&#8457";
        switchUnits(tempUnit, globalForecastArr);
        tempUnit = "Celcius";
    }
    
})