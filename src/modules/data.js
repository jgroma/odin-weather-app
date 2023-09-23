//API Key: 90d680eb454742b8a73160825232309

function fetchData() {
    let weatherData = fetch('http://api.weatherapi.com/v1/current.json?key=90d680eb454742b8a73160825232309&q=London', {
        mode: 'cors'
    })
    .then(function(response) {
        console.log(response.json())
    })
    .catch(function(err) {
        console.log("Something went wrong.")
    });

    console.log(weatherData)
}

function testConsole() {
    console.log("This is data file")
}

export {fetchData, testConsole};