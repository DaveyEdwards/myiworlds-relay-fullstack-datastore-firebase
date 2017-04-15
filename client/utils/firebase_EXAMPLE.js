// TODO: Make writeup showing how to get yours for your project
let flagInitialized = false;
export default function () {
  if (!flagInitialized) {
    flagInitialized = true;
    window.firebase.initializeApp({
      apiKey: "AIzbSVBkp_NH1xIKxCtu3yJc0v49FA4_x9rqbHw",
      authDomain: "PROJECTNAME-PROJECTID.firebaseapp.com",
      databaseURL: "https://PROJECTNAME-PROJECTID.firebaseio.com",
      projectId: "PROJECTNAME-PROJECTID",
      storageBucket: "PROJECTNAME-PROJECTID.appspot.com",
      messagingSenderId: "563810458615"
    });
  }
}
