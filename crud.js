const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());
app.get("/users", (req, res) => {
    fs.readFile("sample.json", "utf-8", (err, data) => {
        if (err) return res.send("No data");
        res.send(data);
    });
});
app.post("/users", (req, res) => {
    fs.writeFile("sample.json", JSON.stringify(req.body), (err) => {
        res.send("Added");
    });
});
app.put("/users", (req, res) => {
    fs.writeFile("sample.json", JSON.stringify(req.body), (err) => {
        res.send("Updated");
    });
});
app.patch("/users", (req, res) => {
    fs.readFile("sample.json", "utf-8", (err, data) => {
        let old = data ? JSON.parse(data) : {};
        let updated = { ...old, ...req.body };

        fs.writeFile("sample.json", JSON.stringify(updated), (err) => {
            res.send("Patched");
        });
    });
});
app.delete("/users", (req, res) => {
    fs.unlink("sample.json", (err) => {
        res.send("Deleted");
    });
});

app.listen(8000, () => {
    console.log("Server running at https://localhost:8000");
});