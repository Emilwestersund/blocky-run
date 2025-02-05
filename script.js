// Import the Firestore functions from the CDN module
import { collection, addDoc, query, orderBy, limit, getDocs } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

export function startGame(db) {
    const character = document.getElementById("character");
    const block = document.getElementById("block");
    const gameContainer = document.getElementById("gameContainer");
    let counter = 0;

    function jump() {
        if (character.classList.contains("animate")) { return; }
        character.classList.add("animate");
        setTimeout(function() {
            character.classList.remove("animate");
        }, 300);
    }

    async function logScore(score) {
        try {
            await addDoc(collection(db, "scores"), {
                score: score,
                timestamp: new Date()
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    async function displayTopScores() {
        const q = query(collection(db, "scores"), orderBy("score", "desc"), limit(5));
        const querySnapshot = await getDocs(q);
        const topScores = document.getElementById("topScores");
        topScores.innerHTML = "";
        querySnapshot.forEach((doc) => {
            const li = document.createElement("li");
            li.textContent = `${doc.data().score}`;
            topScores.appendChild(li);
        });
    }

    gameContainer.addEventListener('click', jump);

    const checkDead = setInterval(function() {
        const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
            block.style.animation = "none";
            alert("Game Over. score: " + Math.floor(counter / 100));
            logScore(Math.floor(counter / 100));
            counter = 0;
            block.style.animation = "block 1s infinite linear";
            displayTopScores();
        } else {
            counter++;
            document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
        }
    }, 10);

    displayTopScores();
}
