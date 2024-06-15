import logo from "../assets/shibinLogo1.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
  <nav className="mb-4 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center lg:pl-20">
        <a href="#"><img className="mx-2 w-10" src={logo} alt="logo" /></a>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl lg:pr-10">
    <a href="https://www.linkedin.com/in/shibin-mohammed" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ShibinMohammed" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://x.com/Shibin_Mohmmed" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a>
        <a href="https://www.instagram.com/shibin_mohmmed" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
    </div>
  </nav>
  );
};

export default Navbar;