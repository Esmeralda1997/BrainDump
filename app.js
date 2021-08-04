//localStorage 
//arr, advice, and date


//get date
const date = new Date();
const [month, day, year, weekday] = [date.getMonth(), date.getDate(), date.getFullYear(), date.getDay()];
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

document.querySelector('#date').textContent = `${weekdays[weekday]} ${months[month]} ${day}, ${year}`;

//get API --> make it way more seamless
$.getJSON("https://api.adviceslip.com/advice", function(data) {
    let advice = data.slip.advice;
    document.querySelector('#advice').textContent = advice;
})

//store quote in localStorage


//refresh API 