
let box = document.getElementById("vizz");
let next = document.getElementById("nxt");
let save = document.getElementById("save");


/* initialization of quiz generating */




function enter(){
    let codevalue = document.getElementById("wild").value;
    let num = localStorage.getItem("generated");
    let user = document.getElementById("proname");
    let alfa = document.getElementById("alfa");
    
    if(codevalue === num){
        box.innerHTML = ` <h2 id="num">Question 1</h2>
                    
        <input type="text" placeholder="Enter Question" id="ques">
        <input type="text" placeholder="option A" class="opt" id="optA">
        <input type="text" placeholder="option B" class="opt" id="optB">
        <input type="text" placeholder="option C" class="opt" id="optC">
        <input type="text" placeholder="option D" class="opt" id="optD">
        <h3>Enter correct option(A,B,C,D)</h3>
        <input type="text" placeholder="Correct Option" class="opt" id="correct">
        <button id="nxt" onclick="nextpage()">Next</button>
        <button id="save" onclick="storedata()">Save</button>`
        
        user.textContent = car;
        alfa.textContent = "Quizcode : " + war;
        
    }
    
    else{
        alert("Invalid Quiz Code ! make sure that you have logged in correctly")
        
    }
    
}





let count = 0;

function storedata(){
    let ques = document.getElementById("ques");
    let optA = document.getElementById("optA");
    let optB = document.getElementById("optB");
    let optC = document.getElementById("optC");
    let optD = document.getElementById("optD");
    let correct = document.getElementById("correct");
    console.log("inside showdata");
    const info = [
        {  
            question: ques.value,
            A: optA.value,
            B: optB.value,
            C: optC.value,
            D: optD.value,
            right: correct.value
        },
        
        {  
            question: ques.value,
            A: optA.value,
            B: optB.value,
            C: optC.value,
            D: optD.value,
            right: correct.value
        },
    
        {  
            question: ques.value,
            A: optA.value,
            B: optB.value,
            C: optC.value,
            D: optD.value,
            right: correct.value
        },
    
        {  
            question: ques.value,
            A: optA.value,
            B: optB.value,
            C: optC.value,
            D: optD.value,
            right: correct.value
        },
    
        {  
            question: ques.value,
            A: optA.value,
            B: optB.value,
            C: optC.value,
            D: optD.value,
            right: correct.value
        }
    
    
    ]

    if(count=== 0){

        let git = info[count];
        let dab = JSON.stringify(git);
        localStorage.setItem("quizy1",dab);
        alert(`qestion ${count+1} is saved, click on next button for saving another question `);
        count++;                                            
    }
    
    else if(count === 1){
        let hel = info[count];
        let bab = JSON.stringify(hel);
        localStorage.setItem("quizy2",bab);
        alert(`qestion ${count+1} is saved, click on next button for saving another question `);
        count++; 
    }
    
    else if(count === 2){
        let lol = info[count];
        let cab = JSON.stringify(lol);
        localStorage.setItem("quizy3",cab);
        alert(`qestion ${count+1} is saved, click on next button for saving another question `);
        count++; 
    }
    
    else if(count === 3){
        let lol = info[count];
        let cab = JSON.stringify(lol);
        localStorage.setItem("quizy4",cab);
        alert(`qestion ${count+1} is saved, click on next button for saving another question `);
        count++; 
    }
    
    else if(count === 4){
        let lol = info[count];
        let cab = JSON.stringify(lol);
        localStorage.setItem("quizy5",cab);
        alert(`qestion ${count+1} is saved. `);
        count++; 
    }

    else {
        alert("you can generate 5 questions only!")
    }


    
}                                                      


let view = 1;
function nextpage(){
    console.log("inside nextpage");

    if(view === 1 || view === 2||view === 3){

        box.innerHTML = ` <h2 id="num">Question ${view=view+1}</h2>
        
        <input type="text" placeholder="Enter Question" id="ques">
        <input type="text" placeholder="option A" class="opt" id="optA">
        <input type="text" placeholder="option B" class="opt" id="optB">
        <input type="text" placeholder="option C" class="opt" id="optC">
        <input type="text" placeholder="option D" class="opt" id="optD">
        <h3>Enter correct option(A,B,C,D)</h3>
        <input type="text" placeholder="Correct Option" class="opt" id="correct">
        <button id="nxt" onclick="nextpage()">Next</button>
        <button id="save" onclick="storedata()">Save</button>`
    }

    else{
        box.innerHTML = `  
        <h2 id="num">Question 5</h2>  
        <input type="text" placeholder="Enter Question" id="ques">
        <input type="text" placeholder="option A" class="opt" id="optA">
        <input type="text" placeholder="option B" class="opt" id="optB">
        <input type="text" placeholder="option C" class="opt" id="optC">
        <input type="text" placeholder="option D" class="opt" id="optD">
        <h3>Enter correct option(A,B,C,D)</h3>
        <input type="text" placeholder="Correct Option" class="opt" id="correct">
        <button id="done" onclick="generate()">Generate</button>
        <button id="save" onclick="storedata()">Save</button>
        `
    }

   
    
}

let war = localStorage.getItem("generated");
let car = localStorage.getItem("adminame");

function generate(){
    
    let quizy1 = JSON.parse(localStorage.getItem("quizy1"));
    let quizy2 = JSON.parse(localStorage.getItem("quizy2"));
    let quizy3 = JSON.parse(localStorage.getItem("quizy3"));
    let quizy4 = JSON.parse(localStorage.getItem("quizy4"));
    let quizy5 = JSON.parse(localStorage.getItem("quizy5"));
    
    const main =[{ob: quizy1},{ob: quizy2},{ob: quizy3},{ob: quizy4},{ob: quizy5}];
    
    let clone = JSON.stringify(main);
    
    localStorage.setItem("maindata",clone);
    
    alert(`Yay ${car} !, your quiz is generated successfully. , Quiz Code : ${war}` );
    window.location = "index.html";
    
}


/* 
let count = 1;
let token = 0;
let save = document.getElementById("save");
save.addEventListener('click' ,(e) =>{
        
        //create a function and store the above vales in array//
        //OR try to create another button for storing data and the next button will render the next part//
        token = token +1;
        
        let ques = document.getElementById("ques").value;
        let optA = document.getElementById("optA").value;
        let optB = document.getElementById("optB").value;
        let optC = document.getElementById("optC").value;
        let optD = document.getElementById("optD").value;
        let correct = document.getElementById("correct").value;
        
        
        console.log("Quizveera");
    })
    
    next.addEventListener('click' ,(e) =>{
        
        count = count+1;
        //create a function and store the above vales in array//
        //OR try to create another button for storing data and the next button will render the next part//
        box.innerHTML =`<h2 id="num">Question ${count}</h2>
                    
        <input type="text" placeholder="Enter Question" id="ques">
        <input type="text" placeholder="option A" class="opt" id="optA">
        <input type="text" placeholder="option B" class="opt" id="optB">
        <input type="text" placeholder="option C" class="opt" id="optC">
        <input type="text" placeholder="option D" class="opt" id="optD">
        <h3>Enter correct option(A,B,C,D)</h3>
        <input type="text" placeholder="Correct Option" class="opt" id="correct">
        <button id="nxt">Next</button>
        <button id="save">Save</button>`
        
        console.log("hello vidit");
        

        
        
    })

    */
    



