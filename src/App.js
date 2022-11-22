import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About.js";
import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";
import SocialMedia from "./components/SocialMedia.js";
import PageLayout from "./layout/PageLayout.js";
import "./App.scss";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PageLayout />}>
          <Route element={<AllPosts />} path="/" exact />
          <Route element={<OnePost />} path="/:slug" />
          <Route element={<About />} path="/about" />
          <Route element={<SocialMedia />} path="/socialmedia" />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
