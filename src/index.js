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

const forecastContainer = document.getElementById("forecast-container");

//const slidesContainer = document.getElementById("slides-container");
//const slide = document.querySelector(".slide");
//const prevSlideBtn = document.getElementById("prev-slide-btn");
//const nextSlideBtn = document.getElementById("next-slide-btn");

//nextSlideBtn.addEventListener("click", (event) => {
//    const slideWidth = slide.clientWidth;
//    slidesContainer.scrollLeft += slideWidth;
//    console.log("slid right")
//})

//prevSlideBtn.addEventListener("click", (event) => {
//    const slideWidth = slide.clientWidth;
//    slidesContainer.scrollLeft -= slideWidth;
//    console.log("slid left")
//});

forecastContainer.addEventListener("click", (event) => {
    const target = event.target;

    if (target.id === "prev-slide-btn") {
        const slidesContainer = document.getElementById("slides-container");
        const slide = document.querySelector(".slide");

        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft -= slideWidth;
    } else if (target.id === "next-slide-btn") {
        const slidesContainer = document.getElementById("slides-container");
        const slide = document.querySelector(".slide");

        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft += slideWidth;
    }
})