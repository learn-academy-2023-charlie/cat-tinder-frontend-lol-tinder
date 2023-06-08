import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChampIndex from "./pages/ChampIndex";
import ChampShow from "./pages/ChampShow";
import ChampNew from "./pages/ChampNew";
import ChampEdit from "./pages/ChampEdit";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import mockchamps from "./mockchamps";
import "./App.css";

const App = () => {
  const [champs, setChamps] = useState(mockchamps);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/champIndex" element={<ChampIndex champs={champs} />} />
        <Route path="/champShow/:id" element={<ChampShow champs={champs} />} />
        <Route path="/champNew" element={<ChampNew />} />
        <Route path="/champEdit" element={<ChampEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
