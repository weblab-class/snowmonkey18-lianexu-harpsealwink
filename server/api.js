/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");
const Info = require("./models/profileinfo");


// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

//data for levels
const data = {
  levels: [
    {
      _id: 0,
      function: '1(x+0)^2+0',
      hint: 'Welcome to the dojo, Ninja-in-Training. You are about to embark on an important journey to discover and master control over the Elements you need to be a Graph Ninja. Here, we will train 3 of your Elements: A, B, and C. Invoking each individually and in combination with each other results in a different outcome. We will start with Elements A. Go ahead: enter 1 for A, 0 for B, and 0 for C and see if you can match the yellow graph on the right.',
      note: 'Please enter whole numbers.'
    },
    {
      _id: 1,
      function: '4(x+0)^2+0',
      hint: 'Great! Now we have to sharpen Element A. Try different values for A until you match the red graph again. What does A = 2 do? A = 3? A = 4?',
      note: 'Please enter whole numbers, and input 0 for B and C.'
    },
    {
      _id: 2,
      function: '-2(x+0)^2+0',
      hint: 'Graph ninjas are never caught unaware, so here’s a curveball to keep you on your toes. How will you match this?',
      note: 'Please enter whole numbers, and input 0 for B and C.'
    },
    {
      _id: 3,
      function: '1(x-1)^2+0',
      hint: 'Nice one! I think you’re ready to move on to Element B. This might be another curveball. How will you shift the function to the right by 1? Observe what happens when you invoke B = 1 and B = -1.',
      note: 'Please enter whole numbers, and input 1 for A and 0 for C.'
    },
    {
      _id: 4,
      function: '1(x+2)^2+0',
      hint: 'Can you match this graph?',
      note: 'Please enter whole numbers, and input 1 for A and 0 for C.'
    },
    {
      _id: 5,
      function: '1(x+0)^2+3',
      hint: 'That wasn’t that hard. Now, I’ll allow you to try Element C and make the function go upwards. Here are some original words of wisdom: It’s leviosa, not leviosa! Anyways, try different values of C until you can match the graph.',
      note: 'Note: please enter whole numbers, and input 1 for A and 0 for B.'
    },
    {
      _id: 6,
      function: '1(x+0)^2-3',
      hint: 'What’s the opposite of leviosa? Leviosai’nt.',
      note: 'Note: please enter whole numbers, and input 1 for A and 0 for B.'
    },
    {
      _id: 7,
      function: '2(x+4)^2+0',
      hint: 'Now that you’ve discovered what each Element does, I want you to show me how you would combine Elements A and B to match this graph.',
      note: 'Please enter whole numbers, and input 0 for C.'
    },
    {
      _id: 8,
      function: '2(x+1)^2+2',
      hint: 'Too easy? Let’s see if you can add in Element C now, and use all 3 Elements.',
      note: 'Please enter whole numbers'
    },
    {
      _id: 9,
      function: '4(x-1)^2-2',
      hint: 'This is my last test. It was nice training with you, my Graph Ninja. It is now time for me to send you off into the world. Navigate to the Freestyle room in the dojo to discover more Skills you might need in the future. Remember: with great power comes great responsibility.',
      note: 'Please enter whole numbers.'
    },

  ],
};

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user) socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

router.get("/profileinfos", (req, res) => {
  Info.find({}).then((infos) => res.send(infos));
});

router.post("/profileinfo", auth.ensureLoggedIn, (req, res) => {
  const newInfo = new Info({
    creator_id: req.user._id,
    creator_name: req.user.name,
    content: req.body.content,
  });

  newInfo.save().then((info) => res.send(info));
});

router.get("/levels", (req, res) => {
  // send back all of the levels!
  res.send(data.levels);
});

router.post("/setHighestLevel", auth.ensureLoggedIn, (req, res) => {

  console.log('setitng highest level')
  if(req.user) {
    User.findById(req.body.userId).then(
      (user) => {
        
        console.log("highest level set")
        if(req.body.level > user.highestLevel){
          user.highestLevel = req.body.level;
        }
        user.save().then(ans => res.send(ans));
        });
  }
  
});

  router.get("/getHighestLevel", (req, res) => {
    // console.log(req);
    console.log('get highest level')
    if (req.user) {

      User.findById(req.user._id).then(
        (user) => {
          console.log('highest level set')
          res.send({highestLevel: user.highestLevel})
        }
      );
    }
    
  });


// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
