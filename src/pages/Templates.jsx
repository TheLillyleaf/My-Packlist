import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Templates() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setTemplates(data));
  });

  console.log(first);

  return (
    <div>
      <h1>Templates</h1>

      <p>Create custom templates for Packlists </p>
    </div>
  );
}

export default Templates;
