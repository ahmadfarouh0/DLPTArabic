let wordSpan = document.getElementById("word");

let artikelSpan = document.getElementById("artikel");

let btnShowMeaning = document.getElementById("btnShowMeaning");

let btnNewWord = document.getElementById("btnNewWord");

let words = [];

let currentWordIndex = 0;

fetch("realData.json")
    .then((response) => response.json())
    .then((data) => {
        words = data;
        showNewWord();
    })
    .catch((error) => {
        console.error("Error fetching the JSON data:", error);
    });

btnNewWord.addEventListener("click", () => {
    showNewWord();
});

btnShowMeaning.addEventListener("click", () => {
    showMeaning();
    console.log(words);
});

function showNewWord() {
    currentWordIndex = Math.floor(Math.random() * words.length);

    wordSpan.innerHTML = words[currentWordIndex].word;
    artikelSpan.innerHTML = words[currentWordIndex].artikel;
    document.getElementById("meaning").style.display = "none";

    if (artikelSpan.textContent === "der") {
        artikelSpan.className = "";
        artikelSpan.className = "art_der";
    } else if (artikelSpan.textContent === "die") {
        artikelSpan.className = "";
        artikelSpan.className = "art_die";
    } else if (artikelSpan.textContent === "das") {
        artikelSpan.className = "art_das";
    } else {
        artikelSpan.className = "";
    }
}

function showMeaning() {
    if (words.length > 0) {
        document.getElementById("meaning").textContent =
            words[currentWordIndex].meaning;
        document.getElementById("meaning").style.display = "block";
        // console.log(currentWordIndex);
    }
}

window.onload = function () {};
