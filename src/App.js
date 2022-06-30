import { Routes, Route } from "react-router-dom";
import Admins from "./components/Dashboard/Admins";
import Dashboard from "./components/Dashboard/Dashboard";
import Students from "./components/Dashboard/Students";
import Header from "./components/Shared/Header";
import Navbar from "./components/Shared/Navbar";
import SignUp from "./components/Shared/SignUp";

function App() {
  return (
    <>
      <Header />
      <Navbar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="adminDashboard" element={<Admins />} />
          <Route path="studentDashboard" element={<Students />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
