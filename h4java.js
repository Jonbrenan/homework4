
var timeEl = document.querySelector("#timer");


var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

setTime();




// These are all the first buttons

boyGenious = document.querySelector("#boyGenious")

boyGenious.addEventListener("click", function () {
    q1div= document.querySelector(".main")
    q2div=document.querySelector(".second")
    secondTF = document.querySelector("#secondTF")
    q1div.setAttribute("class", "hide")
    q2div.removeAttribute("class", "hide")
    q2div.setAttribute("class", "second",)
    q2div.setAttribute("class", "card")
    secondTF.textContent="Correct"

})


boyIdiot = document.querySelector("#boyIdiot")

boyIdiot.addEventListener("click", function () {
    q1div= document.querySelector(".main")
    q2div=document.querySelector(".second")
    secondTF = document.querySelector("#secondTF")
    q1div.setAttribute("class", "hide")
    q2div.removeAttribute("class", "hide")
    q2div.setAttribute("class", "second")
    q2div.setAttribute("class", "card")
    secondTF.textContent="Wrong! You are failing this test!"
})

boyOhBoy = document.querySelector("#boyOhBoy")

boyOhBoy.addEventListener("click", function () {
    q1div= document.querySelector(".main")
    q2div=document.querySelector(".second")
    secondTF = document.querySelector("#secondTF")
    q1div.setAttribute("class", "hide")
    q2div.removeAttribute("class", "hide")
    q2div.setAttribute("class", "second")
    q2div.setAttribute("class", "card")
    secondTF.textContent="Wrong! You are failing this test!"
})

lawnmower = document.querySelector("#lawnmower")

lawnmower.addEventListener("click", function () {
    q1div= document.querySelector(".main")
    q2div=document.querySelector(".second")
    secondTF = document.querySelector("#secondTF")
    q1div.setAttribute("class", "hide")
    q2div.removeAttribute("class", "hide")
    q2div.setAttribute("class", "second")
    q2div.setAttribute("class", "card")
    secondTF.textContent="Wrong! You are failing this test!"
})

//These are the second questions


jimFriend = document.querySelector("#jimq")

jimFriend.addEventListener("click", function () {
    q3div= document.querySelector(".third")
    thirdTF= document.querySelector("#thirdTF")
    q2div.setAttribute("class", "hide")
    q3div.removeAttribute("class", "hide")
    q3div.setAttribute("class", "card")
    thirdTF.textContent="Wrong! You are failing this test!"
})

jimn = document.querySelector("#jimn")

jimn.addEventListener("click", function () {
    q3div= document.querySelector(".third")
    thirdTF= document.querySelector("#thirdTF")
    q2div.setAttribute("class", "hide")
    q3div.removeAttribute("class", "hide")
    q3div.setAttribute("class", "card")
    thirdTF.textContent="Correct!"
})


ultra = document.querySelector("#ultra")

ultra.addEventListener("click", function () {
    q3div= document.querySelector(".third")
    thirdTF= document.querySelector("#thirdTF")
    q2div.setAttribute("class", "hide")
    q3div.removeAttribute("class", "hide")
    q3div.setAttribute("class", "card")
    thirdTF.textContent="Wrong! You are failing this test!"
})


lamp = document.querySelector("#lamp")

lamp.addEventListener("click", function () {
    q3div= document.querySelector(".third")
    thirdTF= document.querySelector("#thirdTF")
    q2div.setAttribute("class", "hide")
    q3div.removeAttribute("class", "hide")
    q3div.setAttribute("class", "card")
    thirdTF.textContent="Wrong! You are failing this test!"
})




//// this is the third buttons



let q3q1 = document.querySelector("#q3q1")

q3q1.addEventListener("click", function () {
    q3div.setAttribute("class", "hide")
    q4div = document.querySelector(".fourth")
    fourthTF = document.querySelector("#fourthTF")
    q4div.removeAttribute("class", "hide")
    fourthTF.textContent="Wrong! You are failing this test!"
    q4div.setAttribute("class", "card")
})


let q3q2 = document.querySelector("#q3q2")

q3q2.addEventListener("click", function () {
    q3div.setAttribute("class", "hide")
    q4div = document.querySelector(".fourth")
    fourthTF = document.querySelector("#fourthTF")
    q4div.removeAttribute("class", "hide")
    fourthTF.textContent="Wrong! You are failing this test!"
    q4div.setAttribute("class", "card")
})


let q3q3 = document.querySelector("#q3q3")

q3q3.addEventListener("click", function () {
    q3div.setAttribute("class", "hide")
    q4div = document.querySelector(".fourth")
    fourthTF = document.querySelector("#fourthTF")
    q4div.removeAttribute("class", "hide")
    fourthTF.textContent="Wrong! You are failing this test!"
    q4div.setAttribute("class", "card")
})


let q3q4 = document.querySelector("#q3q4")

q3q4.addEventListener("click", function () {
    q3div.setAttribute("class", "hide")
    q4div = document.querySelector(".fourth")
    fourthTF = document.querySelector("#fourthTF")
    q4div.removeAttribute("class", "hide")
    fourthTF.textContent="Correct!"
    q4div.setAttribute("class", "card")
})