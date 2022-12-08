//use dayjs to add the current date to the top of the screen
var day = dayjs().format('M-D-YYYY');
$('#todaysDate').text(day)

//use dayjs to define current time as a variable
var currentTime= dayjs().hour()
$('#currentDay').text(currentTime)
//then write a function to change classes according to time
//define 
// Use setAttribute to change an attribute that has been defined before.
const textbx = document.querySelectorAll('.row');
//console.log(textbx)
//create a for-loop to iterate through the array (classes pulled)
for(var i = 0; i < textbx.length; i++){
//  console.log(textbx[i])
  // use .id to grab the ID out of the textbx
//  console.log(textbx[i].id)
  var blockHour = parseInt(textbx[i].id)
  if(blockHour< currentTime){
    textbx[i].classList.add("past");
  } else if(blockHour=== currentTime){
    textbx[i].classList.add("present");
  } else {
    textbx[i].classList.add("future");
  }

}
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


/*//render function for events in local storage/*
function saveBtn1(){
  console.log("renderevent test")
  var localEvent1 = localStorage.getItem("txt1");
  document.querySelector('#txt1').value = JSON.parse(localEvent1)
}*/
// call the function to run after it has been defined
//saveBtn1()
//setting local storage for input events
// do not need  event.preventDefault();- only for a multiple use button

var example = localStorage.getItem('txt-1')
console.log(example)
//for loop before click function to page load textareas
for(var i = 1; i<11; i++){
//  console.log(`txt-${i}`)
  var content = localStorage.getItem(`txt-${i}`)
  $(`#txt-${i}`).val(content)
 // console.log(content)
}

$(".btn").on("click", function() {
 //give the variable "text" a dynamic value of the box that were inputing in
  let text = $(this).siblings("textarea").val()
//  console.log(text)
  console.log($(this).siblings("textarea").attr("id"))
  localStorage.setItem($(this).siblings("textarea").attr("id"), text);

}
);
//grab each button, save it as a variable, iterate through each button (for loop) and give it the same click event
// using "sibling" or "child" element (look up previous or next sibling)


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
  // TODO: Add code to display the current date in the header of the page.

