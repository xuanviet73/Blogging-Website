let firebaseConfig = {
    apiKey: "AIzaSyBtsSlaV6XvskJCJ33T6VVK_QYOtuanZRE",
    authDomain: "blogging-website-bd418.firebaseapp.com",
    projectId: "blogging-website-bd418",
    storageBucket: "blogging-website-bd418.appspot.com",
    messagingSenderId: "304307877981",
    appId: "1:304307877981:web:9cba32c24b6da806ba75b4",
  };
  
  // Correct the identifier to 'firebase'
  firebase.initializeApp(firebaseConfig);
  
  let db = firebase.firestore();
  