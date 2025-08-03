
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/themeContext";
import Home from "./pages/home";
import AboutUs from "./pages/about";
import Contact from "./pages/contact";
import Layout from "./components/check";
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
