let firebaseConfig = {
    //Nhập thông tin đăng nhập firebase của bạn
  };
  
  // Correct the identifier to 'firebase'
  firebase.initializeApp(firebaseConfig);
  
  let db = firebase.firestore();
  