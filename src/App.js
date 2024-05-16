// pages
import React, { useState, createContext } from "react";
import { Main } from "./pages/main/main";
import { Mypokemon } from "./pages/mypokemon/mypokemon";
import { Pokemonbook } from "./pages/pokemonbook/pokemonbook";
import { Worldcup } from "./pages/worldcup/worldcup";
import { Ranking } from "./pages/ranking/ranking";
// component
import { Header } from "./components/header/header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./storage/store";
import { Backstyle, Content } from "./styled";

export const RankingContent = createContext([]);

function App() {
  const [value, setValue] = useState([]);
  const [rankingvalue, setRankingvalue] = useState([]);

  return (
    <Provider store={store}>
      <RankingContent.Provider
        value={{ value, setValue }}
        renkingval={{ rankingvalue, setRankingvalue }}
      >
        <Router>
          <Backstyle>
            <Content>
              <Header />
              <Routes>
                <Route exact path="/" element={<Navigate to="/main" />} />
                <Route exact path="/main" element={<Main />} />
                <Route exact path="/mypokemon" element={<Mypokemon />} />
                <Route exact path="/pokemonbook" element={<Pokemonbook />} />
                <Route exact path="/worldcup" element={<Worldcup />} />
                <Route exact path="/ranking" element={<Ranking />} />
              </Routes>
            </Content>
          </Backstyle>
        </Router>
      </RankingContent.Provider>
    </Provider>
  );
}

export default App;
