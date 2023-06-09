import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import championsData from "../championsData.js";

const ChampShow = ({ champs }) => {
  const { id } = useParams();

  let currentChamp = champs?.find((champ) => champ.id === +id);

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
  };

  const championImageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  };

  const championNameStyle = {
    font: "'BeaufortforLOL-Italic', sans-serif",
    position: "relative",
    zIndex: 1,
    top: 0,
    left: 0,
    width: "100%",
    padding: "0.5rem",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "white",
  };

  return (
    <div>
      {currentChamp && (
        <Card className="champ-card" style={cardStyle}>
          <div>
            <h1 style={{ marginBottom: "1rem" }}>{currentChamp.name}</h1>
            <img
              className="champ-image"
              alt={`profile of a champ named ${currentChamp.name}`}
              src={currentChamp.image}
              style={championImageStyle}
            />
          </div>
          <CardBody>
            <CardText>Age: {currentChamp.age}</CardText>
            <CardText>Ability: {currentChamp.ability}</CardText>
            <Button tag={Link} to="/champIndex" color="primary">
              Back to Index
            </Button>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default ChampShow;
