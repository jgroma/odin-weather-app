import {displayForecast} from './modules/display.js'

const form = document.getElementsByTagName("form");
const searchBtn = document.getElementById("search-btn");
const tempSwitchBtn = document.getElementById("temp-switch");

searchBtn.addEventListener("click", function () {
    //stop form submission
    event.preventDefault();

    displayForecast()
    form[0].reset()
})

tempSwitchBtn.addEventListener("click", function () {
    
})