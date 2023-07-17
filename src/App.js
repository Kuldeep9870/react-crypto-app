import { Route, BrowserRouter as Router,Routes} from "react-router-dom";
import Home from "./components/Home";
import Exchanges from "./components/Exchanges";
import Header from "./components/Header";
import CoinDetail from "./components/CoinDetail";
import Coins from "./components/Coins";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/coins" element={<Coins/>} />
        <Route path="/exchanges" element={<Exchanges/>} />
        <Route path="/coin/:id" element={<CoinDetail/>} />
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
