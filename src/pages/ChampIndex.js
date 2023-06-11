import React from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import championsData from "../championsData.js";
import another from "../assets/another.png";
import "bootstrap/dist/css/bootstrap.css";


import '../App.css';

const ChampIndex = () => {
  const indexStyle = {
    backgroundImage: `url(${another})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0",
  };

  const cardStyle = {
    width: "27rem",
    height: "24rem",
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "15rem",
    marginRight: "15rem",
    textAlign: "center",
    cursor: "pointer",
    border: "none",
  };

  const championImageStyle = {
    maxWidth: "50em",
    maxHeight: "50em",
    objectFit: "contain",
  };

  const championNameStyle = {
    font: "'BeaufortforLOL-Italic', sans-serif",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5rem",
    marginBottom: "10em",
  };

  const navBtnStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "42em",
    color: "white",
    zIndex: "9999",
  };

  return (
    <>
      <main>
        <p className="invite">Meet the Champs</p>
        <div className="champ-index-container" style={indexStyle}>
          {championsData.map((champion, index) => (
            <Link to={`/champShow/${champion.id}`} key={index}>
              <Card className="champ-card" style={cardStyle}>
                <div>
                  <img
                    className="champ-image"
                    alt={`profile of a champ named ${champion.name}`}
                    src={champion.image}
                    style={championImageStyle}
                  />
                </div>
                <CardBody>
                  <CardTitle style={championNameStyle}>
                    {champion.name}
                  </CardTitle>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
        <NavLink className="navBtn" to="/champNew" style={navBtnStyle}>
          <Button>Add a Character</Button>
        </NavLink>
      </main>
    </>
  );
};

export default ChampIndex;
