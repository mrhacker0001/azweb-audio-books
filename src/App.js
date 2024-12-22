import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./Components/Signin/Signin";
import Home from "./Components/Home/Home";
import Category from "./Components/Categories/Category";
import Profile from "./Components/Profile/Profile";
import Novel from './Components/Categories/Novel'
import Playaudio from "./Components/Categories/Playaudio";
import Poetry from "./Components/Categories/Poetry";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Novel" element={<Novel />} />
        <Route path="/Poetry" element={<Poetry />} />
        <Route path="/Playaudio" element={<Playaudio />} />
      </Routes>
    </div>
  );
}

export default App;
