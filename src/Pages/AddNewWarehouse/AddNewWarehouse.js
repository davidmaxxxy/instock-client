import React, { useState } from "react";
import axios from "axios";
import "./AddNewWarehouse.scss";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import DropDown from "../../Components/DropDown/DropDown";
import DynamicButton from "../../Components/DynamicButton/DynamicButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";

const listOfWarehouse = ["Warehouse 1", "Warehouse 2"];

const AddNewWarehouse = () => {
  const { warehouseId } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("In stock");
  const [formData, setFormData] = useState({
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  });


  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let newErrors = {};

    if (!formData.warehouse_name)
      newErrors.warehouse_name = "Warehouse name is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.contact_name)
      newErrors.contact_name = "Contact name is required";
    if (!formData.contact_position)
      newErrors.contact_position = "Contact position is required";
    if (
      !formData.contact_phone ||
      !/^[+]?[0-9\s-().]{7,15}$/.test(formData.contact_phone)
    )
      newErrors.contact_phone = "Please enter a valid phone number";
    if (!formData.contact_email || !/\S+@\S+\.\S+/.test(formData.contact_email))
      newErrors.contact_email = "Please enter a valid email";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const {
            warehouse_name,
            address,
            city,
            country,
            contact_name,
            contact_position,
            contact_phone,
            contact_email,
        } = formData;
        const { status: resStatus } = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/warehouses`,
          {
            warehouse_id:warehouse_name,
            address,
            city,
            country,
            contact_name,
            contact_position,
            contact_phone,
            contact_email,
          }
        );
        if (resStatus === 201) {
          navigate("/warehouses");
        }
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  };

  return (
    <PageWrapper
      title={"Add New Warehouse Item"}
      location={"New-Warehouse"}
      handleBackNavigation={() => navigate(-1)}
    >
      <form onSubmit={handleSubmit}>
      <div className="newWarehouse__container">
          <div className="newWarehouse__section">
            <h2 className="newWarehouse__section--title">Warehouse Details</h2>
            <DynamicFormInput
              type="text"
              title="Warehouse Name"
              placeholder="Warehouse Name"
              onChange={(value) => handleChange("warehouse_name", value)}
              value={formData.warehouse_name}
              isError={errors.warehouse_name}
            />
            <DynamicFormInput
              type="text"
              title="Street Address"
              placeholder="Street Address"
              onChange={(value) => handleChange("address", value)}
              value={formData.address}
              isError={errors.address}
            />
            <DynamicFormInput
              type="text"
              title="City"
              placeholder="City"
              onChange={(value) => handleChange("city", value)}
              value={formData.city}
              isError={errors.city}
            />
            <DynamicFormInput
              type="text"
              title="Country"
              placeholder="Country"
              onChange={(value) => handleChange("country", value)}
              value={formData.country}
              isError={errors.country}
            />
          </div>

          <div className="newWarehouse__section">
            <h2 className="newWarehouse__section--title">Contact Details</h2>
            <DynamicFormInput
              type="text"
              title="Contact Name"
              placeholder="Contact Name"
              onChange={(value) => handleChange("contact_name", value)}
              value={formData.contact_name}
              isError={errors.contact_name}
            />
            <DynamicFormInput
              type="text"
              title="Position"
              placeholder="Position"
              onChange={(value) => handleChange("contact_position", value)}
              value={formData.contact_position}
              isError={errors.contact_position}
            />
            <DynamicFormInput
              type="text"
              title="Phone Number"
              placeholder="Phone"
              onChange={(value) => handleChange("contact_phone", value)}
              value={formData.contact_phone}
              isError={errors.contact_phone}
            />
            <DynamicFormInput
              type="text"
              title="Email"
              placeholder="Email"
              onChange={(value) => handleChange("contact_email", value)}
              value={formData.contact_email}
              isError={errors.contact_email}
            />
          </div>
        </div>

        <div className="newWarehouse__btn--container">
          <DynamicButton
            title="Cancel"
            colorClass="primary-color-white"
            size="large"
            onClick={handleCancel}
          />
          <DynamicButton
            title="Save"
            colorClass="primary-color-indigo"
            size="large"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </PageWrapper>
  );
};

export default AddNewWarehouse;
