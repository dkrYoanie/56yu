console.log("hi this is easter eeeg")

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDrYl_kyI9zxCTtmkAH4fNw7-UiY6Ddhxs",
    authDomain: "something-12e45.firebaseapp.com",
    databaseURL: "https://something-12e45.firebaseio.com",
    projectId: "something-12e45",
    storageBucket: "something-12e45.appspot.com",
    messagingSenderId: "60611310707",
    appId: "1:60611310707:web:de54aaa73236c42600e606"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  db = firebase.database()
//   var vb = firebase.database(db.push())
db.ref().child("boi").push({name: "gurl", age: Math.floor(Math.random()*100)})
//   db.ref().push("test")
// db.ref().child("boi").get()
var cool = db.ref("boi")
cool.on("value", function(snapshot){
    // console.log(snapshot)
    snapshot.forEach(function(childSnapshot){
        console.log(childSnapshot.val())
    })
})