import "./App.css";
import "./styles/global.scss";
import { BrowserRouter as Router } from "react-router-dom";
import AppNavigations from "./AppNavigations/AppNavigations";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import DynamicButton from "./Components/DynamicButton/DynamicButton";
import DynamicForm from "./Components/DynamicForm/DynamicForm"; // Import DynamicForm
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faPlus } from "@fortawesome/free-solid-svg-icons";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <Router>
      <main className="App">
        <Header />
        <AppNavigations />

        {/* Embed the DynamicForm component */}
        <DynamicForm handleButtonClick={handleClick} />

        <section className="button-container">
          <h2>Test Dynamic Buttons</h2>

          <DynamicButton
            title="Add New Warehouse"
            colorClass="primary-color-indigo"
            size="large"
            onClick={handleClick}
            icon={() => <FontAwesomeIcon icon={faPlus} />}
          />

          <DynamicButton
            title="Edit"
            colorClass="primary-color-indigo"
            size="medium"
            onClick={handleClick}
            icon={() => <FontAwesomeIcon icon={faPencilAlt} />}
          />

          <DynamicButton
            title="Cancel"
            colorClass="primary-color-white"
            size="small"
            onClick={handleClick}
          />
          <DynamicButton
            title="Save"
            colorClass="primary-color-indigo"
            size="small"
            onClick={handleClick}
          />

          <DynamicButton
            title="Delete"
            colorClass="supporting-color-red"
            size="small"
            onClick={handleClick}
          />
        </section>

        <Footer />
      </main>
    </Router>
  );
}

export default App;
