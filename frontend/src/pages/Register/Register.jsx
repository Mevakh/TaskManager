import { useState } from "react";
import React from "react";
import axios from "axios";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleRegister = async () => {
      try {
        const response = await axios.post('http://localhost:3000/register', { email, password });
  
        if (response.status === 201) {
          console.log('Kayıt Başarılı');
          // İstediğiniz yönlendirmeyi veya başka bir işlemi burada gerçekleştirebilirsiniz.
        } else {
          console.error('Kayıt Başarısız');
        }
      } catch (error) {
        console.error('Error during registration:', error);
      }
    };
  
    return (
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleRegister}>Register</button>
      </div>
    );
  };
  
  export default Register;