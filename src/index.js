import {processData} from './modules/data.js'

const form = document.getElementsByTagName("form");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", function () {
    //stop form submission
    event.preventDefault();
    processData();
    form[0].reset()
})