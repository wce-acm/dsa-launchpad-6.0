import React from "react";
import { IoMail } from "react-icons/io5";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import acmLogo from "../assets/images/acmlogo.png";
import "./footer.css"; // Import the mobile CSS

export default function Footer() {
  return (
    <footer
      className="w-full mt-8 text-white py-3 flex flex-col md:flex-row md:justify-between md:items-center gap-6 bg-black px-4 font-plusjakarta"
    >
      {/* ACM Logo and Copyright */}
      <div className="footer-logo md:flex md:items-center gap-4" style={{ marginRight: "200px" }}>
        <img src={acmLogo} alt="ACM Logo" className="w-14 md:w-20" />
        <div className="flex flex-col text-center md:text-left text-base md:text-lg leading-tight">
          <span className="font-medium">
            Copyright ©2025. All rights reserved by
          </span>
          <span className="font-medium">WCE ACM Student Chapter</span>
        </div>
      </div>

      {/* Connect Us / Social Media */}
      <div className="footer-social flex flex-col items-center md:items-end gap-2">
      <h2
  className="text-blue-200 text-base md:text-lg leading-tight mb-1 mr-4" style={{fontSize:"25px", marginRight: "15px"}}
>
  Connect Us
</h2>

        <div className="flex flex-wrap justify-center md:justify-end gap-2">
          <a href="mailto:wceacmsc@gmail.com" className="p-2 bg-zinc-200 rounded-full hover:bg-sky-300 transition" target="_blank" rel="noopener noreferrer">
            <IoMail size={18} className="text-black" />
          </a>
          <a href="https://www.linkedin.com/company/wce-acm-student-chapter/mycompany/" className="p-2 bg-zinc-200 rounded-full hover:bg-sky-300 transition" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={18} className="text-black" />
          </a>
          <a href="https://www.instagram.com/wce_acm/" className="p-2 bg-zinc-200 rounded-full hover:bg-sky-300 transition" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={18} className="text-black" />
          </a>
          <a href="https://www.youtube.com/@wceacm" className="p-2 bg-zinc-200 rounded-full hover:bg-sky-300 transition" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={18} className="text-black" />
          </a>
         
        </div>
      </div>
    </footer>
  );
}
