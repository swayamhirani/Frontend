import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("");

  // ✅ YOUR BACKEND URL
  const BACKEND_URL = "https://backend-h7hl.onrender.com";

  // ✅ GET request
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/message`)
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.log("Error:", err));
  }, []);

  // ✅ POST request
  const handleSubmit = () => {
    if (!name || !email) {
      alert("Please enter name and email");
      return;
    }

    axios
      .post(`${BACKEND_URL}/submit`, { name, email })
      .then((res) => setResponse(res.data.msg))
      .catch((err) => console.log("Error:", err));
  };

  return (
    <div className="container">
      <h1>Simple Web App</h1>

      <div className="card">
        <h2>Message from Backend</h2>
        <p>{message}</p>
      </div>

      <div className="card">
        <h2>Submit Form</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleSubmit}>Submit</button>

        <p className="response">{response}</p>
      </div>
    </div>
  );
}

export default App;