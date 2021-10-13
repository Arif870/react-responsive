import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";

export default function firebaseInitialize() {
  return initializeApp(firebaseConfig);
}
