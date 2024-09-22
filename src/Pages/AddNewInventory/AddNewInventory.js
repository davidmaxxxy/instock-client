import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AddNewInventory.scss";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import DropDown from "../../Components/DropDown/DropDown";
import DynamicButton from "../../Components/DynamicButton/DynamicButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";

const listOfWarehouse = ["category", "category 2"];

const AddNewInventory = () => {
  const { warehouseId } = useParams();
  const navigate = useNavigate();
  const [warehouses, setWarehouses] = useState([]);
  const [status, setStatus] = useState("In stock");
  const [formData, setFormData] = useState({
    item_name: "",
    description: "",
    category: "",
    status: "In stock",
    quantity: 0,
    warehouse_name: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/warehouses`
        );
        setWarehouses(response.data);
      } catch (error) {
        console.error("Error fetching warehouses");
      }
    };

    fetchWarehouses();
  }, []);

  const validateForm = () => {
    let newErrors = {};

    if (!formData.item_name) newErrors.item_name = "Item name is required";
    if (!formData.description)
      newErrors.description = "Description is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.status) newErrors.status = "Status is required";
    if (formData.status === "In stock" && formData.quantity <= 0)
      newErrors.quantity = "Quantity must be greater than 0 if in stock";

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
          item_name,
          description,
          category,
          status: warehouseStatus,
          quantity,
        } = formData;
        const { status: resStatus } = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/inventories`,
          {
            warehouse_id: warehouseId,
            item_name,
            description,
            category,
            status: warehouseStatus,
            quantity,
          }
        );
        if (resStatus === 201) {
          // Navigate to the inventory list after successful submission
          navigate("/inventories");
        }
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  };

  return (
    <PageWrapper
      title={"Add New Inventory Item"}
      location={"New-Inventory"}
      handleBackNavigation={() => navigate(-1)}
    >
      <form onSubmit={handleSubmit}>
        <section className="newInventory__container">
          <div className="newInventory__Item-Details__container">
            <h3 className="newInventory__container">Item Details</h3>
            <div className="newInventory__container__form-container">
              <p className="newInventory__container__form--input-title">
                Item name
              </p>
              <input
                className="newInventory__container__form--input"
                value={formData.item_name}
                onChange={(e) => handleChange("item_name", e.target.value)}
                placeholder="Item name"
              />
              {errors.item_name && <p className="error">{errors.item_name}</p>}
            </div>

            <div className="newInventory__container__form-container">
              <p className="newInventory__container__form--input-title">
                Description
              </p>
              <textarea
                className="newInventory__container__form--input"
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                rows={4}
                cols={40}
                placeholder="Please enter a brief item description..."
              />
              {errors.description && (
                <p className="error">{errors.description}</p>
              )}
            </div>

            <div className="newInventory__container__form-container">
              <p className="newInventory__container__form--input-title">
                Category
              </p>
              <DropDown
                options={listOfWarehouse}
                handleOnValueSelect={(value) => handleChange("category", value)}
                placeholder={"Please Select"}
              />
              {errors.category && <p className="error">{errors.category}</p>}
            </div>
          </div>

          <div className="Warehouse-details__tablet--divider" />
          <div className="Warehouse-details__mobile--divider" />

          <div className="newInventory__Item-Details__container">
            <h3 className="newInventory__title">Item Availability</h3>
            <div className="newInventory__container__form-container">
              <p className="newInventory__container__form--input-title">
                Status
              </p>
              <div className="newInventory__status--container">
                <label>
                  <input
                    type="radio"
                    name="status"
                    value="In stock"
                    checked={status === "In stock"}
                    onChange={() => {
                      setStatus("In stock");
                      handleChange("status", "In stock");
                    }}
                  />
                  In stock
                </label>
                <label>
                  <input
                    type="radio"
                    name="status"
                    value="Out of stock"
                    onChange={() => {
                      setStatus("Out of stock");
                      handleChange("status", "Out of stock");
                    }}
                  />
                  Out of stock
                </label>
              </div>
              {errors.status && <p className="error">{errors.status}</p>}
            </div>

            {status === "In stock" && (
              <div className="newInventory__container__form-container">
                <p className="newInventory__container__form--input-title">
                  Quantity
                </p>
                <input
                  className="newInventory__container__form--input"
                  value={formData.quantity}
                  onChange={(e) => handleChange("quantity", e.target.value)}
                  placeholder="0"
                  type="number"
                />
                {errors.quantity && <p className="error">{errors.quantity}</p>}
              </div>
            )}

            <div className="newInventory__container__form-container">
              <p className="newInventory__container__form--input-title">
                Warehouse
              </p>
              <DropDown
                options={warehouses.map(
                  (warehouse) => warehouse.warehouse_name
                )}
                handleOnValueSelect={(value) =>
                  handleChange("warehouse_name", value)
                }
                placeholder={"Please Select"}
              />
              {errors.warehouse_name && (
                <p className="error">{errors.warehouse_name}</p>
              )}
            </div>
          </div>
        </section>

        <section className="newInventory__btn--container">
          <DynamicButton
            title="cancel"
            colorClass="primary-color-indigo"
            size="medium"
            onClick={() => navigate(-1)}
            Icon={() => <FontAwesomeIcon icon={faPencilAlt} />}
          />

          <DynamicButton
            title="save"
            colorClass="primary-color-white"
            size="small"
            onClick={handleSubmit}
          />
        </section>
      </form>
    </PageWrapper>
  );
};

export default AddNewInventory;
