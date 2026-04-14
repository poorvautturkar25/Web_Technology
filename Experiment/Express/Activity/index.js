const express = require("express");
const app = express();
const port = 3002;

app.use(express.json());

// Dummy database (array)
let users = [
    { id: 1, name: "Poorva", email: "poorva@gmail.com" },
    { id: 2, name: "Rahul", email: "rahul@gmail.com" },
    { id: 3, name: "Sneha", email: "sneha@gmail.com" },
    { id: 4, name: "Amit", email: "amit@gmail.com" }
];

// 👉 GET all users
app.get("/users", (req, res) => {
    res.json(users);
});

// 👉 GET single user by ID
app.get("/users/:id", (req, res) => {
    const user = users.find(u => u.id == req.params.id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
});

// 👉 POST (Add new user)
app.post("/users", (req, res) => {
    const { id, name, email } = req.body;

    if (!id || !name || !email) {
        return res.status(400).json({ message: "All fields required" });
    }

    users.push({ id, name, email });
    res.status(201).json({ message: "User added successfully", users });
});

// 👉 PUT (Update user)
app.put("/users/:id", (req, res) => {
    const user = users.find(u => u.id == req.params.id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const { name, email } = req.body;

    if (name) user.name = name;
    if (email) user.email = email;

    res.json({ message: "User updated successfully", user });
});

// 👉 DELETE user
app.delete("/users/:id", (req, res) => {
    const userIndex = users.findIndex(u => u.id == req.params.id);

    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users.splice(userIndex, 1);
    res.json({ message: "User deleted successfully" });
});

// Server

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})