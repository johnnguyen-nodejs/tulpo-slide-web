const express = require("express");
const bodyParser = require("body-parser");
const initRouter = require("./routes");
const app = express();

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', 'views')

//init router
initRouter(app);

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server running on ${port}`)
})