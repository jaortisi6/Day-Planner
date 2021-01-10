// Sets items from local storage as variables
let textVal9 = localStorage.getItem("hr-9");
let textVal10 = localStorage.getItem("hr-10");
let textVal11 = localStorage.getItem("hr-11");
let textVal12 = localStorage.getItem("hr-12");
let textVal1 = localStorage.getItem("hr-1");
let textVal2 = localStorage.getItem("hr-2");
let textVal3 = localStorage.getItem("hr-3");
let textVal4 = localStorage.getItem("hr-4");
let textVal5 = localStorage.getItem("hr-5");

// Assigns IDs to the variables declared above
let text9 = $("#hr-9");
let text10 = $("#hr-10");
let text11 = $("#hr-11");
let text12 = $("#hr-12");
let text1 = $("#hr-1");
let text2 = $("#hr-2");
let text3 = $("#hr-3");
let text4 = $("#hr-4");
let text5 = $("#hr-5");

// Displays values from local storage in the text boxes using the ID variables
text9.val(textVal9);
text10.val(textVal10);
text11.val(textVal11);
text12.val(textVal12);
text1.val(textVal1);
text2.val(textVal2);
text3.val(textVal3);
text4.val(textVal4);
text5.val(textVal5);

// Sets the variable "date" to the current date
let date = moment().format("dddd, MMMM Do, YYYY");

// Displays the date in the "currentDay" id 
$("#currentDay").text(date);

// Initiating "time" function
function time() {

    // Sets variable "currentHour" to the current hour.
    let currentHour = moment().hours();

    // Function for each hour block to determine if it is in the past, present, or future
    $(".block").each(function () {
        let hour = parseInt($(this).attr("id"));

        // If statement determines if the hour is in the past
        if (hour < currentHour) {
            // Assigns "past" class to the blocks
            $(this).addClass("past");
        }

        // Else if statement determines if the hour is in the present
        else if (hour === currentHour) {
            // Removes "past" class from the blocks
            $(this).removeClass("past");
            // Assigns "present" class to blocks
            $(this).addClass("present");
        }

        // Else statement determines if the hour is in the future
        else {
            // Removes "past" class from the blocks
            $(this).removeClass("past");
            // Removes "present" class from the blocks
            $(this).removeClass("present");
            // Adds "future" class to the blocks
            $(this).addClass("future");
        }

    });

};

// Calls the "time" function
time();

// Event listener for "save" button click that executes save function
$(".saveButton").on("click", function (event) {
    // Prevents refresh when saveButton is clicked
    event.preventDefault();

    // Assigns "text" variable the previous sibling of saveButton which is "text"
    let text = $(this).prev();

    // Variable "id" holds (sets variable textarea to its id)
    let id = text.attr("id");

    // Variable "value" holds (the value of textarea)
    let value = text.val();
    // Sets items id and value in local storage
    localStorage.setItem(id, value);
});