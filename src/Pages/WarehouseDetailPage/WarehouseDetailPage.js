import React, { useState } from "react";
import "./WarehouseDetailPage.scss";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import { useNavigate, useParams } from "react-router-dom";

const WarehouseDetailPage = () => {
  const { warehouseName, warehouseId } = useParams();
  const navigate = useNavigate();
  const [warehouse, setWarehouse] = useState({
    warehouse_name: "Graeme Lyon Warehouse Manager",
    warehouse_address: "33 Pearl Street SW, Washington, USA",
    warehouse_phone: " +1 (647) 504-0911",
    warehouse_email: " glyon@instock.com",
  });
  const handleEditWarehouseNavigation = () => {
    // Navigate to the warehouse Edit page with the warehouse ID
    // THIS route is example Route but can be used if u want to
    navigate(`/warehouse/${warehouseId}/edit`);
  };

  return (
    <PageWrapper
      title={warehouseName}
      handleButtonClick={handleEditWarehouseNavigation}
      location={"Warehouse-details"}
    >
      <section className="Warehouse-details__container">
        <article className="Warehouse-details__infor--container">
          <h2 className="Warehouse-details__infor--container-header">
            WAREHOUSE ADDRESS:
          </h2>
          <p className="Warehouse-details__infor--container-text">
            {warehouse.warehouse_address}
          </p>
        </article>

        <article className="Warehouse-details__infor">
          <div className="Warehouse-details__tablet--divider" />
          <article className="Warehouse-details__infor--container">
            <h2 className="Warehouse-details__infor--container-header">
              CONTACT NAME:
            </h2>
            <p className="Warehouse-details__infor--container-text">
              {warehouse.warehouse_name}
            </p>
          </article>
          <article className="Warehouse-details__infor--container">
            <h2 className="Warehouse-details__infor--container-header">
              CONTACT INFORMATION:
            </h2>
            <p className="Warehouse-details__infor--container-text">
              {warehouse.warehouse_phone}
            </p>
            <p className="Warehouse-details__infor--container-text">
              {warehouse.warehouse_email}
            </p>
          </article>
        </article>
        <div className="Warehouse-details__mobile--divider" />
      </section>

      {/* Warehouse Inventory Table Goes here  */}
      <section>{/* ........... */}</section>
      {/* Warehouse Inventory Table Goes here  */}
    </PageWrapper>
  );
};

export default WarehouseDetailPage;
