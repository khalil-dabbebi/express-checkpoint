const express =require ('express');
const app = express ();
const date = require('./middleware/date')
const port = 4000;
app.get ('/get',(req,res)=>{
    res.send ('your first express project')
})
app.use(express.static(__dirname + '/public'));

app.get('/home',date,(req,res)=> {
    res.sendFile(__dirname + '/public/home.html');
})

app.get('/contactus',date,(req,res)=> {
    res.sendFile(__dirname + '/public/contactus.html');
})


app.get('/services',date,(req,res)=> {
    res.sendFile(__dirname + '/public/services.html');
})

app.listen (port, err=>{
    err ? console.log(err):console.log(`you are connected to the ${port}`);
})
