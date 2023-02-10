import './assets/cssreset.css'
import './assets/bootstrap-grid.css'
import './App.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Home from './Pages/Home/Home';
import Blog from "./Pages/Blog/Blog";
import Header from "./Components/Header/Header";
import Blogs from "./Pages/Blogs/Blogs";
import AddBlog from "./Pages/AddBlog/AddBlog";
import EditBlog from './Pages/EditBlog/EditBlog';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/addBlog/" element={<AddBlog />} />
          <Route path="/editblog/:id" element={<EditBlog />} />
          
        </Routes>
      </QueryClientProvider>
    </>
  );
};

export default App;
