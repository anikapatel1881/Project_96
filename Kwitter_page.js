var firebaseConfig = {
    apiKey: "AIzaSyCD0kiSb-wszB8tT9-e54eByRuab3Qpx5U",
    authDomain: "C94project.firebaseapp.com",
    databaseURL: "https://c94project-9440b-default-rtdb.firebaseio.com",
    projectId: "C94project",
    storageBucket: "c94project.appspot.com",
    messagingSenderId: "846610719199",
    appId: "1:846610719199:web:f763f77560f146a244246a"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
  }