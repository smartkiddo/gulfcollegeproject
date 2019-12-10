const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const exphbs=require('express-handlebars');
const topics=require('./db/topic');



const app=express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/topics', (req, res)=>
{
   topics.getTopics().then((topics)=>{
       res.json(topics);
   });

}
);
app.get('/create', (req, res)=>{

    res.render('create');

});
app.get('/register', (req, res)=>{

    res.render('register');

});
app.post('/register/create', (req, res)=>{

    res.render('register');

});
app.post('/register/edit', (req, res)=>{

    res.render('register');

});
app.get('/about', (req, res)=>{

    res.render('about');

});
app.get('/contact', (req, res)=>{

    res.render('contact');

});
app.get('/blog', (req, res)=>{

    res.render('blog');

});
app.get('/login', (req, res)=>{

    res.render('login');

});

const port = process.env.PORT ||3000;
app.listen(port, ()=>{
    console.log(`listening on ${port}`);
});