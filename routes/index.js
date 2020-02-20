const express = require("express");
const Telegram = require('telegraf/telegram')
const telegram = new Telegram('997188454:AAGcmatqy0uQkBoocDUUaDL5ConzKZGql0A')
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
    router.post('/price',async (req, res) => {
        var htmlContent = req.body
        telegram.sendMessage(278948791, htmlContent.mota)
        telegram.sendMessage(278948791, htmlContent.pt)
        telegram.sendMessage(278948791, htmlContent.info)
        telegram.sendMessage(695862559, htmlContent.mota)
        telegram.sendMessage(695862559, htmlContent.pt)
        telegram.sendMessage(695862559, htmlContent.info)
        res.sendStatus(200)
    })

    router.get('/*',(req,res)=>{
        res.redirect("/");
    })
    app.use('/', router);
}

module.exports = initRouter;