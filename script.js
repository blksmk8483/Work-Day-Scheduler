var timeDisplayEl = $('#time-display');


// handle displaying the time
function displayTime() {
    var rightNow = moment().format('dddd, MMMM Do');
    timeDisplayEl.text(rightNow);
  }



setInterval(displayTime, 1000);