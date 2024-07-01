import logo from "../assets/srlogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoUpwork } from "react-icons/bi";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="mx-2 h-10" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl cursor-pointer">
        <FaLinkedin
          className="text-white"
          onClick={() =>
            window.open("https://www.linkedin.com/in/sadaif-rizvi-a66621139/")
          }
        />
        <FaGithub
          className="text-white"
          onClick={() => window.open("https://github.com/sadaif")}
        />
        {/* <BiLogoUpwork
          className="text-white"
          onClick={() =>
            window.open("https://www.upwork.com/freelancers/sadaif")
          }
        /> */}
        <FaSquareXTwitter
          className="text-white"
          onClick={() => window.open("https://twitter.com/sadaifrizvi")}
        />
      </div>
    </nav>
  );
};
export default Navbar;
