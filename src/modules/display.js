import {processData} from './data.js'

let globalForecastArr;

function changeColorTime(isDay) {
   
    if (isDay == 0) {
        document.body.style.background = "#33658A"
    } else {
        document.body.style.background = "#86BBD8"
    }
}


async function displayForecast() {
    const forecastObj = await processData();
    globalForecastArr = Object.values(forecastObj);
    const locationObj = globalForecastArr.shift();
    let isDay = globalForecastArr[0].isDay;

    console.log(locationObj);
    console.log(globalForecastArr);

    const forecastContainer = document.getElementById("forecast-container");
    //to clear previous forecast
    forecastContainer.innerHTML = "";

    changeColorTime(isDay);
    
    const locationData = document.createElement("p");
    locationData.classList.add("location")
    locationData.innerHTML = `${locationObj.name}, ${locationObj.country}`;
    forecastContainer.appendChild(locationData);

    globalForecastArr.forEach((obj) => {

        const dayCard = document.createElement("div");
        dayCard.classList.add("day-card")

        const date = document.createElement("p");
        date.innerHTML = `${obj.date}`;

        const temp = document.createElement("p");
        temp.classList.add("temp")
        temp.innerHTML = `${obj.tempC}&#8451`;

        
        const description = document.createElement("p");
        description.innerHTML = `${obj.description}`;

        const humidity = document.createElement("p");
        humidity.innerHTML = `Humidity: ${obj.humidity}`;


        dayCard.appendChild(date);
        dayCard.appendChild(temp);
        dayCard.appendChild(description);
        dayCard.appendChild(humidity);
        forecastContainer.appendChild(dayCard);
    })

    return globalForecastArr;
}

function switchUnits(unit, dataArr) {

    dataArr.forEach((obj, index) => {
        const tempToSwitch = document.getElementsByClassName("temp")[index];

        if (unit == "Fahrenheit") {
            tempToSwitch.innerHTML = `${obj.tempC}&#8451`;
        } else if (unit == "Celcius") {
            tempToSwitch.innerHTML = `${obj.tempF}&#8457`;
        }
    })

}

export {displayForecast, switchUnits, globalForecastArr}