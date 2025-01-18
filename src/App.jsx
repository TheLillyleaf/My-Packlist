import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000")
      .then((res) => {
        setMessage(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  });
  return (
    <div>
      <h1>Packlist</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
