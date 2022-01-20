// set timeblock using moment.js
var hour9am = moment().hour(9);
var hour10am = moment().hour(10);
var hour11am = moment().hour(11);
var hour12pm = moment().hour(12);
var hour1pm = moment().hour(13);
var hour2pm = moment().hour(14);
var hour3pm = moment().hour(15);
var hour4pm = moment().hour(16);
var hour5pm = moment().hour(17);
var hour6pm = moment().hour(18);
var hour7pm = moment().hour(19);

//curent day
var currentDay = moment().format("dddd, MMMM Do, h:mm:ss a");

// display current day
$("#currentDay").append(currentDay);

//Assign save btn

