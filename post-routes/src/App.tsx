import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PostsList from './components/PostsList';
import PostDetails from './components/PostDetails';
import EditPost from './components/EditPost';

const App: React.FC = () => {
  return (
      <Router>
        <nav>
          <Link to="/">Posts</Link>
        </nav>
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/posts/:id/edit" element={<EditPost />} />
        </Routes>
      </Router>
  );
};

export default App;
