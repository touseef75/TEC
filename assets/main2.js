let data = [
    {
        question:"Q1) How many types are there in the alimentary canal of the cockroach ?",
        a:"a) One",
        b:"b) Two",
        c:"c) Three",
        d:"d) Four",
        ans:"ans3",
    },
    {
       question:"Q2) In the digestive system of cockroach, the foregut contains mouth which is surrounded by?",
        a:"a) Stomach",
        b:"b) Anal cerci",
        c:"c) Mouth parts",
        d:"d) Hindgut", 
        ans:"ans3",
    },
     {
       question:"Q3) which part in the digestive system of cockroach act as grinding chamber of food?",
        a:"a) Gizzard",
        b:"b) Crop",
        c:"c) Oesophagus",
        d:"d) Colon", 
        ans:"ans1",
    },
    {
       question:"Q4) Which of the following organs is/are not found in the foregut of a cockroach?",
        a:"a) Pharynx",
        b:"b) Crop",
        c:"c) Gizzard",
        d:"d) Hepatic caecae", 
        ans:"ans4",
    },
    {
       question:"Q5) All of the following are true segmented mouth appendages, except?",
        a:"a) labrum",
        b:"b) hypopharynx",
        c:"c) mandibles",
        d:"d) maxilla", 
        ans:"ans2",
    },
    {
       question:"Q6) Postmentum and prementum are parts of?",
        a:"a) labrum",
        b:"b) hypopharynx",
        c:"c) labium",
        d:"d) maxilla", 
        ans:"ans4",
    },
    {
       question:"Q7) Where are pulville located in the alimentary canal of a cockroach?",
        a:"a) Crop",
        b:"b) Armarium",
        c:"c) Posterior part of the gizzard",
        d:"d) caecae", 
        ans:"ans3",
    },
    {
       question:"Q8) Where are 6 teeth (internally produced) found in the digestive system of a cockroach?",
        a:"a) Midgut",
        b:"b) Gizzard",
        c:"c) Crop",
        d:"d) hindgut", 
        ans:"ans2",
    }, {
       question:"Q9) Which part of the alimentary canal of cockroaches secrete(s) digestive juices?",
        a:"a) Mesentron",
        b:"b) Caecae",
        c:"c) Crop",
        d:"d) Anterior ilium", 
        ans:"ans2",
    }, {
       question:"Q10) Which of the following structures bear(s) sensory organs?",
        a:"a) Labrum and labium",
        b:"b) Mandibles and maxillae",
        c:"c) Maxillary and labial palps",
        d:"d) Hypopharynx", 
        ans:"ans3",
    },
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



   
   
   
   
   
   
   
   
   
   
   
   
   
   




