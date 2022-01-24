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
      hint: 'Sensei: Welcome to the dojo, Graph-Ninja-in-Training. Here, we will train 3 skills: (a) stretch, (b) sidestep, and (c) levitate. We will start with stretching. Go ahead: Input a=1 and see if you can match my yellow curve.',
      note: 'Important: input b=0, c=0, and whole numbers only!'
    },
    {
      _id: 1,
      function: '4(x+0)^2+0',
      hint: 'Sensei: Great! See if you can stretch the graph differently, and match me again. What does a=2 do? a=3? a=4?',
      note: 'Important: input b=0, c=0, and whole numbers only!'
    },
    {
      _id: 2,
      function: '-2(x+0)^2+0',
      hint: 'Sensei: Graph ninjas are never caught unaware, so here’s a curveball to keep you on your toes. How will you match this?',
      note: 'Important: input b=0, c=0, and whole numbers only!'
    },
    {
      _id: 3,
      function: '1(x+-1)^2+0',
      hint: 'Sensei: Nice one! You’re ready to practice sidestepping – this might be another curveball. Observe what happens when you invoke b=1 and b=-1.',
      note: 'Important: input a=1, c=0, and whole numbers only!'
    },
    {
      _id: 4,
      function: '1(x+2)^2+0',
      hint: 'Sensei: Sliiide to the left…Cha cha real smooth.',
      note: 'Important: input a=1, c=0, and whole numbers only!'
    },
    {
      _id: 5,
      function: '2(x+4)^2+0',
      hint: 'Sensei: Now that we’ve practiced (a) stretching and (b) sidestepping separately, I want you to combine them.',
      note: 'Important: input c=0, and whole numbers only!'
    },
    {
      _id: 6,
      function: '1(x+0)^2+3',
      hint: 'Sensei: That wasn’t that hard. Now I’ll allow you to try levitation. Here are some original words of wisdom: It’s leviosa, not leviosa! Anyways, try different values of (c).',
      note: 'Important: input a=1, b=0, and whole numbers only!'
    },
    {
      _id: 7,
      function: '1(x+0)^2-3',
      hint: 'Sensei: What’s the opposite of leviosa? Levios-ain’t. How should you change (c) now?',
      note: 'Important: input a=1, b=0, and whole numbers only!'
    },
    {
      _id: 8,
      function: '2(x+1)^2+2',
      hint: 'Sensei: Too easy? Let’s see if you can use all 3 skills together.',
      note: 'Important: input whole numbers only!'
    },
    {
      _id: 9,
      function: '4(x+-1)^2+-2',
      hint: 'Sensei: This is my last test. It is now time for me to send you off into the world. Navigate to the Freestyle room in the dojo to discover more Skills you might need in the future. Remember: with great power comes great responsibility.',
      note: 'Important: input whole numbers only!'
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


//This is the stuff we need

router.get("/levels", (req, res) => {
  // send back all of the levels!
  res.send(data.levels);
});


router.post("/setHighestLevel", auth.ensureLoggedIn, (req, res) => {
  console.log('setting highest level')
  if (req.user) {
    User.findById(req.body.userId).then((user) => {
      console.log("highest level set")
      if (req.body.level > user.highestLevel) {
        user.highestLevel = req.body.level;
      };
      user.save().then(ans => res.send(ans));
    });
  }
});

router.get("/getHighestLevel", (req, res) => {
  // console.log(req);
  console.log('get highest level')
  if (req.user) {
    User.findById(req.user._id).then((user) => {
        console.log('highest level set');
        res.send({highestLevel: user.highestLevel});
    });
  };
});

router.post("/addStarFuncs", auth.ensureLoggedIn, (req, res) => {
  console.log('adding to starred functions')
  if (req.user) {
    User.findById(req.body.userId).then((user) => {
      console.log("function starred");
      if (!user.starFuncs.includes(req.body.func)) {
        user.starFuncs.push(req.body.func);
      };
      user.save().then(func => res.send(func));
    });
  };
});

router.post("/delStarFuncs", auth.ensureLoggedIn, (req, res) => {
  console.log('unstarring a function')
  if (req.user) {
    User.findById(req.body.userId).then((user) => {
      console.log("function unstarred");
      const index = user.starFuncs.indexOf(req.body.func);
      if (index !== -1) {
        user.starFuncs.splice(index, 1);
      };
      user.save().then(func => res.send(func));
    });
  };
});

router.get("/getStarFuncs", (req, res) => {
  console.log("get starred functions");
  if (req.user) {
    User.findById(req.user._id).then((user) => {
        console.log('starred functions gotten');
        res.send({starFuncs: user.starFuncs});
    });
  };
});


router.post("/setNinjaPower", auth.ensureLoggedIn, (req, res) => {
  console.log('setting ninja power')
  if(req.user) {
    User.findById(req.body.userId).then(
      (user) => {       
          user.ninjaPower = req.body.ninjaPower;
          user.save().then(ans => res.send(ans));
      });
  }
});

router.get("/getNinjaPower", (req, res) => {
  console.log("get ninja power")
  if (req.user) {
    User.findById(req.user._id).then(
      (user) => {
        console.log('get ninja power')
        res.send({ninjaPower: user.ninjaPower})
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
