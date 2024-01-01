// src/components/Slider.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./Sidebar.css"; // Slider için özel stiller

const Sidebar = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // MongoDB'ye veri gönderme
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password,
      });

      console.log(response.data);
    } catch (error) {
      console.error('API çağrısı sırasında hata oluştu:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Sidebar;
