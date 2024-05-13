// pages
import { Main } from "./pages/main/main";
import { Mypokemon } from "./pages/mypokemon/mypokemon";
import { Pokemonbook } from "./pages/pokemonbook/pokemonbook";
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

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Backstyle>
          <Content>
            <Header />
            <Routes>
              <Route exact path="/" element={<Navigate to="/main" />} />
              <Route exact path="/main" element={<Main />} />
              <Route exact path="/mypokemon" element={<Mypokemon />} />
              <Route exact path="/pokemonbook" element={<Pokemonbook />} />
            </Routes>
          </Content>
        </Backstyle>
      </Router>
    </Provider>
  );
}

export default App;
