import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";


export const initializeLogin = () => {
  !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();
};

export const handleGoogleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      const { displayName, email, photoURL } = result.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
        success: true,
      };
      return signedInUser;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;

      console.log(errorCode, errorMessage, email, credential);
    });
};

export const handleSignOut = () => {
    return firebase
      .auth()
      .signOut()
      .then((res) => {
        const signedOutUser = {
          isSignedIn: false,
          name: "",
          email: "",
          error: res.error,
          photo: "",
          success: false,
        };
        return signedOutUser;
      })
      .catch((error) => {
        console.log(error);
        console.log(error.massage);
      });
  };