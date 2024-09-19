import React, { useState } from "react";
import "./EditWarehouse.scss";
import "../DynamicForm/DynamicForm.scss";
import DynamicButton from "../DynamicButton/DynamicButton";
import DynamicForm from "../DynamicForm/DynamicForm";
import DynamicFormInput from "../DynamicForm/DynamicFormInput";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import PageWrapper from "../PageWrapper/PageWrapper";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditWarehouse = ({ handleClick }) => {
  const { id } = useParams();
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

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const response = await axios.put(
          `http://localhost:3000/api/warehouses/${id}`,
          formData
        );

        if (response.status === 200) {
          alert("Warehouse has been updated successfully");
        } else {
          alert("Error updating warehouse: " + response.data.message);
        }
      } catch (err) {
        console.log(err);
        alert(
          "Error updating warehouse" + err.response?.data?.message ||
            err.message
        );
      }
    } else {
      alert("Please correct the errors in the form");
    }
  };

  return (
    <div>
      <h1>Edit Warehouse Page</h1>
      <PageWrapper title="Edit Warehouse" location="Warehouse-edit">
        <div className="dynamic-form__container">
          <div className="dynamic-form__section">
            <h2 className="dynamic-form__section-title">Warehouse Details</h2>
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

          <div className="dynamic-form__section">
            <h2 className="dynamic-form__section-title">Contact Details</h2>
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

        <div className="dynamic-form__button-container">
          <DynamicButton
            title="Cancel"
            colorClass="primary-color-white"
            size="large"
            onClick={handleClick}
          />
          <DynamicButton
            title="Save"
            colorClass="primary-color-indigo"
            size="large"
            onClick={handleSubmit}
          />
        </div>
      </PageWrapper>
    </div>
  );
};

export default EditWarehouse;
