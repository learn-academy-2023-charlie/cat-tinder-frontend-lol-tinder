import React from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import { Link } from "react-router-dom";
import championsData from "../championsData.js";
import another from "../assets/another.png";

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
    width: "14rem",
    height: "24rem",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    textAlign: "center",
    cursor: "pointer",
  };

  const championImageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  };

  const championNameStyle = {
    font: "'BeaufortforLOL-Italic', sans-serif",
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    padding: "0.5rem",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "white",
  };

  return (
    <>
      <main>
        <p>Meet the Champs</p>
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
      </main>
    </>
  );
};

export default ChampIndex;
