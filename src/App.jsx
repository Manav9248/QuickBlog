import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import Logout from "./components/Logout";


function App() {
  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/admin/logout" element={<Logout/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
