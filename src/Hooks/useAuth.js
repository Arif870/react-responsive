import { useContext } from "react";
import { MyContext } from "../context/AuthProvider";

export default function useAuth() {
  return useContext(MyContext);
}
