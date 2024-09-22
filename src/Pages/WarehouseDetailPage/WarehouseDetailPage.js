import React, { useEffect, useState } from "react";
import "./WarehouseDetailPage.scss";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import DeleteComponents from "../../Components/DeleteComponents/DeleteComponents";

const WarehouseDetailPage = () => {
  const { warehouseName, warehouseId } = useParams();
  const navigate = useNavigate();
  const [warehouse, setWarehouse] = useState({});
  const [loading, setLoading] = useState(false);
  const handleEditWarehouseNavigation = () => {
    // Navigate to the warehouse Edit page with the warehouse ID
    navigate(`/warehouse/${warehouseId}/edit`);
  };

  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    // Fetch the warehouse data from the API
    const getWarehouseDetailByWarehouseId = async () => {
      setLoading(true);
      try {
        const { status, data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/warehouses/${warehouseId}`
        );
        if (status === 200) setWarehouse(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getWarehouseDetailByWarehouseId();
  }, [warehouseName, warehouseId]);

  return (
    <PageWrapper
      title={warehouseName}
      handleButtonClick={handleEditWarehouseNavigation}
      location={"Warehouse-details"}
    >
      {!loading ? (
        <>
          <section className="Warehouse-details__container">
            <article className="Warehouse-details__infor--container address--padding">
              <h2 className="Warehouse-details__infor--container-header">
                WAREHOUSE ADDRESS:
              </h2>
              <p className="Warehouse-details__infor--container-text">
                {warehouse.address}, {warehouse.city}, {warehouse.country}
              </p>
            </article>

            <article className="Warehouse-details__infor">
              <div className="Warehouse-details__tablet--divider" />
              <article className="Warehouse-details__infor--container">
                <h2 className="Warehouse-details__infor--container-header">
                  CONTACT NAME:
                </h2>
                <p className="Warehouse-details__infor--container-text">
                  {warehouse.contact_name}
                </p>
                <p className="Warehouse-details__infor--container-text">
                  {warehouse.contact_position}
                </p>
              </article>
              <article className="Warehouse-details__infor--container">
                <h2 className="Warehouse-details__infor--container-header">
                  CONTACT INFORMATION:
                </h2>
                <p className="Warehouse-details__infor--container-text">
                  {warehouse.contact_phone}
                </p>
                <p className="Warehouse-details__infor--container-text">
                  {warehouse.contact_email}
                </p>
              </article>
            </article>
            <div className="Warehouse-details__mobile--divider" />
          </section>
          {/* Warehouse Inventory Table Goes here  */}
          <section>{/* Inventory Tables goes here  */}</section>
          {/* Warehouse Inventory Table Goes here  */}
        </>
      ) : (
        <div>
          <div className="spinner">
            <div className="">
              <p>loading...</p>
            </div>
          </div>
        </div>
      )}
      {openModal && <DeleteComponents />}

    </PageWrapper>
  );
};

export default WarehouseDetailPage;
