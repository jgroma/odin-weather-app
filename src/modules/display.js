import {processData} from './data.js'

function changeColorTime(isDay) {
   
    if (isDay == 0) {
        document.body.style.background = "#33658A"
    } else {
        document.body.style.background = "#86BBD8"
    }
}


//function switchUnits() {
//    const currentUnit = document.getElementsByClassName("temp");

//    if (currentUnit)
//}

async function displayForecast() {
    const forecastObj = await processData();
    const forecastArr = Object.values(forecastObj);
    const locationObj = forecastArr.shift();
    let isDay = forecastArr[0].isDay;
    console.log(forecastArr);
    console.log(locationObj);
    console.log(isDay)

    const forecastContainer = document.getElementById("forecast-container");
    //to clear previous forecast
    forecastContainer.innerHTML = "";

    changeColorTime(isDay);
    
    const locationData = document.createElement("p");
    locationData.classList.add("location")
    locationData.innerHTML = `${locationObj.name}, ${locationObj.country}`;
    forecastContainer.appendChild(locationData);

    forecastArr.forEach((obj) => {
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
}

export {displayForecast}