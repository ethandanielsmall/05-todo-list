// Wrap all code that interacts with the DOM in a call to jQuery to ensure
// that the code isn't run until the browser has finished rendering all
// the elements in the html.
$(function () {
  $(".saveBtn").on("click", function () {
    const time = $(this).parent().attr("id");
    const text = $(this).siblings(".description").val();
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


  function applyColor() {
    const dt = new Date();
    const currentHour = dt.getHours();

    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id"));
        console.log(blockHour, currentHour)

        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}

applyColor();
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // Add code to display the current date in the header of the page.
  const today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));
});
