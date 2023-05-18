let box = document.getElementById("vizz");
let race = JSON.parse(localStorage.getItem("race"));
let correct = JSON.parse(localStorage.getItem("correct"));
let incorrect = JSON.parse(localStorage.getItem("incorrect"));
let din = JSON.parse(localStorage.getItem("din"));
let mahina = JSON.parse(localStorage.getItem("mahina"));
let sal = JSON.parse(localStorage.getItem("sal"));
let user = document.getElementById("proname");
let student = JSON.parse(localStorage.getItem("userdetail"));


function fire(){

    console.log("race = ",race);
    user.textContent = student.username;

    if(race === 1){
        

        box.innerHTML = `<div id="score">
        <h1>Your Score</h1>
        <p id="date">${din}/${mahina + 1}/${sal}</p>
        <hr>
        <h1 id="point"> ${correct} / 5</h1> 
        <h2 id="yes">${correct} correct</h2>
        <h2 id="no">${incorrect} incorrect</h2>
        </div> 
        `
    }
    

    else{
        box.innerHTML = `<h1 id="yet">No Score Yet!</h1> `;
    }
}

fire();



function log(){
    window.localStorage.clear();
    window.location = "index.html";
    alert("You have been loged out !")
}
