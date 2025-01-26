import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Packlist from "./pages/Packlist";
import Templates from "./pages/Templates";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/templates'
          element={<Templates />}
        />
        <Route
          path='/packlist'
          element={<Packlist />}
        />
      </Routes>
    </Router>
  );
}

export default App;
