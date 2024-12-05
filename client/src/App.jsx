import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUp } from "./components/SignUp/SignUp";
import { Login } from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
