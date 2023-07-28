
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDYnQdF_ewTV7bV7CxcJLEtUCGJoM98Zls",
      authDomain: "kwitter-class-project-94.firebaseapp.com",
      databaseURL: "https://kwitter-class-project-94-default-rtdb.firebaseio.com",
      projectId: "kwitter-class-project-94",
      storageBucket: "kwitter-class-project-94.appspot.com",
      messagingSenderId: "64198826347",
      appId: "1:64198826347:web:bc23977415855d1bb9942e"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome, "+ user_name + "!";
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html" 
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirroom(this.id)'>#" + Room_names +"</div> <hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function redirroom(name) {
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}