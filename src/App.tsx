
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/themeContext";
import Home from "./pages/home";
import AboutUs from "./components/about";
import Contact from "./components/contact";
import Layout from "./components/Layout";
import "./styles/theme.css";
const App: React.FC = () => {
  
  return (
 
      <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
