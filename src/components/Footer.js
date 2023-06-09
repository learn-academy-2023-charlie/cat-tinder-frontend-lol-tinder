import React from "react";
import { Navbar } from "reactstrap";
import eeriebg from "../assets/eeriebg.png";

const Footer = () => {
  const footerStyle = {
    backgroundImage: `url(${eeriebg})`, 
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100px",
    color: "white",
  };


  return (
    <>
      <Navbar className="my-2" color="info" fixed="bottom" style={footerStyle}>
        <span className="footer-title">&copy; Kyle &amp;&amp; Bea | 2023</span>
      </Navbar>
    </>
  );
};

export default Footer;
