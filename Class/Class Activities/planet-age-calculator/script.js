const btn = document.getElementById("calculate");
const result = document.getElementById("result");
const extraAge = document.getElementById("extraAge");
const dobInput = document.getElementById("dob");

/* Planet orbital period (Earth years) */
const planets = {
    "☿ Mercury": 0.24,
    "♀ Venus": 0.62,
    "🌍 Earth": 1,
    "♂ Mars": 1.88,
    "♃ Jupiter": 11.86,
    "♄ Saturn": 29.46,
    "⛢ Uranus": 84.01,
    "♆ Neptune": 164.8
};

/* Main Calculation */
function calculateAge() {

    const dobValue = dobInput.value;

    if (!dobValue) {
        result.innerHTML = "⚠️ Please select DOB";
        return;
    }

    const birthDate = new Date(dobValue);
    const now = new Date();

    const diff = now - birthDate;

    const days = diff / (1000*60*60*24);
    const hours = diff / (1000*60*60);
    const earthYears = days / 365.25;

    /* Extra Life Stats */
    extraAge.innerHTML = `
        <h3>🧮 Your Life Stats</h3>
        <p><b>Earth Age:</b> ${earthYears.toFixed(2)} years</p>
        <p><b>Days lived:</b> ${Math.floor(days)}</p>
        <p><b>Hours lived:</b> ${Math.floor(hours)}</p>
    `;

    result.innerHTML = "";

    /* Planet Age Cards */
    for (let planet in planets) {

        const age = earthYears / planets[planet];

        const card = document.createElement("div");
        card.classList.add("planet-card");

        card.innerHTML = `
            <h4>${planet}</h4>
            <p>${age.toFixed(2)} years</p>
        `;

        result.appendChild(card);
    }
}

/* Button Event */
btn.addEventListener("click", calculateAge);

/* Enter Key Support */
dobInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") calculateAge();
});