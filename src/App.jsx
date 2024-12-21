import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Api from "./contact/Api";
import Registration from "./contact/Registration";
import Navigation from "./navi/Navigation";
import Gallery from "./Gallery/Gallery";
import Footer from "./Footer/Footer";
import Testimonials from "./testimonials/Testimonials";
import Service from "./service/Service";
import About from "./About/About";
import Home from "./Home/Home";
import Contact from "./contact/Contact";
import Login from "./components/Login";
import TestimonialAdmin from "./admin/TestimonialAdmin";
import GalleryAdmin from "./admin/GalleryAdmin";
import HomeTeamAdmin from "./admin/HomeTeamAdmin";
import ServiceAdmin from "./admin/ServiceAdmin";
import Blog from "./Blog/Blog";
import Userdata from "./admin/Userdata"
import Registerform  from "./components/Registration"

function ProtectedRoute({ children, isAuthenticated }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <>
      <div className="mb-0">
        <Navigation />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/register" element={<Registerform/>} />
            
            <Route
              path="/login"
              element={
                <Login
                  onLogin={handleLogin}
                  isAuthenticated={isAuthenticated}
                  onLogout={handleLogout}
                />
              }
            />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contacts" element={<Contact />} />

            {/* Admin Routes */}
            <Route
              path="/blog/*"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Routes>
                    <Route path="gallery" element={<GalleryAdmin />} />
                    <Route path="homeTeam" element={<HomeTeamAdmin />} />
                    <Route path="service" element={<ServiceAdmin />} />
                    <Route path="testimonial" element={<TestimonialAdmin />} />
                    <Route path ="userdata" element={<Userdata />}/>
                  </Routes>
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
