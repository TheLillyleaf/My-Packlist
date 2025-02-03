import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Packlist from "./pages/packlist/index";
import Templates from "./pages/template/index";
import NewTemplate from "./pages/template/new";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/template'
          element={<Templates />}
        />
        <Route
          path='/packlist'
          element={<Packlist />}
        />

        <Route
          path='/template/new'
          element={<NewTemplate />}
        />
      </Routes>
    </Router>
  );
}

export default App;
