import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Jobs from "./components/Jobs/Jobs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/jobs" element={<Jobs></Jobs>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
