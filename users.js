import express from "express"

const app = express();

const users = [
    { id: "1",  name: "Kis Grofo" },
    { id: "2", name: "Nagy Feró" },
    { id: "3", name: "Sam Johnson" },
];

app.get("/api/users/:id", (req, res) => {
    const user = users.find(u => u.id == u.same.id)
    res.status(200).json(user);
});

app.delete("/api/users/:id", (req, res) => {
    const userDelete = users.id == id;
    res.status(204).json(userDelete);
})