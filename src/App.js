import "./App.scss";
import "./styles/global.scss";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppNavigations from "./AppNavigations/AppNavigations";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import EditWarehouse from "./Components/EditWarehouse/EditWarehouse";

function App() {
  return (
    <Router>
      <main className="App">
        <Header />
        <AppNavigations />
        <Footer />
      </main>
    </Router>
  );
}

export default App;
