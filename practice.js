
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




  function addUser()
  {
    userName=document.getElementById("userName").value;
    firebase.database().ref("/").child(userName).update({
        purpose : "adicionar usuario"
    });
  }