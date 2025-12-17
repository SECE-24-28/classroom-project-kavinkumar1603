// Correct answers: Q1=2 (const), Q2=3 (console.log()), Q3=3 (character)
const correct = { 1: 2, 2: 3, 3: 3 };
let selected = {};
let score = 0;

function select(question, answer) {
    selected[question] = answer;
    
    // Highlight selected button
    const buttons = document.getElementById("q" + question).querySelectorAll("button");
    buttons.forEach((btn, i) => {
        if (i === answer) {
            btn.className = "w-full bg-blue-600 text-white py-3 rounded-xl px-4 text-left";
        } else if (!btn.onclick.toString().includes("validate")) {
            btn.className = "w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-xl px-4 text-left";
        }
    });
}

function validate(question) {
    if (selected[question] === undefined) {
        alert("Please select an answer first!");
        return;
    }
    
    if (selected[question] === correct[question]) {
        alert("Correct!");
        score++;
        document.getElementById("q" + question).style.display = "none";
        
        if (question < 3) {
            document.getElementById("q" + (question + 1)).style.display = "block";
        } else {
            document.getElementById("result").style.display = "block";
            document.getElementById("scoreText").textContent = score;
        }
    } else {
        alert("Wrong answer. Try again.");
    }
}

