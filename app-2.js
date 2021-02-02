var firebaseConfig = {
  apiKey: "AIzaSyAcaysXohOtStvve1nJ-lfPvnYKrbWoc3M",
  authDomain: "nggallery-dc68c.firebaseapp.com",
  databaseURL: "https://nggallery-dc68c.firebaseio.com",
  projectId: "nggallery-dc68c",
  storageBucket: "nggallery-dc68c.appspot.com",
  messagingSenderId: "789752125493",
  appId: "1:789752125493:web:9709842362fa93b823797c",
  measurementId: "G-77L8DMQSLX"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

 console.log(auth)



let signOutButton = document.getElementById("signout")
signOutButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()
  console.log("clicked")
  
  auth.signOut()
  alert("Signed Out")
  window.location = "index.html";
})