import {fetchData} from "./search.js";

//API Key: 90d680eb454742b8a73160825232309

//to practice Promises syntax
//function fetchData() {
//    let weatherData = fetch('http://api.weatherapi.com/v1/current.json?key=90d680eb454742b8a73160825232309&q=London', {
//        mode: 'cors'
//    })
//    .then(function(response) {
//        console.log(response.json())
//    })
//    .catch(function(err) {
//        console.log("Something went wrong.")
//    });

//    console.log(weatherData)
//}


function getDate(rawDate) {
    let date = new Date(rawDate)

    let dateString = date.toDateString()
    let dateArr = dateString.split(' ')
    let forecastDate = dateArr[0] + " " + dateArr[2] + " " + dateArr[1];

    return forecastDate;

}

async function processData() {
    const weatherJSON = await fetchData()

    const name = weatherJSON.location.name;
    const country = weatherJSON.location.country;
    const localTime = weatherJSON.location.localtime;
    const currentDate = getDate(localTime);

    const currentDescription = weatherJSON.current.condition.text;
    const currentTempC = weatherJSON.current.temp_c;
    const currentTempF = weatherJSON.current.temp_f;
    const currentHumidity = weatherJSON.current.humidity;
    const dayOrNight = weatherJSON.current.is_day;
    
    
    const dayTwoDescription = weatherJSON.forecast.forecastday[1].day.condition.text;
    const dayTwoAvgTempC = weatherJSON.forecast.forecastday[1].day.avgtemp_c;
    const dayTwoAvgTempF = weatherJSON.forecast.forecastday[1].day.avgtemp_f;
    const dayTwoHumidity = weatherJSON.forecast.forecastday[1].day.avghumidity;
    const rawDayTwoDate = weatherJSON.forecast.forecastday[1].date;
    const dayTwoDate = getDate(rawDayTwoDate);

    const dayThreeDescription = weatherJSON.forecast.forecastday[2].day.condition.text;
    const dayThreeAvgTempC = weatherJSON.forecast.forecastday[2].day.avgtemp_c;
    const dayThreeAvgTempF = weatherJSON.forecast.forecastday[2].day.avgtemp_f;
    const dayThreeHumidity = weatherJSON.forecast.forecastday[2].day.avghumidity;
    const rawDayThreeDate = weatherJSON.forecast.forecastday[2].date;
    const dayThreeDate = getDate(rawDayThreeDate);

    const forecastObj = {
        location: {
            name: name,
            country: country
        },
        current:
          {
            date: currentDate,
            description: currentDescription,
            tempC: currentTempC,
            tempF: currentTempF,
            humidity: currentHumidity,
            isDay: dayOrNight
          },
        dayTwo: {
            date: dayTwoDate,
            description: dayTwoDescription,
            tempC: dayTwoAvgTempC,
            tempF: dayTwoAvgTempF,
            humidity: dayTwoHumidity
        },
        dayThree: {
            date: dayThreeDate,
            description: dayThreeDescription,
            tempC: dayThreeAvgTempC,
            tempF: dayThreeAvgTempF,
            humidity: dayThreeHumidity
        }
    };


    return forecastObj


}


export {processData};