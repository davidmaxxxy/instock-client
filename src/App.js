import "./App.css";
import "./styles/global.scss";
import { BrowserRouter as Router } from "react-router-dom";
import AppNavigations from "./AppNavigations/AppNavigations";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import DynamicButton from "./Components/DynamicButton/DynamicButton";
import DynamicFormInput from "./Components/DynamicForm/DynamicFormInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faPlus } from "@fortawesome/free-solid-svg-icons";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  }; //testing if the button works - REMOVE LATER

  return (
    <Router>
      <main className="App">
        <Header />
        <AppNavigations />

        <section className="form-container">
          <div className="form-section">
            <h2 className="section-title">Warehouse Details</h2>
            <DynamicFormInput
              title="Warehouse Name"
              placeholder="Warehouse Name"
            />
            <DynamicFormInput
              title="Street Address"
              placeholder="Street Address"
            />
            <DynamicFormInput title="City" placeholder="City" />
            <DynamicFormInput title="Country" placeholder="Country" />
          </div>

          <div className="form-section">
            <h2 className="section-title">Contact Details</h2>
            <DynamicFormInput title="Contact Name" placeholder="Contact Name" />
            <DynamicFormInput title="Position" placeholder="Position" />
            <DynamicFormInput title="Email" placeholder="Email" />
            <DynamicFormInput title="Phone" placeholder="Phone" />
          </div>
        </section>

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
