import FirebaseApp from "./firebaseApp";
import { getAuth } from "firebase/auth"

const auth = getAuth(FirebaseApp)

export default auth;