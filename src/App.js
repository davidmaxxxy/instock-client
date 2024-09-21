import "./App.css";
import "./styles/global.scss";
import { BrowserRouter as Router } from "react-router-dom";
import AppNavigations from "./AppNavigations/AppNavigations";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import WarehousesListHeader from "./Components/WarehousesListHeader/WarehousesListHeader";
import WarehousesElementMobile from "./Components/WarehouseElementMobile/WarehouseElementMobile";
import WarehousesTable from "./Components/WarehousesTable/WaretousesTable";

function App() {
  return (
    <Router>
      <main className="App">
        <Header />
         <WarehousesTable />
         <AppNavigations />
        <Footer />
      </main>
    </Router>
  );
}

export default App;
