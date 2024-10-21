import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase.js";

const provider = new GoogleAuthProvider();

const signUpWithEmail = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        window.location.href = "/login";
        console.log(user);
        
    })
    .catch((error) => {
        const errorMessage = error.message;
        console.log("My Error: "+ errorMessage);
    });

}

const signInWithEmail = async (email, password) => {
  const userCredential  = await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location.href = "/";
    console.log(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log("My Error: "+ errorMessage);
      
  });
}

const signInWithGoogle = async () => {
    const token = await signInWithRedirect(auth, provider);
    if(token){
      window.location.href = "/";
    }
    else {
      alert("SOmething went wrong");
    }
}


export { signInWithGoogle, signUpWithEmail, signInWithEmail };