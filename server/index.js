const express = require("express");
const app = express();

const data = [
    {
        id: 1,
        name: "Esssar",
    },
    {
        id: 2,
        name: "Harsh",
    }
]

app.get("/users", (req, res) => {
    console.log(data);
    res.send(data)
});

app.listen(3001, () => console.log("app online on 3001"))