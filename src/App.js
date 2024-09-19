import "./App.scss";
import "./styles/global.scss";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppNavigations from "./AppNavigations/AppNavigations";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import EditWarehouse from "./Components/EditWarehouse/EditWarehouse";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <Router>
      <main className="App">
        <Header />
        <AppNavigations />
        <Routes>
          <Route
            path="/warehouses/:id/edit"
            element={<EditWarehouse handleClick={handleClick} />}
          />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
