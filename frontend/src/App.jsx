import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import LikesPage from "./pages/LikesPage";
import ExplorePage from "./pages/ExplorePage";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="max-w-5x1 my-5 text-white mx-auto transition-all duration-300 flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/likes" element={<LikesPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
