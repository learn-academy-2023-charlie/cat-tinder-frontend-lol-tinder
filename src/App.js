import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChampIndex from "./pages/ChampIndex";
import ChampShow from "./pages/ChampShow";
import ChampNew from "./pages/ChampNew";
import ChampEdit from "./pages/ChampEdit";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import championsData from "./championsData";
import "./App.css";

const App = () => {
  const [champions, setChampions] = useState(championsData);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/champIndex"
          element={<ChampIndex championsData={champions} />}
        />

        <Route
          path="/champShow/:id"
          element={<ChampShow champs={champions} />}
        />
        <Route path="/champNew" element={<ChampNew champs={champions}/>} />

        <Route path="/champ/:id/Edit" element={<ChampEdit setChampions={setChampions} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
