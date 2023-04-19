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
};
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

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
