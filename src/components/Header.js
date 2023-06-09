import React from "react";
import { Navbar } from "reactstrap";
import eeriebg from "../assets/eeriebg.png";
import logo from "../assets/logo.png";

const Header = () => {
  const headerStyle = {
    backgroundImage: `url(${eeriebg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", 
    padding: "0", 
  };

  const logoStyle = {
    alignItems: "center",
    height: "60px",
  };

  return (
    <>
      <Navbar className="my-2" color="info" style={headerStyle}>
        <div>
          <a href="/">
            <img src={logo} alt="Logo" height="50" style={logoStyle} />
          </a>
        </div>
        <div>
          <span className="navbar-title">League of Legends Tinder</span>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
