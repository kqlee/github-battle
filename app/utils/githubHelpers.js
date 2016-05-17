var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_ID" + id + "&client_secret=" + sec;

var getUserInfo = function(username) {
  return axios.get('https://api.github.com/users' + username + param);
};

var helpers = {
  getPlayersInfo: function(players) {
    //fetch data from github
    return axios.all(players.map(function(username) {
      return getUserInfo(username);
    })).then(function(info) {
      return info.map(function(user) {
        return user.data;
      })
    }).catch(function(err) {
      console.warn('Error in getPlayersInfo', err);
    })
  }
};

module.exports = helpers;