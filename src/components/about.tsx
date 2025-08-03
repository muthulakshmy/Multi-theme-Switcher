import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/themeContext";
import AboutUsBanner from "../assets/about2.jpg";

const AboutUs: React.FC = () => {
  const { theme } = useTheme(); // Use your theme context

  return (
    <div
      className={`${
        theme === "theme2"
          ? "bg-[#1e1e1e] text-white"
          : "bg-white text-gray-900"
      } h-screen w-full`}
    >
     {/* Hero Banner Section */}
      <div
        className="w-full bg-cover bg-center md:h-80 flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: `url(${AboutUsBanner})` }}
      >
        <div className=" inset-0 bg-black opacity-40"></div>
        <h1 className="z-10 text-4xl md:text-5xl font-bold mb-2 text-center drop-shadow-lg">
   ABOUT US 
        </h1>
 
        <p className=" z-10 text-lg md:text-xl text-center">
       
          <Link to="/" className="hover:underline">
            HOME
          </Link>{" "}
          / ABOUT US 
        </p>
    
      </div>
      <h1 className="z-10 text-xl md:text-2xl font-bold mb-2 text-center drop-shadow-lg mt-10">
 MULTI STORE
      </h1>
      
      <p className="z-10 text-center text-base mb-4  drop-shadow-lg">
        We are a multi-store brand committed to delivering quality
        products and reliable service across all our locations. With multiple
        stores operating under one system, we provide a seamless shopping
        experience—whether you're visiting us in person or online. Each store is
        uniquely tailored to serve its local community while maintaining the
        same standards, ensuring consistency, convenience, and customer
        satisfaction everywhere. 
      </p>
   
    </div>
  );
};

export default AboutUs;
