import { db } from "../../firebase";
import { addDoc, doc, collection, setDoc } from "firebase/firestore";


// const collectionRef = collection


export const addUserDocWithId = async (id, email) => {
  try {
    await setDoc(doc(db, "users", id), {
      email: email
    })
    localStorage.setItem("userId", JSON.stringify(id));
    window.location.href = "/login";
  } catch (error) {
    alert(error);
  }
}

export const addCategoryWithUserId = async (id, title) => {
  try {
    const colRef = collection(db, "users", id, "categories");
    await addDoc(colRef, {
      title: title
    })
    window.location.reload();
  } catch (error) {
    alert(error);
  }
}

export const addBudgetWithUserId = async (id, budget) => {
  try {
    const colRef = collection(db, "users", id, "budgets");
    await addDoc(colRef, budget)
    window.location.reload();
  } catch (error) {
    alert(error);
  }
}

// export const getAllCategories = async () => {
//             const res = db.
// }



