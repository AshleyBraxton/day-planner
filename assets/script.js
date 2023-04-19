var date = dayjs()
function displayTime() {
var today = dayjs().format('dddd, MMMM D YYYY, h:mm a')
var dateDisplay = document.getElementById('currentDay')
  $(dateDisplay).text(today)

}
setInterval(displayTime, 1000);
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
function savePlans() {
var plans = $(this).siblings('.description').val()
var blockHour = $(this).parent().attr('id');
console.log(plans);
console.log(blockHour)
localStorage.setItem(blockHour , plans);

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.    DONE
};
// var date = dayjs('2020-11-03, 2:00 pm')
var currentHour = dayjs().hour();
console.log(currentHour);
function checktime() {
$('.time-block').each(function() {
  var blockHour = $(this).attr('id');
  if (currentHour < blockHour) {
    $(this).addClass('future').removeClass('past present');
  } else if (currentHour == blockHour) {
    $(this).addClass('present').removeClass('future past');
  }else if (currentHour > blockHour) {
    $(this).addClass('past').removeClass('present future')
    
  }
  console.log(blockHour)
});

}
 
var saveBtn = document.getElementsByClassName('saveBtn')
$(saveBtn).on('click', savePlans)
checktime();
