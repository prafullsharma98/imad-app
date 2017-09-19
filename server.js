var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
              articleOne:{
    title :'This is mypage',
    heading :'Article One',
    date : '19 sept 2017',
    content:`
    <p> Today is wonderfull Day Its a shining day oday is wonderfull Day Its a shining day oday is wonderfull Day Its a shining         
    day oday is wonderfull Day Its a shining day</p>
     <p> Today is wonderfull Day Its a shining day oday is wonderfull Day Its a shining day oday is wonderfull Day Its a shining day oday
     is wonderfull Day Its a shining day</p>
     <p> Today is wonderfull Day Its a shining day oday is wonderfull Day Its a shining day oday is wonderfull Day Its a shining day oday
     is wonderfull Day Its a shining day</p>
      <p> Today is wonderfull Day Its a shining day oday is wonderfull Day Its a shining day oday is wonderfull Day Its a shining day oday is wonderfull Day Its a shining day</p>
    `
},
              articleTwo:{
                       title :'This is mypage',
                       heading : 'Article Two',
                       date : '19 sept 2017',
                       content : `    
                       <p> Today is wonderfull Day Its a shining day oday is wonderfull Day Its a shining day oday is wonderfull Day Its a shining day oday is wonderfull Day Its a shining day</p>
                        <p> Today is wonderfull Day Its a shining day oday is wonderfull Day Its a shining day oday is wonderfull Day Its
                            a shining day oday is wonderfull Day Its a shining day</p>`
              }
             
              
};

function createemplate(data)
{
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    

var htmlTemplate = 

`<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width-device-width,init-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
  
    </head>
    <body>
        <div class ="txt1">
            <div>
                <a href="http://www.google.com">home</a>
            </div>
            <hr/>
            <h3>${heading}</h3>
            <div>
               ${data}
            </div>
            <div>
                ${content}
            </div>
        </div>
    </body>
</html> `;
    return htmlTemplate;
}  

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css',function(req,res){
    res.sendFile(path.join(__dirname,'ui','style.css'));
});
app.get('/prafull-1',function(req,res){
   res.send(createemplate(articles.articleOne));
});
app.get('/prafull-2',function(req,res){
    res.send(createemplate(articles.articleTwo));
});
app.get('/prafull-3',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article-three.html')); 
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
