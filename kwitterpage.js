//LINKS FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyDFwUi6atyDNFQYQy2dXgnOcwRyKKxrbSc",
    authDomain: "kuiter-8dca0.firebaseapp.com",
    databaseURL: "https://kuiter-8dca0-default-rtdb.firebaseio.com",
    projectId: "kuiter-8dca0",
    storageBucket: "kuiter-8dca0.appspot.com",
    messagingSenderId: "882850165571",
    appId: "1:882850165571:web:dffd62f9cd6a32bc9c35f6"
  };
  firebase.initializeApp(firebaseConfig
    )
    var userName = localStorage.getItem('userName')
    var roomName = localStorage.getItem('roomName')
function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebaseMessageId = childKey;
    messageData = childData;
//Início do código

//Fim do código
 } });  }); }
getData();
function send (){
    var msg = document.getElementById('msg').value
firebase.database().ref(roomName).push ({
nome : userName ,
mensagem : msg ,
like: 0 
})
document.getElementById('msg').value = ''
}