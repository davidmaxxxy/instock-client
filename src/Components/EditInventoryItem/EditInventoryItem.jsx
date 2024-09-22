import React, { useState, useEffect } from "react";
import "../DynamicForm/DynamicForm.scss";
import DynamicButton from "../DynamicButton/DynamicButton";
import DynamicFormInput from "../DynamicForm/DynamicFormInput";
import PageWrapper from "../PageWrapper/PageWrapper";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditInventoryItem = () => {
  const { inventoryId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    item_name: "",
    description: "",
    category: "",
    status: "OUT OF STOCK",
    quantity: "",
    warehouse_id: "",
  });

  const [errors, setErrors] = useState({});
  const [warehouses, setWarehouses] = useState([]);

  // Fetch the existing inventory details and warehouse list
  useEffect(() => {
    const fetchInventoryData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}inventories/${inventoryId}`
        );
        setFormData(response.data);
      } catch (error) {
        console.log("Error fetching inventory data:", error);
      }

      try {
        const warehouseResponse = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}warehouses`
        );
        setWarehouses(warehouseResponse.data);
      } catch (error) {
        console.log("Error fetching warehouses:", error);
      }
    };

    fetchInventoryData();
  }, [inventoryId]);

  const validateForm = () => {
    let newErrors = {};

    if (!formData.item_name) newErrors.item_name = "Item name is required";
    if (!formData.description)
      newErrors.description = "Description is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.warehouse_id)
      newErrors.warehouse_id = "Please select a warehouse";

    if (
      formData.status === "IN STOCK" &&
      (!formData.quantity || formData.quantity <= 0)
    )
      newErrors.quantity = "Please enter a valid quantity";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.put(
          `${process.env.REACT_APP_BACKEND_URL}inventories/${inventoryId}`,
          formData
        );

        if (response.status === 200) {
          alert("Inventory has been updated successfully");
          navigate(`/inventory/detail/${formData.item_name}/${inventoryId}`);
        } else {
          console.log("Error updating inventory:", response.data.message);
        }
      } catch (err) {
        console.log(err);
        alert(
          "Error updating inventory: " +
            (err.response?.data?.message || err.message)
        );
      }
    }
  };

  return (
    <div>
      <PageWrapper title="Edit Inventory Item" location="Inventory-edit">
        <div className="dynamic-form__container">
          <div className="dynamic-form__section">
            <h2 className="dynamic-form__section-title">Inventory Details</h2>
            <DynamicFormInput
              type="text"
              title="Item Name"
              placeholder="Item Name"
              onChange={(value) => handleChange("item_name", value)}
              value={formData.item_name}
              isError={errors.item_name}
            />
            <DynamicFormInput
              type="text"
              title="Description"
              placeholder="Description"
              onChange={(value) => handleChange("description", value)}
              value={formData.description}
              isError={errors.description}
            />
            <DynamicFormInput
              type="text"
              title="Category"
              placeholder="Category"
              onChange={(value) => handleChange("category", value)}
              value={formData.category}
              isError={errors.category}
            />
            <div className="dynamic-form__dropdown">
              <label className="dynamic-form__label">Warehouse</label>
              <select
                className="dynamic-form__input"
                value={formData.warehouse_id}
                onChange={(e) => handleChange("warehouse_id", e.target.value)}
              >
                <option value="">Select Warehouse</option>
                {warehouses.map((warehouse) => (
                  <option key={warehouse.id} value={warehouse.id}>
                    {warehouse.warehouse_name}
                  </option>
                ))}
              </select>
              {errors.warehouse_id && (
                <span className="dynamic-form__error-message">
                  {errors.warehouse_id}
                </span>
              )}
            </div>
          </div>

          <div className="dynamic-form__section">
            <h2 className="dynamic-form__section-title">Status</h2>
            <DynamicFormInput
              type="text"
              title="Status"
              placeholder="Status"
              onChange={(value) => handleChange("status", value)}
              value={formData.status}
              isError={errors.status}
            />

            {formData.status === "IN STOCK" && (
              <DynamicFormInput
                type="number"
                title="Quantity"
                placeholder="Quantity"
                onChange={(value) => handleChange("quantity", value)}
                value={formData.quantity}
                isError={errors.quantity}
              />
            )}
          </div>
        </div>

        <div className="dynamic-form__button-container">
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
      </PageWrapper>
    </div>
  );
};

export default EditInventoryItem;
