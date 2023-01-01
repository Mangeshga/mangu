const express=require("express");
const app=express();

app.get("/",function(req,resp){
    resp.send("Hello Mangesh");
});

app.listen(4000,function(){
console.log("Server running on 4000");
});