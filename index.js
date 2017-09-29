const express = require('express');
const app = express();

var bodyParser = require('body-parser');
const path = __dirname + '/public/';

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path));
app.get('/', function (req, res) {
    res.sendFile(path + 'index.html');
});

app.get('/about', function(req, res){
    res.sendFile(path + 'about.html');
});
app.get('/upcomingEvents', function (req, res) {
    var file = path +'pdf/Upcoming Events (International Students Only).pdf';
    res.download(file);

});

app.get('/forEmployees', function(req, res){
    res.sendFile(path + 'forEmployees.html');
});
app.get('/contact', function(req, res){
    res.sendFile(path + 'contact.html');
});
app.get('/feedback', function(req, res){
    res.sendFile(path + 'feedback.html');
});
app.get('/register', function(req, res){
    res.sendFile(path + 'becomeMember.html');
});
app.listen(process.env.PORT||3000);