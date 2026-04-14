const btn = document.getElementById("generateBtn");
const result = document.getElementById("result");

/* Convert name into number (logic generator) */
function nameScore(name) {
    let total = 0;
    for (let i = 0; i < name.length; i++) {
        total += name.charCodeAt(i);
    }
    return total;
}

/* Generate percentage from seed */
function generatePercent(seed, multiplier) {
    return (seed * multiplier) % 101;
}

btn.addEventListener("click", () => {

    const name = document.getElementById("nameInput").value.trim();

    if (name === "") {
        result.innerHTML = "⚠️ Please enter your name.";
        return;
    }

    const seed = nameScore(name);

    const dna = {
        "Logic 🧠": generatePercent(seed, 3),
        "Creativity 🎨": generatePercent(seed, 5),
        "Focus 🎯": generatePercent(seed, 7),
        "Energy ⚡": generatePercent(seed, 9)
    };

    result.innerHTML = "<h3>Your Digital DNA</h3>";

    /* Create DOM elements dynamically */
    for (let trait in dna) {

        const percent = dna[trait];

        const container = document.createElement("div");
        container.classList.add("trait");

        container.innerHTML = `
            <p>${trait}: ${percent}%</p>
            <div class="bar">
                <div class="fill"></div>
            </div>
        `;

        result.appendChild(container);

        /* Animate bar */
        const fill = container.querySelector(".fill");

        setTimeout(() => {
            fill.style.width = percent + "%";
        }, 100);
    }
});