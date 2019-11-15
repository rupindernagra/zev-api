var mongoose = require('mongoose');
//var assert = require('assert');
var ContactsSchema = new mongoose.Schema({
  name: String,
  country_code: Number,
  device_token: String,
  number: String,
  status: String,
  on_cute: Boolean
});

var FirebaseSchema = new mongoose.Schema({
  type: String,
  token: String
});

var FriendsSchema = new mongoose.Schema({
  user_id: String,
  firstname: String,
  lastname: String,
  birthday: String,
  username: String,
  contact: String,
  email: String,
  lat: String,
  long: String,
  city: String,
  country: String,
  famePoints: Number,
  //firebaseTokens: [FirebaseSchema],
  imageurl: String,
  status: String,
});

// Types
// 1 - event
// 2 - challange photo
// 3 - challange video

var EventsSchema = new mongoose.Schema({
  title: String,
  description: String,
  pointsOnStake: Number,
  type: Number,
  mediaUrl: String,
  createDate: String,
  startDateTime: String,
  endDateTime: String,
  createdBy: String,
  challangeTo: String,
  challangeBy: String,
  firebaseTokens: [FirebaseSchema],
  status: String,
});

var UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  birthday: String,
  username: String,
  contact: String,
  email: String,
  device_token: String,
  notification_key: String,
  lat: String,
  long: String,
  city: String,
  country: String,
  country_code: Number,
  contacts: [ContactsSchema],
  events: [EventsSchema],
  famePoints: Number,
  firebaseTokens: [FirebaseSchema],
  friends: [FriendsSchema],
  tempkey: String,
  createdOn: Date,
  password: String,
  imageurl: String,
  status: Boolean,
});

// creating a new saved event and emitting it below
// UserSchema.on('saved', function(doc) {
//   console.log('update user data here in other tables.');
//   //console.log('saved',doc);
// });

UserSchema.post('save', function (doc) {
  console.log('update user data here in other documents.');
  //UserSchema.emit('saved', doc); // emitting event created above
});


// Methods

UserSchema.methods.requestfriend = function testFunc(params, callback) {
  console.log(params, callback);
}

UserSchema.statics.updateCuteContacts = function (user, callback) {
  // check if registered user is in someone's contact lis  
  User.find({ "contacts.number": '' + user.contact }, function (err, results) {
    if (results.length > 0) {
      results.forEach((el) => {
        el.contacts = el.contacts.map((cont) => {
          if (cont.number == user.contact) {
            cont._id = user._id;
            cont.device_token = user.device_token;
            cont.notification_key = user.notification_key;
            cont.status = 'add_friend';
            cont.on_cute = true;
          }
          return cont;
        })
        el.save(function (err, success) {
          console.log(success);
        })
      })
      callback(null, results);
    }
  });
};

UserSchema.statics.contactsSync = function (post, callback) {
  var contacts = post.contacts;
  var user = post.user;

  if (typeof contacts === 'string') {
    contacts = JSON.parse(contacts);
  }
  var content = contacts.map((x) => { x.number = parseInt(x.num); x.country_code = x.cc; x.status = ""; x.on_cute = false; delete x.num; delete x.cc; return x; });
  //checking and adding contacts to user contacts
  var count = 0;
  let final_response = [];
  content.forEach(el => {
    //check if its already in on cut
    User.findOne({ contact: '' + el.number }, function (err, document) {
      if (err) final_response.push({ contact: el.number.toString(), status: false, error: "Error occured while sync the user details." });
      // only add if not in contact
      if (document != null) {
        el.number.toString();
        el._id = document._id;
        el.device_token = document.device_token;
        el.notification_key = document.notification_key;
        el.on_cute = true;
        el.status = 'add_friend';
        User.update({ _id: user._id }, { $push: { contacts: el } }, function (err, doc) {
          if (err) {
            final_response.push({ contact: el.number.toString(), status: false, error: "Error occured while sync the user details." })
          } else {
            final_response.push({ contact: el.number.toString(), status: true, error: "Contact saved!" })
          }
        });
      } else {
        User.update({ _id: user._id }, { $push: { contacts: el } }, function (err, doc) {
          if (err) {
            final_response.push({ contact: el.number.toString(), status: false, error: "Error occured while sync the user details." })
          } else {
            final_response.push({ contact: el.number.toString(), status: true, error: "Contact saved!" })
          }
        });
      }
    }); count++;
  });

  // marking if user is on cuteapp
  User.find({}, function (err, user) {
    if (err) return callback({ status: false, error: "Error while checking user availability on cuteapp." });
    var userContacts = user.map(function (v) { return v.contact; });
    User.update({ "contacts.number": userContacts }, { $set: { "contacts.$.on_cute": true } }, { multi: true });
  });

  // if count runs successfully then returning user
  if (count == content.length) {
    User.findById(post.userId, function (err, user) {
      callback({ status: true, error: err, result: user });
    });
  } else {
    return callback({ status: false, error: "error while data sync" });
  }
}

UserSchema.statics.addAsFriend = function (post, callback) {
  if(post.user_id == null || post.me == null) {
    callback(true, 'User Id invalid. Please send a valid User Id');
  }else{
    User.findById(post.user_id, function(err, document){
      if(err != null){
        callback(true, 'User does not exist on Cute!')
      }else{
        //remove element from contacts and move to friends
        var updated_contact;
        User.findById({_id: post.me}, function(err, document){
          if(err != null) {return callback(true, err)}
          document.friends.push({_id: post.user_id, user_id: post.user_id,status: "requested"});
          document.save(function(err, doc){
            if(err == null){
              User.update({ _id: post.user_id }, { $push: { friends: {_id: post.me, user_id: post.me,status: "pending"}} }, function (err, doc) {
                if(err == null){
                  callback(null, doc)
                }else{
                  callback(true, err);
                }
              });
            }else{
              callback(true, err);
            }
          });
        });
      }
    })
  }
}
// UserSchema.methods.acceptfriendrequest = function(params, cb) {
//   console.log(params);
//   UserSchema.findByIdAndUpdate({_id:params.id,'friends.user_id':params.user_id}, {
//       $set: {'friends.$.status':"success"}
//   },function (err, user1) {
//   if (err) return res.status(500).send({status:false, error:"Error occured while sync the user details."});
//       // User.findByIdAndUpdate({_id:user._id}, {
//       //     $push: {
//       //         friends:{
//       //             user_id:user1._id,
//       //             firstname:user1.firstname,
//       //             lastname:user1.lastname,
//       //             birthday:user1.birthday,
//       //             username:user1.username,
//       //             contact:user1.contact,
//       //             email:user1.email,
//       //             lat:user1.let,
//       //             long:user1.long,
//       //             city:user1.city,
//       //             country:user1.country,
//       //             famePoints:user1.famePoints,
//       //             imageurl:user1.imageurl,
//       //             status:"pending"
//       //         }
//       //     }
//       // },{new:true},function(err,u){if(err){console.log(err);}else{console.log(u._id);}});
//   return res.sendSuccess({status:true, user:user1});
//   });
//   cb();
// }

var User = mongoose.model('users', UserSchema);

module.exports = User;

// var schema = new mongoose.Schema({
//   name:    {type:String,required:true}});
// var Thing = mongoose.model('Thing', schema);
// var m = new Thing;  
// m.save(function(error) {
//   if(error.errors['name'].message){
//     console.log( error.errors['name'].message);
//   }
//   // assert.equal(error.errors['name'],
//   //   'Name field is required');

//   // error = m.validateSync();
//   // assert.equal(error.errors['name'].message,
//   //   'Path `name` is required.');
// });
