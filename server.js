// Express setup
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('dist'))

// Knex Setup - for setting up database
const env = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[env];  
const knex = require('knex')(config);

// bcrypt setup - for encrypting passwords
let bcrypt = require('bcrypt');
const saltRounds = 10;

let aboutBio = "";
let aboutPic = "";

let portfolioPics = [];
let fanartPics = [];


// multer setup - for uploading images
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'static/uploads')
  },
  filename: (req, file, cb) => {
    cb(null, `${req.userID}-${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({storage: storage});






app.get('/api/about/bio', (req, res) =>{
  knex('users').where('username','Kolipha2').select('aboutMe', 'aboutPic')
  .then(bio => {
    res.status(200).json({bio:{aboutMe:bio[0].aboutMe, aboutPic:bio[0].aboutPic}});
  }).catch(error => {
    res.status(500).json({ error });
  });
});

app.put('/api/about/bio', (req, res) => {
  knex('users')
  .where('username', 'Kolipha2')
  .update({aboutMe: req.body.aboutMe,});

  knex('users').where('aboutMe', 'Koliphan2').then(user => {
    return res.status(200).json({message: req.body.aboutMe});
  }).catch(error => {
    if (error.message !== 'abort') {
      console.log(error);
      res.status(500).json({ error });
    }
  });
});

app.put('/api/about/pic', (req, res) => {
    let aboutPic = parseInt(req.params.pic);
    res.send(aboutPic);
  });

app.post('/api/login', (req, res) => {
    if (!req.body.username || !req.body.password)
      return res.status(400).send();
    knex('users').where('username',req.body.username).first().then(user => {
      if (user === undefined) {
        res.status(403).send("Invalid credentials");
        throw new Error('abort');
      }
      return [bcrypt.compare(req.body.password, user.hash),user];
    }).spread((result,user) => {
      if (result)
        res.status(200).json({user:user});
      else
        res.status(403).send("Invalid credentials");
      return;
    }).catch(error => {
      if (error.message !== 'abort') {
        console.log(error);
        res.status(500).json({ error });
      }
    });
  });

// Register a user // 

app.post('/api/users', (req, res) => {
  if (!req.body.email || !req.body.password || !req.body.username)
    return res.status(400).send();
    knex('users').where('username',req.body.username).first().then( user =>{
    if (user !== undefined) {
      res.status(409).send("User name already exists");
      throw new Error('abort');
    }
    return bcrypt.hash(req.body.password, saltRounds);
  }).then(hash => {
    return knex('users').insert({email: req.body.email, hash: hash, username:req.body.username, aboutMe:"Write about yourself here! Also add a picture to show people what you look like!", aboutPic:""});
  }).then(ids => {
    return knex('users').where('id',ids[0]).first().select('username','id');
  }).then(user => {
    res.status(200).json({user:user});
    return;
  }).catch(error => {
    if (error.message !== 'abort') {
      console.log(error);
      res.status(500).json({ error });
    }
  });
});

app.post('/api/artwork/upload', upload.single("image"),(req,res) => {
  if(!req.file || !req.body.location){
    console.log(req.body.location + " is the location");
    return res.status(400).send();
    //Must have an image and location - Title and description are optional
  }
  let path = '';
  path = req.file.path;
  return knex('images').insert({title: req.body.title, description: req.body.description, location: req.body.location, image:path})
    .catch(error =>{
      console.log(error);
      res.status(500).json({ error });
    })
});

app.get('/api/:location/artwork',(req, res)=>{
  let location = req.params.location;
  knex('images').where('location', location)
  .orderBy('id','desc')
  .select('image', 'description','title','location').then(images => {
    res.status(200).json({image:images});
  }).catch(error => {
    res.status(500).json({ error });
  });
});




/*app.put('/api/login', (req, res) => {
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
*/


app.put('/api/logout', (req,res) => {
  loginStatus = false;
});


app.listen(3030, () => console.log('Server listening on port 3030!'));