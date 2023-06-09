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
import mockChamp from "./MockChamp";
import "./App.css";

const App = () => {
  const [champions, setChampions] = useState(mockChamp);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/champIndex" element={<ChampIndex champs={champions} />} />
        <Route
          path="/champShow/:id"
          element={<ChampShow champs={champions} />}
        />
        <Route path="/champNew" element={<ChampNew />} />
        <Route path="/champEdit" element={<ChampEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
