var mainApp = angular.module("TashleyApp", ['ui.router', 'firebase']);

/* Initialize Firebase */
var config = {
  apiKey: "AIzaSyCUk7AcNP8SecGxE-kugJpKN5VvIwMJjqE",
  authDomain: "codenametashley-a2b9a.firebaseapp.com",
  databaseURL: "https://codenametashley-a2b9a.firebaseio.com",
  projectId: "codenametashley-a2b9a",
  storageBucket: "codenametashley-a2b9a.appspot.com",
  messagingSenderId: "762388539776"
};
firebase.initializeApp(config);
/* End of Firebase code */

/* Session Stack code */
! function (a, b) {
  var c = window;
  c.SessionStack = a, c[a] = c[a] || function () {
    c[a].q = c[a].q || [], c[a].q.push(arguments)
  }, c[a].t = b;
  var d = document.createElement("script");
  d.async = 1, d.src = "https://cdn.sessionstack.com/sessionstack.js";
  var e = document.getElementsByTagName("script")[0];
  e.parentNode.insertBefore(d, e);
}("sessionstack", "296508c878fa469cb8993f85680d9379");

/* End of Session Stack code */