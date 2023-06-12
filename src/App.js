import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChampIndex from "./pages/ChampIndex";
import ChampShow from "./pages/ChampShow";
import ChampNew from "./pages/ChampNew";
import ChampEdit from "./pages/ChampEdit";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./App.css";

const App = () => {
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    readChamp();
  }, []);

const createChamp = (champ) => {
  fetch("http://localhost:3000/champs", {
    body: JSON.stringify(champ), // Convert champ to a JSON string
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
    .then((response) => response.json())
    .then((payload) => readChamp())
    .catch((errors) => console.log("Champ create errors:", errors));
};

  const deleteChamp = (id) => {
    fetch(`http://localhost:3000/champs/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((payload) => readChamp())
      .catch((errors) => console.log("Champ delete errors:", errors));
  };

  const readChamp = () => {
    fetch("http://localhost:3000/champs")
      .then((response) => response.json())
      .then((payload) => {
        setChampions(payload);
      })
      .catch((error) => console.log(error));
  };

  const updateChamp = (champ, id) => {
    fetch(`http://localhost:3000/champs/${id}`, {
      // converting an object to a string
      body: JSON.stringify(champ),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json",
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((payload) => readChamp())
      .catch((errors) => console.log("Champ update errors:", errors));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/champIndex"
          element={<ChampIndex champions={champions} />}
        />
        <Route
          path="/champShow/:id"
          element={<ChampShow champions={champions} />}
        />
        <Route
          path="/champNew"
          element={<ChampNew createChamp={createChamp} />}
        />
        <Route
          path="/champ/:id/Edit"
          element={
            <ChampEdit champions={champions} updateChamp={updateChamp} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
