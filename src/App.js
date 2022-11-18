import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./components/About";
import SocialMedia from "./components/SocialMedia";
import PageLayout from "./layout/PageLayout";
import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/about" element={<About />} />
          <Route path="/socialmedia" element={<SocialMedia />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
