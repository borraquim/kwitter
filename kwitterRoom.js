
//ADICIONE SEUS LINKS FIREBASE

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

firebase.initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomName = childKey;
       console.log("Nome da Sala - " + roomName);
      row = "<div class='roomName' id="+roomName+" onclick='redirectToRoomName(this.id)' >#"+ roomName +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
