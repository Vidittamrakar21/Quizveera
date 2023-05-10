

let box = document.getElementById("vizz");
let stop = document.getElementById("stop");
let card = document.getElementById("score");


function insert(){

    let left = document.getElementById("left");
    let i = 80;

    const sec = () =>{
        
        
        left.textContent = `Total Time Left : ${i} sec`;
        if(i === 0){
            
           
            left.textContent = `Total Time Left : ${0} sec`; 
            console.log("reached 0");
            iter = 5;
            next();
            
        }

        else{

            
            i = i-1;
        }
        
    }
    
    

        setInterval(sec,1000);
    console.log("inside insert");
    
}



function enter(){
    let codevalue = document.getElementById("wild").value;
    let num = localStorage.getItem("generated");
    let user = document.getElementById("proname");
    let student = JSON.parse(localStorage.getItem("userdetail"));
    
    
    
    
    
    
    if(codevalue === num){
        
        
        
        
        box.innerHTML = `   <h2 id="num">Question 1</h2>  
                
        
        
        <input type="text" class="box" id="ques" readonly>
        <input type="text" class="box" id="optA" readonly value="A." onclick="checkA()">
        <input type="text" class="box" id="optB" readonly value="B." onclick="checkB()">
        <input type="text" class="box" id="optC" readonly value="C." onclick="checkC()">
        <input type="text" class="box" id="optD" readonly value="D." onclick="checkD()">
        
        <button id="next" onclick="next()">Next</button> `
            
            
            
            
        stop.innerHTML = `<h3 id="left">Total Time Left :</h3>`    
        
            user.textContent = student.username;
            write();
            console.log("inside enter");
            insert();
            
            
            
            
        }
        
        else{
            alert("Invalid Quiz Code ! make sure that you have logged in correctly")
            
        }
        
    }
    
    
    let data = JSON.parse(localStorage.getItem("maindata"));
    console.log(data[0].ob.qustion1);
    function write(){
        let ques = document.getElementById("ques");
        let optA = document.getElementById("optA");
        let optB = document.getElementById("optB");
        let optC = document.getElementById("optC");
        let optD = document.getElementById("optD");
        
        
        ques.value =   data[count].ob.question;
        optA.value +=   data[count].ob.A;
        optB.value +=   data[count].ob.B;
        optC.value +=   data[count].ob.C;
        optD.value +=   data[count].ob.D;
      
    }
    

//chechiking options

    let correct = 0;
    let incorrect = 0;
    let ckd = 0;
    
    function checkA(){
        let optA = document.getElementById("optA");
        let optB = document.getElementById("optB");
        let optC = document.getElementById("optC");
        let optD = document.getElementById("optD");
        
        

    if(ckd === 0){

        ckd = 1;
        
        if(data[count].ob.A === data[count].ob.right){
            optA.classList.add("correct");
            correct++;
        }
        
        else{
            
            optA.classList.add("incorrect");
            incorrect++;

            if(data[count].ob.B === data[count].ob.right){
                optB.classList.add("correct");
                
            }
            
            else if(data[count].ob.C === data[count].ob.right){
                optC.classList.add("correct");
                
            }
            
            else{
                optD.classList.add("correct");
                
            }
            
        }
    }
    
    
        console.log(correct);
        
        console.log("checked");
    }
    


    function checkB(){
        let optA = document.getElementById("optA");
        let optB = document.getElementById("optB");
        let optC = document.getElementById("optC");
        let optD = document.getElementById("optD");
        
        

    if(ckd===0){

        ckd = 1;

        if(data[count].ob.B === data[count].ob.right){
            optB.classList.add("correct");
            correct++;
        }
        
        else{
            
            optB.classList.add("incorrect");
            incorrect++;
            
            if(data[count].ob.A === data[count].ob.right){
                optA.classList.add("correct");
                
            }
            
            else if(data[count].ob.C === data[count].ob.right){
                optC.classList.add("correct");
                
            }
            
            else{
                optD.classList.add("correct");
                
            }
            
        }
        
    }    
        console.log("checked");
}





    function checkC(){
        let optA = document.getElementById("optA");
        let optB = document.getElementById("optB");
        let optC = document.getElementById("optC");
        let optD = document.getElementById("optD");
        
        
    if(ckd===0){

        ckd = 1;

        if(data[count].ob.C === data[count].ob.right){
            optC.classList.add("correct");
            correct++;
        }
        
        else{
            
            optC.classList.add("incorrect");
            incorrect++;
            
            if(data[count].ob.B === data[count].ob.right){
                optB.classList.add("correct");
                
            }
            
            else if(data[count].ob.A === data[count].ob.right){
                optA.classList.add("correct");
                
            }
            
            else{
                optD.classList.add("correct");
                
            }
            
        }
        
    }
        console.log("checked");
}




    function checkD(){
        let optA = document.getElementById("optA");
        let optB = document.getElementById("optB");
        let optC = document.getElementById("optC");
        let optD = document.getElementById("optD");
        
        
    if(ckd===0){

        ckd=1;
        
        if(data[count].ob.D === data[count].ob.right){
            optD.classList.add("correct");
            correct++;
        }
        
        else{
            
            optD.classList.add("incorrect");
            incorrect++;

            if(data[count].ob.B === data[count].ob.right){
                optB.classList.add("correct");
                
            }
            
            else if(data[count].ob.C === data[count].ob.right){
                optC.classList.add("correct");
                
            }
            
            else{
                optA.classList.add("correct");
                
            }
            
        }
        
    }    
        console.log("checked");
}


let count = 0;
let iter = 1;
let race = 0;

    function next(){

    if(iter <=3){

        box.innerHTML = `   <h2 id="num">Question ${iter+1}</h2>  
        <input type="text" class="box" id="ques" readonly>
        <input type="text" class="box" id="optA" readonly value="A." onclick="checkA()">
        <input type="text" class="box" id="optB" readonly value="B." onclick="checkB()">
        <input type="text" class="box" id="optC" readonly value="C." onclick="checkC()">
        <input type="text" class="box" id="optD" readonly value="D." onclick="checkD()">
        
        <button id="next" onclick="next()">Next</button> `
        
        count++;
        iter++;
        ckd = 0;
        write();
    }
    
    else if(iter === 4){
        box.innerHTML = `   <h2 id="num">Question ${iter+1}</h2>  
        <input type="text" class="box" id="ques" readonly>
        <input type="text" class="box" id="optA" readonly value="A." onclick="checkA()">
        <input type="text" class="box" id="optB" readonly value="B." onclick="checkB()">
        <input type="text" class="box" id="optC" readonly value="C." onclick="checkC()">
        <input type="text" class="box" id="optD" readonly value="D." onclick="checkD()">
        
        <button id="next" onclick="next()">Submit</button> `
        
        count++;
        iter++;
        ckd = 0;
        write();
    }

    else{
        console.log("inside scorecard")
        box.innerHTML = `<div id="score">
        <h1>Your Score</h1>
        <p id="dat"></p>
        <hr>
        <h1 id="point">${correct} / 5</h1> 
        <h2 id="yes">${correct} correct</h2>
        <h2 id="no">${incorrect} incorrect</h2>
     </div>`

        race = 1;
        
       
     let given = document.getElementById("dat");

     let d = new Date();

     let date = d.getDate();
     let mon = d.getMonth();
     let yr = d.getFullYear();
     given.textContent = `${date}/${mon+1}/${yr}`;

        //storing date//
     let din = JSON.stringify(date);
     localStorage.setItem("din",din);

    let mahina = JSON.stringify(mon);
     localStorage.setItem("mahina",mahina);

     let sal = JSON.stringify(yr);
     localStorage.setItem("sal",sal);

     //storing score//

     let cor = JSON.stringify(correct);
        localStorage.setItem("correct",cor);

     let incor = JSON.stringify(incorrect);
        localStorage.setItem("incorrect",incor);

      
    }


    let ufa = JSON.stringify(race);
    localStorage.setItem("race",ufa);
}





