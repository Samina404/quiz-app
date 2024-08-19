 const questions=[
{
question: "Which is the capital of bd?",
answer:[
    {text: "MUMBAI", correct:false},
    {text: "DHAKA", correct:true},
    {text: "SYLHET", correct:false},
    {text: "FENI", correct:false},
]

},
{
    question: "Which is the capital of INDIA?",
    answer:[
        {text: "MUMBAI", correct:true},
        {text: "DHAKA", correct:false},
        {text: "SYLHET", correct:false},
        {text: "FENI", correct:false},
    ]
    
    },
    {
        question: "Which is the capital of pakistan?",
        answer:[
            {text: "MUMBAI", correct:false},
            {text: "ISLAMABAD", correct:true},
            {text: "SYLHET", correct:false},
            {text: "FENI", correct:false},
        ]
        
        },
        {
            question: "Which is the capital of AMERICA?",
            answer:[
                {text: "MUMBAI", correct:false},
                {text: "DHAKA", correct:false},
                {text: "SYLHET", correct:false},
                {text: "WASHINGTON DC", correct:true},
            ]
            
            }
];
const questioneElement= document.getElementsByClassName(".ok");
const ansbutton= document.getElementsByClassName(".ans");
const nextbutton= document.getElementsByClassName("next");
 
let currentindex=0;
let score=0;
function start(){
     currentindex=0;
     score=0;
     nextbutton.innerHTML= "Next";
    showquestion();
}
 function showquestion(){
let currentquestion= questions[currentindex];
let questionNo = currentindex + 1;
questioneElement.innerHTML=questionNo + ". " +currentquestion.question;
 currentquestion.answer.array.forEach(answer => {
    const button= document.createElement(".button");
    button.innerHTML= answer.text;
    button.classList.add("btn");
    optionbutton.appendchild(button)

 });
}
start();

