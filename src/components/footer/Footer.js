import React from "react";
import '../footer/footer.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'


const Footer = () => (
    <footer>
  <div className="footer">
    <a href="https://github.com/Chigael" ><FaGithub className='git' /> </a> <a href="https://www.linkedin.com/in/abigael-anyanwu/"><FaLinkedinIn className='linked' /></a>
  </div>
  
  <div className='container py-2 footer-bot'>
  <div className='mr-md-auto text-center'>
    <div className='copyright'>
      Copyright &copy; 2021 -{' '}
      <strong>
        <span>Abigael Anyanwu</span>
      </strong>
      . All Rights Reserved
    </div>
  </div>
</div>
</footer>
);

export default Footer;