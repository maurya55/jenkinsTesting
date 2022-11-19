const express=require("express");
const app=express();
app.get("/testing",(req,res)=>{
    return res.status(200).json({
        message:"wap ok "
    })
})
app.get((req,res,next)=>{
    console.log("not found")
})
app.get((err,req,res,next)=>{
    console.log(err);
    // console.log("not found")
})

app.listen(8000,()=>{
    console.log("connected")
})
