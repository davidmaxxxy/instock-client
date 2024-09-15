import "./App.css";
import "./styles/global.scss";
import { BrowserRouter as Router } from "react-router-dom";
import AppNavigations from "./AppNavigations/AppNavigations";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import DynamicButton from "./Components/DynamicButton/DynamicButton";
import DynamicForm from "./Components/DynamicForm/DynamicForm";
import DynamicFormInput from "./Components/DynamicForm/DynamicFormInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faPlus,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <Router>
      <main className="App">
        <Header />
        <AppNavigations />

        {/* Embed the DynamicForm component with child elements */}
        <DynamicForm
          handleButtonClick={handleClick}
          headerTitle="Add New Warehouse"
          headerButton={
            <DynamicButton
              title="Edit"
              colorClass="primary-color-indigo"
              size="small"
              onClick={handleClick}
              icon={() => <FontAwesomeIcon icon={faPencilAlt} />}
            />
          }
        >
          <div className="dynamic-form__container">
            <div className="dynamic-form__section">
              <h2 className="dynamic-form__section-title">Warehouse Details</h2>
              <DynamicFormInput
                type="text"
                title="Warehouse Name"
                placeholder="Warehouse Name"
              />
              <DynamicFormInput
                type="text"
                title="Street Address"
                placeholder="Street Address"
              />
              <DynamicFormInput type="text" title="City" placeholder="City" />
              <DynamicFormInput
                type="text"
                title="Country"
                placeholder="Country"
              />
            </div>

            <div className="dynamic-form__section">
              <h2 className="dynamic-form__section-title">Contact Details</h2>
              <DynamicFormInput
                type="text"
                title="Contact Name"
                placeholder="Contact Name"
              />
              <DynamicFormInput
                type="text"
                title="Position"
                placeholder="Position"
              />
              <DynamicFormInput type="text" title="Email" placeholder="Email" />
              <DynamicFormInput type="text" title="Phone" placeholder="Phone" />
            </div>
          </div>

          <div className="dynamic-form__button-container">
            <DynamicButton
              title="Cancel"
              colorClass="supporting-color-red"
              size="medium"
              onClick={handleClick}
            />
            <DynamicButton
              title="Save"
              colorClass="primary-color-indigo"
              size="medium"
              onClick={handleClick}
            />
          </div>
        </DynamicForm>

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
