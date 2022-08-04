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

document.getElementById("user_name").innerHTML = "Hi" + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location.replace("kwitter_page.html");
}
function getData() {
  firebase.database().ref("/" + room_name).on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      childData = childSnapshot.val();
      if (childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;
        //Start of the code
        console.log(firebase_message_id);
        console.log(message_data);
        name = message_data['name'];
        message = message_data['message'];
        like = message_data['like'];
        name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
  
        row = name_with_tag + message_with_tag + like_button + span_with_tag;
 
        document.getElementById("output").innerHTML += row;
   //end of code
 }
});
});
}
getData();

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}

function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}