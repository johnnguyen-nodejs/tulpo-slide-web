const express = require("express");

const router = express.Router();

var initRouter = (app)=>{

    router.get('/',(req,res)=>{
        res.render("index",{
            title: "TULPO | Home"
        })
    })

    
    app.use('/', router);
}

module.exports = initRouter;