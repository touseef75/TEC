let data = [
    {
        question:"Q1)HTML stand for ?",
        a:"a) hypertext markup language",
        b:"b) hypertext makeup language",
        c:"c) hypertext mark language",
        d:"d) hyper markup language",
        ans:"ans1",
    },
    {
       question:"Q2)js stand for?",
        a:"a) jequrey",
        b:"b) javas",
        c:"c) javascript",
        d:"d) json", 
        ans:"ans3",
    },
     {
       question:"Q3)how many days in a week?",
        a:"a) 30",
        b:"b) 7",
        c:"c) 3",
        d:"d) 9", 
        ans:"ans2",
    },
    {
       question:"Q4)how many days in a month?",
        a:"a) 30",
        b:"b)70",
        c:"c) 3",
        d:"d) 2", 
        ans:"ans1",
    }
]
let question = document.getElementById("question");
let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")
let d = document.getElementById("d")
let but = document.getElementById("but");
let total = document.getElementById("scoreArea")
let incre = 0;
let add = 0;
let answers = document.querySelectorAll(".answere")
function detail(){
    let arr = data[incre];
    question.innerHTML = arr.question;
    a.innerHTML = arr.a;
    b.innerHTML = arr.b;
    c.innerHTML = arr.c;
    d.innerHTML = arr.d;
}
detail();
 function getid(){
     let answer;
     answers.forEach((everyEle)=>{
        if(everyEle.checked){
            answer = everyEle.id;
        }
     })
     return answer;
 } 



let audio2 = document.getElementById("audio1");
    


but.addEventListener("click",()=>{
        img.src=" ";
        audio2.play();

      incre++;
    if(incre < data.length){
        detail();
    }else{
        
    }

})

let img = document.getElementById("img");
    let but2 = document.getElementById("but2");
let audio1 = document.getElementById("audio");

but2.onclick = function(){
    var main = getid();
    console.log(main)
    if(main == data[incre].ans){
        add++;
        audio1.play();
        img.src= "./image2/check.gif";
    }else{
        img.src = "./image2/wrong.png"
    }
}




let info = document.getElementById("info");
let main1 = document.getElementById("main1");
let nfq = document.getElementById("nfq");
let nfa = document.getElementById("nfa");



let cal = document.getElementById("cal");
cal.addEventListener("click",function(){
        audio2.play();

    nfq.innerHTML =  "= " + data.length;
    nfa.innerHTML =  "= " +  add;
    info.style.display = "";
    main1.style.display = "none";
    but.disabled = true;
    

})

let ok = document.getElementById("ok");

ok.onclick = function(){
        audio2.play();
    but.disabled = false;

    info.style.display = "none";
    main1.style.display = "";
}



   
   
   
   
   
   
   
   
   
   
   
   
   
   




