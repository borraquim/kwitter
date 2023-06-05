//LINKS FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyBe1447TFkGKAvUFCQQ-ak7V527ti6t91w",
    authDomain: "vamo-comeca-190263.firebaseapp.com",
    databaseURL: "https://vamo-comeca-190263-default-rtdb.firebaseio.com",
    projectId: "vamo-comeca-190263",
    storageBucket: "vamo-comeca-190263.appspot.com",
    messagingSenderId: "32319945926",
    appId: "1:32319945926:web:4c28f7f7de8ed94ebfebc7",
    measurementId: "G-JPEJ3SMWHP"
  };
  
  function send()
  {
      msg=document.getElementById("msg").value;
  firebase.database().ref(roomName).push({
      name:userName,
      message:msg,
      like:0
  });
  document.getElementById("msg").value="";
  }

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebaseMessageId = childKey;
    messageData = childData;
//Início do código
console.log(firebaseMessageId);
console.log(messageData);
name = messageDate['name'];
message = messageData['message'];
like = messageData['like'];
nameWithTag = "<h4> "+ name + "img class='user_tick' src='tick.png'></h4>";
likeButton ="<button class='btn btn-warning'id="+firebaseMessageId+" value-"+like+" onclick-'updatelike(this.id)'>";
spanWithTag - "<span class-'glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row - nameWithTag +messageWithTag +likeButton + spanWithTag;
document.getElementById("output").innerHTML +- row;

//Fim do código
 } });  }); }
getData();

function updateLike(messageId)
{
    console.log("botão like pressionado -" + messageId);
    button_id = messageId;
    likes = document.getElementById(button_id).value;
    updatedLikes = Number(likes) + 1;
    console.log(updatedLikes);

    firebase.database().ref(roomName).child(messageId).update({
        like : updatedLikes
    });
}

function logout(){

    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");
    window.location.replace("index.html");
}