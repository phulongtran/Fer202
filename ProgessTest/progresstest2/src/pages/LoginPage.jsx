import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { loginUser } from "../services/api";

function LoginPage(){

  const navigate = useNavigate();

  const handleLogin = async (username,password)=>{

    const res = await loginUser(username,password);

    if(res.data.length > 0){

      localStorage.setItem(
        "user",
        JSON.stringify(res.data[0])
      );

      navigate("/home");

    }else{
      alert("Invalid account");
    }
  }

  return <LoginForm onLogin={handleLogin}/>;
}

export default LoginPage;