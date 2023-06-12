import React from "react";
import { Link } from "react-router-dom";
import another from "../assets/another.png";

const Home = () => {
  const homeStyle = {
    backgroundImage: `url(${another})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
    padding: "0",
    marginBottom: "50px",
  };

  const titleStyle = {
    fontFamily: "'BeaufortforLOL-Italic', sans-serif",
    fontSize: "3rem",
    marginBottom: "20px",
    color: "#fff",
  };

  const buttonStyle = {
    fontFamily: "'BeaufortforLOL-Italic', sans-serif",
    fontSize: "1.5rem",
    padding: "10px 20px",
    backgroundColor: "transparent",
    border: "2px solid #fff",
    color: "#fff",
    textDecoration: "none",
    cursor: "pointer",
  };

  return (
    <div style={homeStyle} data-testid="home-div">
      <h1 className="homepage-title" style={titleStyle}>
        Welcome to League of Legends Tinder
      </h1>
      <Link to="/champIndex">
        <button className="meet-champions-button" style={buttonStyle}>
          Meet the Champions
        </button>
      </Link>
    </div>
  );
};

export default Home;
