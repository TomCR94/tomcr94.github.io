var startDate = new Date("Sep 23, 1966");
// 
var timer = setInterval(function() {

    let now = new Date();
    
var years = diff_years(now, startDate)
var days = diff_days(now, startDate)
var hours = diff_hours(now, startDate)
var mins =diff_minutes(now, startDate)

    
        document.getElementById("timer-years").innerHTML = years
        document.getElementById("timer-days").innerHTML = days;
        document.getElementById("timer-hours").innerHTML = hours
        document.getElementById("timer-mins").innerHTML = mins
}, 1000);

function diff_years(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  return Math.abs(Math.floor(diff/ (60 * 60 * 24 * 365.25)));
   
 }

 function diff_days(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  return Math.abs(Math.floor(diff /= (60 * 60 * 24)));
   
 }
 function diff_hours(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  return Math.abs(Math.floor(diff /= (60 * 60)));
   
 }
 function diff_minutes(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  return Math.abs(Math.floor(diff /= 60));
   
 }
