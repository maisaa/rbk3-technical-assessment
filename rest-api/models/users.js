var _ = require('underscore');


// The seeded state of our in-memory "database"
var users = [
  {
    id: 1,
    name: 'Taka',
    email: 'taka@taka.com'
  },
  {
    id: 2,
    name: 'Nayo',
    email: 'nayo@nayo.com'
  },
  {
    id: 3,
    name: 'Amrit',
    email: 'amrit@amrit.com'
  }
];

var nextId = 4;

var getNextId = function () {
  return nextId++;
};

// Public methods. Build out these functions as necessary
// The first two have been done for you!
exports.getAll = function () {
  return users;
};

exports.setAll = function (newUsers) {
  users = newUsers;
  nextId = newUsers.length + 1;
  return newUsers;
};

exports.getOne = function (id) {
  if(id === user.id)
    return user;
};

exports.addOne = function (user) {
  // var user = setAll(newOne)
  // users.push(user)
  
};

exports.updateOne = function (id, newProperties) {
  // 1. for loop search to find id and then add new properties
};

exports.deleteOne = function (id) {
  // find id then pop it from the array of user
};
