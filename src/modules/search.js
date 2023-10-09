async function fetchData() {
    let searchLocation = document.getElementById("search").value;

    try {

    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=90d680eb454742b8a73160825232309&q=${searchLocation}&days=3`, 
    {mode: 'cors'});

    const weatherData = await response.json();
    
    return weatherData

    } catch (error) {
        console.log("Something went wrong.")
    }
}

export {fetchData}