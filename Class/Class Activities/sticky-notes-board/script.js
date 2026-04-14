const addBtn = document.getElementById("addNote");
const board = document.getElementById("board");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

/* Random Colors */
const colors = [
    "#ffadad",
    "#ffd6a5",
    "#fdffb6",
    "#caffbf",
    "#9bf6ff",
    "#bdb2ff"
];

/* Save Notes */
function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

/* Create Note Function */
function createNote(text = "", x = 50, y = 50) {

    const note = document.createElement("div");
    note.classList.add("note");

    note.style.left = x + "px";
    note.style.top = y + "px";

    note.style.background =
        colors[Math.floor(Math.random() * colors.length)];

    note.innerHTML = `
        <span class="delete">✖</span>
        <textarea>${text}</textarea>
    `;

    board.appendChild(note);

    const textarea = note.querySelector("textarea");
    const delBtn = note.querySelector(".delete");

    /* Delete Note */
    delBtn.addEventListener("click", () => {
        note.remove();
        notes = notes.filter(n => n.id !== note.dataset.id);
        saveNotes();
    });

    /* Edit Note */
    textarea.addEventListener("input", () => {
        const id = note.dataset.id;
        const noteObj = notes.find(n => n.id == id);
        noteObj.text = textarea.value;
        saveNotes();
    });

    /* Dragging Logic */
    let offsetX, offsetY, isDragging = false;

    note.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.offsetX;
        offsetY = e.offsetY;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;

        note.style.left = (e.pageX - offsetX) + "px";
        note.style.top = (e.pageY - offsetY) + "px";
    });

    document.addEventListener("mouseup", () => {
        if (isDragging) {
            const id = note.dataset.id;
            const noteObj = notes.find(n => n.id == id);

            noteObj.x = note.offsetLeft;
            noteObj.y = note.offsetTop;

            saveNotes();
        }
        isDragging = false;
    });

    return note;
}

/* Add Note Button Event */
addBtn.addEventListener("click", () => {

    const id = Date.now();

    const noteData = {
        id: id,
        text: "",
        x: 60,
        y: 60
    };

    notes.push(noteData);
    saveNotes();

    const newNote = createNote("", 60, 60);
    newNote.dataset.id = id;
});

/* Load Saved Notes */
notes.forEach(n => {
    const loadedNote = createNote(n.text, n.x, n.y);
    loadedNote.dataset.id = n.id;
});