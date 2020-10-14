const button = document.querySelector('.get-city');
const inputValue = document.querySelector('.input-value')
const city = document.querySelector('.location')
const temp = document.querySelector('.num')
const tempTwo = document.querySelector('.degree-two')
const tempThree = document.querySelector('.degree-three')
const tempFour = document.querySelector('.degree-four')
const tempFive = document.querySelector('.degree-five')
const tempSix = document.querySelector('.degree-six')
const tempSeven = document.querySelector('.degree-seven')
const forecastIconOne = document.querySelector('.image-one')
const forecastIconTwo = document.querySelector('.image-two')
const forecastIconThree = document.querySelector('.image-three')
const forecastIconFour = document.querySelector('.image-four')
const forecastIconFive = document.querySelector('.image-five')
const forecastIconSix = document.querySelector('.image-six')
const forecastIconSeven = document.querySelector('.image-seven')

// Fetch API
button.addEventListener('click', function() {
	fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&units=imperial&appid=80472b6b686f39300c31d0670f443373')
	.then((response) => response.json())
	.then((data) => {
		const cityValue = data.city.name;
		const tempValue = Math.floor(data.list[1].main.temp);
		const tempValueTwo = Math.floor(data.list[9].main.temp);
		const tempValueThree = Math.floor(data.list[17].main.temp);
		const tempValueFour = Math.floor(data.list[25].main.temp);
		const tempValueFive = Math.floor(data.list[33].main.temp);
		const tempValueSix = Math.floor(data.list[37].main.temp);
		const tempValueSeven = Math.floor(data.list[39].main.temp);
		const forecastValue = data.list[1].weather[0].description;
		const forecastValueTwo = data.list[9].weather[0].description;
		const forecastValueThree = data.list[17].weather[0].description;
		const forecastValueFour = data.list[25].weather[0].description;
		const forecastValueFive = data.list[33].weather[0].description;
		const forecastValueSix = data.list[37].weather[0].description;
		const forecastValueSeven = data.list[39].weather[0].description;

		city.innerHTML = cityValue;
		temp.innerHTML = `${tempValue}<sup>o</sup>F`;
		tempTwo.innerHTML = `${tempValueTwo}<sup>o</sup>F`;
		tempThree.innerHTML = `${tempValueThree}<sup>o</sup>F`;
		tempFour.innerHTML = `${tempValueFour}<sup>o</sup>F`;
		tempFive.innerHTML = `${tempValueFive}<sup>o</sup>F`;
		tempSix.innerHTML = `${tempValueSix}<sup>o</sup>F`;
		tempSeven.innerHTML = `${tempValueSeven}<sup>o</sup>F`;

		// Set Icons
		function getIconOne() {
			if (forecastValue == 'clear sky') {
				forecastIconOne.setAttribute("src", "images/icons/icon-2.svg")
			} else if (forecastValue == 'few clouds' || forecastValue == 'broken clouds') {
				forecastIconOne.setAttribute("src", "images/icons/icon-3.svg")
			} else if (forecastValue == 'light rain') {
				forecastIconOne.setAttribute("src", "images/icons/icon-4.svg")
			} else if (forecastValue == 'scattered clouds' || forecastValue == 'overcast clouds') {
				forecastIconOne.setAttribute("src", "images/icons/icon-5.svg")
			} else if (forecastValue == 'rain') {
				forecastIconOne.setAttribute("src", "images/icons/icon-10.svg")
			} else if (forecastValue == 'thunderstorm') {
				forecastIconOne.setAttribute("src", "images/icons/icon-12.svg")
			} else if (forecastValue == 'snow') {
				forecastIconOne.setAttribute("src", "images/icons/icon-14.svg")
			} else {
				return forecastIconOne.setAttribute("src", "images/logo.png")
			}
		}

		function getIconTwo() {
			if (forecastValueTwo == 'clear sky') {
				forecastIconTwo.setAttribute("src", "images/icons/icon-2.svg")
			} else if (forecastValueTwo == 'few clouds' || forecastValueTwo == 'broken clouds') {
				forecastIconTwo.setAttribute("src", "images/icons/icon-3.svg")
			} else if (forecastValueTwo == 'light rain') {
				forecastIconTwo.setAttribute("src", "images/icons/icon-4.svg")
			} else if (forecastValueTwo == 'scattered clouds' || forecastValueTwo == 'overcast clouds') {
				forecastIconTwo.setAttribute("src", "images/icons/icon-5.svg")
			} else if (forecastValueTwo == 'rain') {
				forecastIconTwo.setAttribute("src", "images/icons/icon-10.svg")
			} else if (forecastValueTwo == 'thunderstorm') {
				forecastIconTwo.setAttribute("src", "images/icons/icon-12.svg")
			} else if (forecastValueTwo == 'snow') {
				forecastIconTwo.setAttribute("src", "images/icons/icon-14.svg")
			} else {
				return forecastIconTwo.setAttribute("src", "images/logo.png")
			}
		}

		function getIconThree() {
			if (forecastValueThree == 'clear sky') {
				forecastIconThree.setAttribute("src", "images/icons/icon-2.svg")
			} else if (forecastValueThree == 'few clouds' || forecastValueThree == 'broken clouds') {
				forecastIconThree.setAttribute("src", "images/icons/icon-3.svg")
			} else if (forecastValueThree == 'light rain') {
				forecastIconThree.setAttribute("src", "images/icons/icon-4.svg")
			} else if (forecastValueThree == 'scattered clouds' || forecastValueThree == 'overcast clouds') {
				forecastIconThree.setAttribute("src", "images/icons/icon-5.svg")
			} else if (forecastValueThree == 'rain') {
				forecastIconThree.setAttribute("src", "images/icons/icon-10.svg")
			} else if (forecastValueThree == 'thunderstorm') {
				forecastIconThree.setAttribute("src", "images/icons/icon-12.svg")
			} else if (forecastValueThree == 'snow') {
				forecastIconThree.setAttribute("src", "images/icons/icon-14.svg")
			} else {
				return forecastIconThree.setAttribute("src", "images/logo.png")
			}
		}

		function getIconFour() {
			if (forecastValueFour == 'clear sky') {
				forecastIconFour.setAttribute("src", "images/icons/icon-2.svg")
			} else if (forecastValueFour == 'few clouds' || forecastValueFour == 'broken clouds') {
				forecastIconFour.setAttribute("src", "images/icons/icon-3.svg")
			} else if (forecastValueFour == 'light rain') {
				forecastIconFour.setAttribute("src", "images/icons/icon-4.svg")
			} else if (forecastValueFour == 'scattered clouds' || forecastValueFour == 'overcast clouds') {
				forecastIconFour.setAttribute("src", "images/icons/icon-5.svg")
			} else if (forecastValueFour == 'rain') {
				forecastIconFour.setAttribute("src", "images/icons/icon-10.svg")
			} else if (forecastValueFour == 'thunderstorm') {
				forecastIconFour.setAttribute("src", "images/icons/icon-12.svg")
			} else if (forecastValueFour == 'snow') {
				forecastIconFour.setAttribute("src", "images/icons/icon-14.svg")
			} else {
				return forecastIconFour.setAttribute("src", "images/logo.png")
			}
		}

		function getIconFive() {
			if (forecastValueFive == 'clear sky') {
				forecastIconFive.setAttribute("src", "images/icons/icon-2.svg")
			} else if (forecastValueFive == 'few clouds' || forecastValueFive == 'broken clouds') {
				forecastIconFive.setAttribute("src", "images/icons/icon-3.svg")
			} else if (forecastValueFive == 'light rain') {
				forecastIconFive.setAttribute("src", "images/icons/icon-4.svg")
			} else if (forecastValueFive == 'scattered clouds' || forecastValueFive == 'overcast clouds') {
				forecastIconFive.setAttribute("src", "images/icons/icon-5.svg")
			} else if (forecastValueFive == 'rain') {
				forecastIconFive.setAttribute("src", "images/icons/icon-10.svg")
			} else if (forecastValueFive == 'thunderstorm') {
				forecastIconFive.setAttribute("src", "images/icons/icon-12.svg")
			} else if (forecastValueFive == 'snow') {
				forecastIconFive.setAttribute("src", "images/icons/icon-14.svg")
			} else {
				return forecastIconFive.setAttribute("src", "images/logo.png")
			}
		}

		function getIconSix() {
			if (forecastValueSix == 'clear sky') {
				forecastIconSix.setAttribute("src", "images/icons/icon-2.svg")
			} else if (forecastValueSix == 'few clouds' || forecastValueSix == 'broken clouds') {
				forecastIconSix.setAttribute("src", "images/icons/icon-3.svg")
			} else if (forecastValueSix == 'light rain') {
				forecastIconSix.setAttribute("src", "images/icons/icon-4.svg")
			} else if (forecastValueSix == 'scattered clouds' || forecastValueSix == 'overcast clouds') {
				forecastIconSix.setAttribute("src", "images/icons/icon-5.svg")
			} else if (forecastValueSix == 'rain') {
				forecastIconSix.setAttribute("src", "images/icons/icon-10.svg")
			} else if (forecastValueSix == 'thunderstorm') {
				forecastIconSix.setAttribute("src", "images/icons/icon-12.svg")
			} else if (forecastValueSix == 'snow') {
				forecastIconSix.setAttribute("src", "images/icons/icon-14.svg")
			} else {
				return forecastIconSix.setAttribute("src", "images/logo.png")
			}
		}

		function getIconSeven() {
			if (forecastValueSeven == 'clear sky') {
				forecastIconSeven.setAttribute("src", "images/icons/icon-2.svg")
			} else if (forecastValueSeven == 'few clouds' || forecastValueSeven == 'broken clouds') {
				forecastIconSeven.setAttribute("src", "images/icons/icon-3.svg")
			} else if (forecastValueSeven == 'light rain') {
				forecastIconSeven.setAttribute("src", "images/icons/icon-4.svg")
			} else if (forecastValueSeven == 'scattered clouds' || forecastValueSeven == 'overcast clouds') {
				forecastIconSeven.setAttribute("src", "images/icons/icon-5.svg")
			} else if (forecastValueSeven == 'rain') {
				forecastIconSeven.setAttribute("src", "images/icons/icon-10.svg")
			} else if (forecastValueSeven == 'thunderstorm') {
				forecastIconSeven.setAttribute("src", "images/icons/icon-12.svg")
			} else if (forecastValueSeven == 'snow') {
				forecastIconSeven.setAttribute("src", "images/icons/icon-14.svg")
			} else {
				return forecastIconSeven.setAttribute("src", "images/logo.png")
			}
		}

	getIconOne(forecastValue);
	getIconTwo(forecastValueTwo);
	getIconThree(forecastValueThree);
	getIconFour(forecastValueFour);
	getIconFive(forecastValueFive);
	getIconSix(forecastValueSix);
	getIconSeven(forecastValueSeven);

	})
	.catch(err => console.log('whoops there was a problem')
})

// Date Section

// date - mm/dd/yyyy
let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1
let day = dateObj.getUTCDate()
let year = dateObj.getUTCFullYear()

let newDate = month + '/' + day + '/' + year

document.querySelector('.date').innerHTML = newDate

// day of the week
let dayObj = new Date();
let weekday = new Array(7);
weekday[0] = "Sunday"
weekday[1] = "Monday"
weekday[2] = "Tuesday"
weekday[3] = "Wednesday"
weekday[4] = "Thursday"
weekday[5] = "Friday"
weekday[6] = "Saturday"
weekday[7] = "Sunday"
weekday[8] = "Monday"
weekday[9] = "Tuesday"
weekday[10] = "Wednesday"
weekday[11] = "Thursday"
weekday[12] = "Friday"
weekday[13] = "Saturday"

var currentDay = weekday[dayObj.getDay()];
var dayTwo = weekday[dayObj.getDay() + 1]
var dayThree = weekday[dayObj.getDay() + 2]
var dayFour = weekday[dayObj.getDay() + 3]
var dayFive = weekday[dayObj.getDay() + 4]
var daySix = weekday[dayObj.getDay() + 5]
var daySeven = weekday[dayObj.getDay() + 6]

document.querySelector('.day-one').innerHTML = currentDay
document.querySelector('.day-two').innerHTML = dayTwo
document.querySelector('.day-three').innerHTML = dayThree
document.querySelector('.day-four').innerHTML = dayFour
document.querySelector('.day-five').innerHTML = dayFive
document.querySelector('.day-six').innerHTML = daySix
document.querySelector('.day-seven').innerHTML = daySeven
