// Get item from local storage if any
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));


//curent day
var currentDay = moment().format("dddd, MMMM Do, h:mm:ss a");

// display current day
$("#currentDay").append(currentDay);

//Assign save btn
$(".saveBtn").on("click", function() {
    //get nearby vaule
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //save text in local storage 
    localStorage.setItem(time, text);
})

function hourTracker() {
//get current number of  hours 
    var TimeNow = moment().hour();

    //loop over time blocks
    $(".time-block").each(function(){
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);
    
        //check the time and add the proper background 
        if (blockTime < TimeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === TimeNow) {
            $(this).removeClass("future");
            $(this).addClass("present");
            $(this).removeClass("past");
        }
        else {
            $(this).addClass("future");
            $(this).removeClass("preesnt");
            $(this).removeClass("past");
        }
    })
}
    //rerun function
    hourTracker();
