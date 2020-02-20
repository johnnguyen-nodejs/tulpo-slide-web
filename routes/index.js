const express = require("express");

const router = express.Router();

var initRouter = (app)=>{

    router.get('/',(req,res)=>{
        res.render("index",{
            title: "TULPO | Trang Chủ"
        })
    })
    router.get('/about',(req,res)=>{
        res.render("about",{
            title: "TULPO | Giới thiệu"
        })
    })
    router.get('/process',(req,res)=>{
        res.render("process",{
            title: "TULPO | Quy Trình Làm Việc"
        })
    })
    router.get('/contact',(req,res)=>{
        res.render("contact",{
            title: "TULPO | Liên Hệ"
        })
    })
    router.get('/price',(req,res)=>{
        res.render("price",{
            title: "TULPO | Báo Giá Sản Phẩm"
        })
    })

    
    app.use('/', router);
}

module.exports = initRouter;