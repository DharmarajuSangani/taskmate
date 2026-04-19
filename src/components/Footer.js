import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">
          <h3>TaskMate</h3>
          <p>Organize your tasks efficiently 🚀</p>
        </div>

        <div className="footer-center">
          <p>© 2026 TaskMate. All rights reserved.</p>
        </div>

        <div className="footer-right">
          <FaGithub className="social-icon" />
          <FaLinkedin className="social-icon" />
          <FaTwitter className="social-icon" />
        </div>

      </div>

    </footer>
  );
}

