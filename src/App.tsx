import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/Signup";
import { Profile as ProfileCustomer} from "./pages/customer/Profile";
import { Profile as ProfileAdmin} from "./pages/admin/Profile";
import { Transfer } from "./pages/customer/Transfer";
import { Mutasi } from "./pages/customer/Mutasi";
import { RiwayatMutasi } from "./pages/customer/RiwayatMutasi";
import { RiwayatTransfer } from "./pages/customer/RiwayatTransfer";
import './App.css'

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8" >
        <Router>
          <Routes>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/profile" element={<ProfileCustomer/>}></Route>
            <Route path="/admin" element={<ProfileAdmin/>}></Route>
            <Route path="/transfer" element={<Transfer/>}></Route>
            <Route path="/mutasi" element={<Mutasi/>}></Route>
            <Route path="/histmutasi" element={<RiwayatMutasi/>}></Route>
            <Route path="/histtransfer" element={<RiwayatTransfer/>}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
