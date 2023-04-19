var date = dayjs()
function displayTime() {
var today = dayjs().format('dddd, MMMM D YYYY, h:mm a')
var dateDisplay = document.getElementById('currentDay')
  $(dateDisplay).text(today)

}
setInterval(displayTime, 1000);
// ^^gets the current date and formats it to display on the top of the pageXOffset, updates every 1 second to keep it updated 
// Takes the text from the time blocks and commits them to the local storage when the user hits the save button 
function savePlans() {
var plans = $(this).siblings('.description').val()
var blockHour = $(this).parent().attr('id');
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
// ^^displays the text content from the local storage in the time blocks, allowing the 'plans' to persist even if page is refreshed 
// grabs the current hour and the hour of each time block. Then these two values are compared to see if the time block is past future or current. give the block the corresponding class to style it 
var currentHour = dayjs().hour();
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
});

}
//  gives the save buttons an event listener so that they will save data to local storage when clicked
var saveBtn = document.getElementsByClassName('saveBtn')
$(saveBtn).on('click', savePlans)
checktime();
