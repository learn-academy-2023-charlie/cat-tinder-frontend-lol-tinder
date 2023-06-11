import React, { useState } from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import { Link } from "react-router-dom";
import championsData from "../championsData.js";
import another from "../assets/another.png";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import ChampNew from "./ChampNew";

const ChampIndex = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const indexStyle = {
    backgroundImage: `url(${another})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "calc(100vh - 2em)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1em",
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

  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1em",
    color: "white",
    backgroundColor: "blue",
    padding: "1em 2em",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    cursor: "pointer",
  };

  const handleCharacterAdded = (newCharacter) => {
    // Update the championsData array with the new character
    championsData.push(newCharacter);
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
          <Button onClick={toggleModal} style={buttonStyle}>
            Add a Character
          </Button>
        </div>
        {modalOpen && (
          <ChampNew
            toggleModal={toggleModal}
            onCharacterAdded={handleCharacterAdded}
          />
        )}
      </main>
    </>
  );
};

export default ChampIndex;
