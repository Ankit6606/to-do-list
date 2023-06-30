const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const date = require(__dirname+"/data.js");

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let items = ["Eat food","Clean hall","Make your bed"];
let workItems = [];

app.get("/",function(req,res){
    let day= date.getDate();
    
    res.render('index', {dayKey: day,newItem : items});
})

app.post("/",function(req,res){

    let item = req.body.newitem;
    if (req.body.button==="Work List"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
   
   
})

app.get("/work",function(req,res){
    res.render('index',{dayKey:"Work List",newItem:workItems})
})

app.get("/about",function(req,res){
    res.render('about');
})
app.listen(process.env.PORT||3000,function(){
    console.log("Server is running at port 3000");
})

