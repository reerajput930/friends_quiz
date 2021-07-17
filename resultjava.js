let name_ = sessionStorage.getItem("name");
let point = sessionStorage.getItem("points")
let wrong_ans = sessionStorage.getItem("wronge")
let correct_ans = sessionStorage.getItem("correct")
let seconds = sessionStorage.getItem("seconds")
let minutes = sessionStorage.getItem("minutes")
let hours = sessionStorage.getItem("hours")

                        //class               //actual value
document.querySelector(".user_name").innerHTML = name_;
document.querySelector(".points").innerHTML = point;
document.querySelector(".wronge").innerHTML = wrong_ans;
document.querySelector(".correct").innerHTML = correct_ans;

// condition single digit formate of timer
let formate_seconds = seconds < 10 ? `0${seconds}`:`${seconds}`;
let formate_minutes = minutes < 10 ? `0${minutes}`:`${minutes}`;
let formate_hours = hours < 10 ? `0${hours}`:`${hours}`;
document.querySelector(".time").innerHTML = `${formate_hours}:${formate_minutes}:${formate_seconds}`;

