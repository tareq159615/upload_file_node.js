const path = require('path');
const express = require("express");
const multer = require('multer');

const app = express(); 
const PORT  = 3000; 

const upload = multer({ dest: "uploads/" });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json()); 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.get("/", (req, res) => {
    return res.render("./homepage.ejs");
});

app.post('/upload', upload.single('profileimage'), (req, res) => {
    console.log(req.body);
    console.log(req.file); 

    return res.redirect("/");
});

app.listen(PORT, () => {
    console.log(`your server is running http://localhost:${PORT}`); 
}); 