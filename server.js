const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('dist'))


let aboutBio = "";
let aboutPic = "";

let portfolioPics = [];
let fanartPics = [];

let loginStatus = false;
let validUsernames = ['test', 'username'];
let validPasswords = ['test', 'password'];

app.get('/api/status', (req, res) => {
    res.send(loginStatus); 
  });

app.put('/api/aboutBio', (req, res) => {
    let aboutBio = parseInt(req.params.bio);
    res.send(aboutBio);
  });

app.put('/api/aboutPic', (req, res) => {
    let aboutPic = parseInt(req.params.pic);
    res.send(aboutPic);
  });

app.put('/api/login', (req, res) => {
  let enteredUN = req.body.userName;
  let enteredPW = req.body.password;
  if(!validUsernames.includes(enteredUN)){
      res.status(404).send("Invalid Username")
      return;
  }
  else if (!validPasswords.includes(enteredPW)) {
    res.status(404).send("Invalid Password");
    return;
  }
  else loginStatus = true;
  res.sendStatus(200);
  });

app.put('/api/logout', (req,res) => {
  loginStatus = false;
})


app.listen(3030, () => console.log('Server listening on port 3030!'))