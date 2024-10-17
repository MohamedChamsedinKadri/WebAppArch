import React from 'react';
import {Routes, Route, NavLink, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Posts from "./pages/Posts";
import PostLists from "./components/PostList";
import PostDetails from "./components/PostDetails";


function App() {
  return (
      <>
          <nav>
              <NavLink to={"/"} style={{margin: 5}} className={(isActive)=> isActive? 'highlighted': '' }> Home</NavLink>
              <NavLink to={"/about"} style={{margin: 5}} className={(isActive)=> isActive? 'highlighted': ''}> About</NavLink>
              <NavLink to={"/posts"} > Posts</NavLink>
          </nav>

          <Routes>
              <Route path="/" element={<Navigate to="/home" />}/>
              <Route path="/home" element={<Home />}/><Route/>
              <Route path="/about" element={<About />}/>
              <Route path="/posts" element={<Posts />}/>
                    <Route index element={<PostLists />}/>
                    <Route path={":slug"} element={<PostDetails />}/>
              <Route/>
              <Route path="*" element={<PageNotFound />}/>

          </Routes>
      </>

  );
}

export default App;
