//get date


//get API --> make it way more seamless
$.getJSON("https://api.adviceslip.com/advice", function(data) {
    document.querySelector('#advice').textContent = data.slip.advice;
})