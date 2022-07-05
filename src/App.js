import { Routes, Route } from "react-router-dom";
import Admins from "./components/Dashboard/Admins";
import Dashboard from "./components/Dashboard/Dashboard";
import Students from "./components/Dashboard/Students";
import Header from "./components/Shared/Header";
import Navbar from "./components/Shared/Navbar";
import SignIn from "./components/Shared/SignIn";
import SignUp from "./components/Shared/SignUp";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import Profile from "./components/Profile/Profile";

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      
      <Navbar>
      <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="adminDashboard" element={<Admins />} />
          <Route path="studentDashboard" element={<Students />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path={`userData/:${user?.uid}`} element={<Profile />} />
        </Routes>
      </Navbar>
      <ToastContainer />
    </>
  );
}

export default App;
