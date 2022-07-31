import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import { Login } from "./components/loginComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
