function printTime(){
var d = new Date();
var hours = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();
document.getElementById("time_td").innerHTML = hours+":"+min+":"+sec;
}
setInterval(printTime, 1000);