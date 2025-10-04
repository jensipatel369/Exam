let arr = [
    {
        q : "1. HTML stands for?",
        options : [ "Hyper Text Markup Language", "Hyper Text Makeup Language", "Hyper Tool Markup Language", "None of these" ],
        answer : "Hyper Text Markup Language"
    },
    {
        q : "2. CSS stands for?",
        options : [ "Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets" ],
        answer : "Cascading Style Sheets"
    },
    {
        q : "3. JS stands for?",
        options : [ "JavaScript", "JavaSuper", "JustScript", "JollyScript" ],
        answer : "JavaScript"
    },
    {
        q : "4. Which is not a programming language?",
        options : [ "HTML", "Python", "JavaScript", "C++" ],
        answer : "HTML"
    },
    {
        q : "5. Which is not a CSS framework?",
        options : [ "Bootstrap", "Tailwind", "React", "Foundation" ],
        answer : "React"
    }
]

let question = document.getElementById("question");
let options = document.getElementById("options");
let timer = document.getElementById("timer");
let currentQue = document.getElementById("currentQue")
let nextBtn = document.getElementById("next-button");

let currentQueIndex = 0;

function displayQuestion() {
    let currentQue = arr[currentQueIndex];
    question.innerHTML = `<h2>${currentQue.q}</h2>`;
    options.innerHTML = "";
    currentQue.options.forEach(option => {
        let button = document.createElement("button");
        button.innerText = option;
        options.appendChild(button);
    })
}

nextBtn.addEventListener("click", () => {
    currentQueIndex++;
    if (currentQueIndex < arr.length) {
        displayQuestion();
    }
})

displayQuestion();
