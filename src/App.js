import { Routes, Route } from "react-router-dom";
import Admins from "./components/Dashboard/Admins";
import Dashboard from "./components/Dashboard/Dashboard";
import Students from "./components/Dashboard/Students";
import Navbar from "./components/Shared/Navbar";

function App() {
  return (
    <>
        <Navbar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="adminDashboard" element={<Admins />} />
            <Route path="studentDashboard" element={<Students />} />
          </Routes>
        </Navbar>
    </>
  );
}

export default App;
