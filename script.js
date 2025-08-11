const questions = [
    { q: "You find it easy to introduce yourself to new people.", dim: "EI", type: "E" },
    { q: "You often get so lost in thoughts you ignore your surroundings.", dim: "SN", type: "N" },
    { q: "You rely more on logic than feelings when making decisions.", dim: "TF", type: "T" },
    { q: "You prefer to have a detailed plan rather than being spontaneous.", dim: "JP", type: "J" },
    { q: "You enjoy being the center of attention.", dim: "EI", type: "E" },
    { q: "You focus more on ideas than facts.", dim: "SN", type: "N" },
    { q: "You make decisions based on what feels right.", dim: "TF", type: "F" },
    { q: "You like to keep options open rather than committing early.", dim: "JP", type: "P" },
    { q: "You gain energy from being around people.", dim: "EI", type: "E" },
    { q: "You notice details more than big-picture ideas.", dim: "SN", type: "S" },
    { q: "You value justice over mercy.", dim: "TF", type: "T" },
    { q: "You feel uncomfortable with last-minute changes.", dim: "JP", type: "J" },
    { q: "You prefer one-on-one conversations over large group activities.", dim: "EI", type: "I" },
    { q: "You often think about future possibilities rather than present reality.", dim: "SN", type: "N" },
    { q: "You avoid conflict if possible, even if it means compromising.", dim: "TF", type: "F" },
    { q: "You like to work in a structured environment.", dim: "JP", type: "J" },
    { q: "You find networking events energizing.", dim: "EI", type: "E" },
    { q: "You are more practical than imaginative.", dim: "SN", type: "S" },
    { q: "You often question whether something is morally right or wrong.", dim: "TF", type: "F" },
    { q: "You dislike surprises and prefer predictability.", dim: "JP", type: "J" }
];

const typeDescriptions = {
    "INTJ": "The Architect – Strategic, logical, and loves long-term planning.",
    "INTP": "The Thinker – Analytical, curious, and loves problem-solving.",
    "ENTJ": "The Commander – Natural leader, decisive, and driven.",
    "ENTP": "The Debater – Quick-witted, energetic, and loves challenges.",
    "INFJ": "The Advocate – Idealistic, insightful, and principled.",
    "INFP": "The Mediator – Empathetic, creative, and values harmony.",
    "ENFJ": "The Protagonist – Charismatic, inspiring, and a natural mentor.",
    "ENFP": "The Campaigner – Enthusiastic, imaginative, and free-spirited.",
    "ISTJ": "The Logistician – Responsible, organized, and dependable.",
    "ISFJ": "The Nurturer – Supportive, loyal, and detail-oriented.",
    "ESTJ": "The Executive – Practical, efficient, and takes charge.",
    "ESFJ": "The Consul – Caring, sociable, and attentive to others’ needs.",
    "ISTP": "The Virtuoso – Independent, adaptable, and loves hands-on tasks.",
    "ISFP": "The Adventurer – Gentle, spontaneous, and sensitive.",
    "ESTP": "The Entrepreneur – Bold, active, and loves excitement.",
    "ESFP": "The Entertainer – Fun-loving, energetic, and sociable."
};

let currentQuestion = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

function showQuestion() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = `
        <div class="question">${questions[currentQuestion].q}</div>
        <div class="options">
            <button onclick="answer('${questions[currentQuestion].type}')">Agree</button>
            <button onclick="answer('${questions[currentQuestion].type === 'E' ? 'I' :
                                     questions[currentQuestion].type === 'I' ? 'E' :
                                     questions[currentQuestion].type === 'S' ? 'N' :
                                     questions[currentQuestion].type === 'N' ? 'S' :
                                     questions[currentQuestion].type === 'T' ? 'F' :
                                     questions[currentQuestion].type === 'F' ? 'T' :
                                     questions[currentQuestion].type === 'J' ? 'P' : 'J'}')">Disagree</button>
        </div>
    `;
}

function answer(choice) {
    scores[choice]++;
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const type =
        (scores.E >= scores.I ? "E" : "I") +
        (scores.S >= scores.N ? "S" : "N") +
        (scores.T >= scores.F ? "T" : "F") +
        (scores.J >= scores.P ? "J" : "P");
    document.getElementById("quiz").style.display = "none";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = `
        <h2>Your Personality Type: ${type}</h2>
        <p>${typeDescriptions[type]}</p>
    `;
}

document.getElementById("next-btn").addEventListener("click", () => {
    showQuestion();
});

showQuestion();
