import "./App.css";
import "./styles/global.scss";
import { BrowserRouter as Router } from "react-router-dom";
import AppNavigations from "./AppNavigations/AppNavigations";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";


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
