var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyCvTdQ8L8HSr7cWigV5WADBLtFyvqy1M9c",
    authDomain: "mercado-em-casa-306815.firebaseapp.com",
    databaseURL: "https://mercado-em-casa-306815-default-rtdb.firebaseio.com",
    projectId: "mercado-em-casa-306815",
    storageBucket: "mercado-em-casa-306815.appspot.com",
    messagingSenderId: "251036632295",
    appId: "1:251036632295:web:7d14285085bbe1c5fb8e42",
    measurementId: "G-3K7MM04DRT"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


