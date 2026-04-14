const btn = document.getElementById("generateBtn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {

    const mood = document.getElementById("mood").value;
    const energy = document.getElementById("energy").value;
    const style = document.getElementById("style").value;

    if (!mood || !energy || !style) {
        result.innerHTML = "⚠️ Please answer all questions.";
        return;
    }

    let colorName = "";
    let backgroundColor = "";

    /* Personality Logic */
    if (mood === "Calm" && energy === "Low") {
        colorName = "Ocean Blue 🌊";
        backgroundColor = "#1e3c72";
    }
    else if (mood === "Happy" && energy === "High") {
        colorName = "Sunshine Yellow ☀️";
        backgroundColor = "#f9d423";
    }
    else if (style === "Creative") {
        colorName = "Purple Dream 💜";
        backgroundColor = "#6a11cb";
    }
    else if (style === "Bold") {
        colorName = "Fire Red 🔥";
        backgroundColor = "#c31432";
    }
    else {
        colorName = "Forest Green 🌿";
        backgroundColor = "#134e5e";
    }

    /* Update Result */
    result.innerHTML = `
        <p><b>Mood:</b> ${mood}</p>
        <p><b>Energy:</b> ${energy}</p>
        <p><b>Style:</b> ${style}</p>
        <h3>Your Color: ${colorName}</h3>
    `;

    /* Change Page Background */
    document.body.style.background = backgroundColor;
});