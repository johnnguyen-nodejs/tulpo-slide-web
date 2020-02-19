const express = require("express");

const router = express.Router();

const initRouter = (app)=>{

    router.get('/',(req,res)=>{
        res.render("index",{
            title: "TULPO | Home"
        })
    })

    
    app.use('/', router);
}

module.exports = initRouter;