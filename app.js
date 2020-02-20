const express = require("express");
const app = express();
const http = require('http').createServer(app)
const bodyParser = require("body-parser");
const initRouter = require("./routes");
const Telegraf = require('telegraf')
const bots = new Telegraf('997188454:AAGcmatqy0uQkBoocDUUaDL5ConzKZGql0A')

bots.start((ctx) => {
    ctx.reply('Chào Sếp Lộc')
})


app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', 'views')

//init router
initRouter(app);

const port = process.env.PORT || 3000;

http.listen(port,()=>{
    console.log(`Listening on HTTP Port: ${port}`);
})
bots.launch()