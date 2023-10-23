import React, { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { user,setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("i am clicked")
    setUser({ userName, password });
    console.log(user)
  };

  return (
    <div>
      <input
        type="text"
        placeholder="UserName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
