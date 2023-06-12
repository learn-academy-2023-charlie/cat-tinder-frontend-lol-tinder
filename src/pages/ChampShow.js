import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { useParams, Link, NavLink } from "react-router-dom";

const ChampShow = ({ champs }) => {
  const { id } = useParams();
  let currentChamp = champs?.find((champ) => champ.id === +id);

  return (
    <div id="page">
      {currentChamp ? (
        <div className="champ-container">
          <Card className="main-card">
            <CardImg
              top
              src={currentChamp.image}
              alt={currentChamp.name}
              className="img"
            />
            <CardBody>
              <CardTitle className="tit">{currentChamp.name}</CardTitle>
              <CardSubtitle className="subTit">{`${currentChamp.age} ${currentChamp.gender}`}</CardSubtitle>
            </CardBody>
          </Card>
          <Card className="ability-card">
            <CardBody>
              <div className="ability">Ability: {currentChamp.ability}</div>
            </CardBody>
          </Card>
        </div>
      ) : (
        <p>No Champ found</p>
      )}
      <Link to="/champindex">
        <Button className="return-button">Return</Button>
      </Link>
      <NavLink className="edtBtn" to={`/champ/${id}/edit`}>
        <Button>Edit Character</Button>
      </NavLink>
    </div>
  );
};

export default ChampShow;
