// handle displaying the time at top
var timeDisplayEl = $('#time-display');

function displayTime() {
    var rightNow = moment().format('dddd, MMMM Do');
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);

// time for my inputs
var currentTime = moment().format("hh");

// For my input fields
var boxEight = document.getElementById("8");
var boxNine = document.getElementById("9");
var boxTen = document.getElementById("10");
var boxEleven = document.getElementById("11");
var boxTwelve = document.getElementById("12");
var boxOne = document.getElementById("1");
var boxTwo = document.getElementById("2");
var boxThree = document.getElementById("3");
var boxFour = document.getElementById("4");
var boxFive = document.getElementById("5");

// For my save buttons
var eightButton = document.getElementById("button8");
var nineButton = document.getElementById("button9");
var tenButton = document.getElementById("button10");
var elevenButton = document.getElementById("button11");
var twelveButton = document.getElementById("button12");
var oneButton = document.getElementById("button1");
var twoButton = document.getElementById("button2");
var threeButton = document.getElementById("button3");
var fourButton = document.getElementById("button4");
var fiveButton = document.getElementById("button5");


// // Version 1

function renderLastText() {
    var eightInput = localStorage.getItem("8am");
    boxEight.textContent = eightInput;

    eightButton.addEventListener("click", function (event) {
        event.preventDefault();
        var eightInput = boxEight.value;
        localStorage.setItem("8am", eightInput)
    });

    var nineInput = localStorage.getItem("9am");
    boxNine.textContent = nineInput;

    nineButton.addEventListener("click", function (event) {
        event.preventDefault();
        var nineInput = boxNine.value;
        localStorage.setItem("9am", nineInput)
    });

    var tenInput = localStorage.getItem("10am");
    boxTen.textContent = tenInput;

    tenButton.addEventListener("click", function (event) {
        event.preventDefault();
        var tenInput = boxTen.value;
        localStorage.setItem("10am", tenInput)
    });

    var elevenInput = localStorage.getItem("11am");
    boxEleven.textContent = elevenInput;

    elevenButton.addEventListener("click", function (event) {
        event.preventDefault();
        var elevenInput = boxEleven.value;
        localStorage.setItem("11am", elevenInput)
    });

    var twelveInput = localStorage.getItem("12pm");
    boxTwelve.textContent = twelveInput;

    twelveButton.addEventListener("click", function (event) {
        event.preventDefault();
        var twelveInput = boxEleven.value;
        localStorage.setItem("12pm", twelveInput)
    });

    var oneInput = localStorage.getItem("1pm");
    boxOne.textContent = oneInput;

    oneButton.addEventListener("click", function (event) {
        event.preventDefault();
        var oneInput = boxOne.value;
        localStorage.setItem("1pm", oneInput)
    });

    var twoInput = localStorage.getItem("2pm");
    boxTwo.textContent = twoInput;

    twoButton.addEventListener("click", function (event) {
        event.preventDefault();
        var twoInput = boxOne.value;
        localStorage.setItem("2pm", twoInput)
    });

    var threeInput = localStorage.getItem("3pm");
    boxThree.textContent = threeInput;

    threeButton.addEventListener("click", function (event) {
        event.preventDefault();
        var threeInput = boxThree.value;
        localStorage.setItem("3pm", threeInput)
    });

    var fourInput = localStorage.getItem("4pm");
    boxFour.textContent = fourInput;

    fourButton.addEventListener("click", function (event) {
        event.preventDefault();
        var fourInput = boxOne.value;
        localStorage.setItem("4pm", fourInput)
    });

    var fiveInput = localStorage.getItem("5pm");
    boxFive.textContent = fiveInput;

    fiveButton.addEventListener("click", function (event) {
        event.preventDefault();
        var fiveInput = boxOne.value;
        localStorage.setItem("5pm", fiveInput)
    });
}



renderLastText();
