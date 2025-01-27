const express = require("express");
const app = express();
const PORT = 3000;

// /ping route
app.get("/ping", (req, res) => {
    res.send("Welcome to Laugh Out Loud!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
