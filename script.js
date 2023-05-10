//login form//

let login = document.getElementById("lock");
let admin = document.getElementById("admin");
let student = document.getElementById("student");
let sub = document.getElementById("submit");

function response(){

    admin.style.backgroundColor = "#5CB8E4";
    admin.style.color = "white";
    student.style.backgroundColor = "white";
    student.style.color = "black";

    student.style.borderBottom = "1px solid #5CB8E4";
    
}


    
admin.addEventListener('click',(e) =>{

    response();

    login.innerHTML = `<h5>Password</h5>
    <input type="password" placeholder="Enter Password" id="pass" class="inp">`

    //storing host name and quiz code in local storage// 
    sub.addEventListener('click',(e) =>{

        var num = Math.floor(Math.random()*10000) + 999;
        console.log(num);

        
        var profile = document.getElementById("user").value;
        
        localStorage.setItem("adminame",profile);
        localStorage.setItem("generated",num);
        
        gama();
        
        location.reload();
        
        
        
    })
    
    
})

function gama(){
    if(localStorage.getItem("adminame")=== ""){
        alert("All the details must be filled completely and correctly ! ");
    }
    
    else{
        alert(`You are successfully logged in ! Go to build quiz section to genrate your quiz | Quiz code : ${localStorage.getItem("generated")} `);
        
    }
}


//getting and saving data of user//

sub.addEventListener('click',(e) =>{
    
    let user = document.getElementById("user").value;
    let mail = document.getElementById("mail").value;
    let code = document.getElementById("code").value;

    console.log(user);
    console.log(mail);

    var userinfo = {
        username: user,
        usermail: mail,
        quizcode: code
    };

    var wap = JSON.stringify(userinfo);

    localStorage.setItem("userdetail",wap);

    beta();

   })


   function beta(){

    var data = JSON.parse(localStorage.getItem("userdetail"));
    console.log(data.username);

    if(data.username === "" || data.usermail === "" || data.quizcode === ""){
        alert("All the details must be filled completely and correctly ! ");

    }

    else{
        alert("You are successfully logged in ! Go to start quiz section to start you quiz. ")
        window.location = "start.html";
    }
   }



function responseone(){
    
    student.style.backgroundColor = "#5CB8E4";
    student.style.color = "white";
    admin.style.backgroundColor = "white";
    admin.style.color = "black";
    
    admin.style.borderBottom = "1px solid #5CB8E4";
    

}

student.addEventListener('click',(e) =>{

    responseone();    

    login.innerHTML = `<h5>Enter quiz code</h5>
    <input type="text" placeholder="Enter Quiz Code" id="code" class="inp">`

})

let home = document.getElementById("active");
let start = document.getElementById("start");
let build = document.getElementById("build");
let score = document.getElementById("score");
let log = document.getElementById("log");
let help = document.getElementById("help");

function active(n){
    if(n === 1){
        home.style.color = "#2F0F5D"
        home.style.textDecoration = "underline"
    }
    
    else if(n ===2){
        
        start.style.color = "#2F0F5D"
        start.style.textDecoration = "underline"
    }
    else if(n ===3){
        
        build.style.color = "#2F0F5D"
        build.style.textDecoration = "underline"
    }
    else if(n ===4){
        
        score.style.color = "#2F0F5D"
        score.style.textDecoration = "underline"
    }
    else if(n ===5){
        
        log.style.color = "#2F0F5D"
        log.style.textDecoration = "underline"
    }

    else{
        
        help.style.color = "#2F0F5D"
        help.style.textDecoration = "underline"
    }
}