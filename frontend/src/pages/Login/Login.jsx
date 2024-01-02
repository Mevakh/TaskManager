import { useState } from "react";
import React from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // MongoDB'ye veri gönderme
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      console.log(response.data);
    } catch (error) {
      console.error("API çağrısı sırasında hata oluştu:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid place-items-center h-screen">
        <div className="flex flex-col text-center p-16 gap-3">
          <div className="flex flex-col gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 raunded-sm"
            />
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2"
            />
          </div>
          <div>
            <button type="submit" className="">
              Giriş yap
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
