// Wrap all code that interacts with the DOM in a call to jQuery to ensure
// that the code isn't run until the browser has finished rendering all
// the elements in the html.
$(function () {
  // Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $(".saveBtn").on("click", function () {
    //get nearby values.
    console.log(this);
    const time = $(this).parent().attr("id");
    const text = $(this).siblings(".description").val();
    //set items in local storage.
    localStorage.setItem(time, text);
  });

  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

  // TODO: If the click listener function is defined as a regular function, then
  // this will be set to the DOM element that triggered the event (i.e.,
  // the element that was clicked).
  // However, if the function is called using the addEventListener method,
  // then this inside the function will refer to the DOM element to which
  // the event listener was attached.


  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  function colorRow(time) {
    var planNow = moment(now, "H A");
    var planEntry = moment(time, "H A");
    if (planNow.isBefore(planEntry) === true) {
      return "future";
    } else if (planNow.isAfter(planEntry) === true) {
      return "past";
    } else {
      return "present";
    }
  };

  //---------------------------------------------------------------------

  // how do i assosiate the time of day with the time blocks assigned??

  // make a function
  // inside, declare time as the current time, using jQuery (https://stackoverflow.com/questions/20456712/how-to-get-current-time-with-jquery)
  // if the block's assigned hour is smaller than right now's hour
  // add a class of 'past'
  // else, if the block's assigned hour is the same as right now's hour,
  // add a class of 'present/now'
  // else, if the block's assigned hour is bigger than right now's hour,
  // add a class of 'future'

  function applyColor(taco) {
    const dt = new Date();
    const time = dt.getHours();
    console.log(time);
    const id = 17;
    if (time === id) {
      console.log("present");
    } else if (time > id) {
      console.log("past");
    } else {
      console.log("future");
    };
  };
  applyColor();

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // send to dad- did i already do this???
  
  // Add code to display the current date in the header of the page.
  const today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));
});