const express = require('express');
const app = express();

app.listen(3000);

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.redirect('/user');
});

app.get('/user', (req,res)=>{
    res.render('index');
});
app.post('/user', (req,res)=>{
    const found = detect(req.email ,req.pass);
    
});