const express=require('express');
const router=express.Router();
//get all authers
router.get("/", (req,res)=>{
     res.render("authors/index");
})
//get new auther route
router.get("/new",(req,res)=>{
    res.render("authors/new");
});
router.post("/", (req,res)=>{
    res.send('Create')
})
module.exports=router;