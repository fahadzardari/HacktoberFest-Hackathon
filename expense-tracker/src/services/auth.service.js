import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase.js";
import { addUserDocWithId } from "./firebase.service.js";
const provider = new GoogleAuthProvider();

const signUpWithEmail = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      addUserDocWithId(user.uid, user.email);
      console.log(user);

    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log("My Error: " + errorMessage);
    });

}

const signInWithEmail = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      localStorage.setItem("userId" , JSON.stringify(user.uid));
      window.location.href = "/";
      console.log(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log("My Error: " + errorMessage);

    });
}

const signInWithGoogle = async () => {
  const token = await signInWithRedirect(auth, provider);
  if (token) {
    window.location.href = "/";
  }
  else {
    alert("SOmething went wrong");
  }
}


const signOut = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    window.location.href = "/";
  }).catch((error) => {
    // An error happened.
    alert("something went wrong ")
  });
}




export { signInWithGoogle, signUpWithEmail, signInWithEmail , signOut };