import {auth} from "../firebase";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
} : {
  children: React.ReactNode;
}) {

  const user = auth.currentUser; //firebase에 유저 정보를 요청
  //유저가 로그인했는지 여부를 알려줌 (로그인유저 정보나 null을 넘겨줌)
  if(user === null){ 
    return <Navigate to="/login" />;
  }
  return children;
}