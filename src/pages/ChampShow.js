import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

const ChampShow = ({ champs }) => {
  const { id } = useParams();

  let currentChamp = champs?.find((champ) => champ.id === +id);

  return (
    <main className="card">
      {currentChamp && (
        <Card style={{ width: "18rem" }}>
          <CardBody>
            <CardTitle tag="h5">{currentChamp.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {currentChamp.age}
            </CardSubtitle>
          </CardBody>
          <img
            alt={`image of ${currentChamp.name} `}
            src={currentChamp.image}
            width="100%"
          />
          <CardBody>
            <CardText>{currentChamp.ability}</CardText>
          </CardBody>
        </Card>
      )}
    </main>
  );
};

export default ChampShow;
