import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Preloader from "./components/Preloader/Preloader";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Tech from "./components/Tech/Tech";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import ProjectWeb from "./components/ProjectDetails/ProjectWeb";
import ProjectAIML from "./components/ProjectDetails/ProjectAIML";
import ProjectAPI from "./components/ProjectDetails/ProjectAPI";
import ProjectOther from "./components/ProjectDetails/ProjectOther";
import Certifications from "./components/Certifications/Certifications";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Chatbot from "./components/Chatbot/Chatbot";

function App() {
  return (
    <Router>
      <div className="App">
        <Preloader />
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <About />
                  <Tech />
                  <Resume />
                  <Projects />
                  <Certifications />
                  <Testimonials />
                  <Contact />
                  <Chatbot />
                </>
              }
            />
            <Route path="/projects/trend" element={<ProjectOther />} />
            <Route path="/projects/web" element={<ProjectWeb />} />
            <Route path="/projects/aiml" element={<ProjectAIML />} />
            <Route path="/projects/api" element={<ProjectAPI />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
