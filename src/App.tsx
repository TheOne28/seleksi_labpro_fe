import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/Signup";
import { Profile } from "./pages/customer/Profile";
import './App.css'

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8" >
        <Router>
          <Routes>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
