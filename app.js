const express = require("express");
const cookieParser = require("cookie-parser"); 
const app=express();
app.use(express.json());
app.use(cookieParser());

app.get("/set-cookie",(req,res)=>{
    res.cookie("name","secFB",{
        maxAge: 4 * 60 * 60 * 1000,
        httpOnly:true,
        secure:false,
    });
    res.send("Cookie set ho gyi hai");
})

app.get("/get-cookie", (req, res) => {
    const data = req.cookies.name;
    if (data) {
        res.send(data);
    } 
    else{
        res.send("No cookies found");
    }
})


app.get("/delete-cookie", (req, res) => {
    res.clearCookie("name");
    res.send("Cookie cleared");
});

app.listen(8000,()=>{
    console.log("server started");
})