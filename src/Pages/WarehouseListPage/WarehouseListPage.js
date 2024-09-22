import React from "react";
import "./WarehouseListPage.scss";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import axios from "axios";
import WarehousesElementMobile from "../../Components/WarehouseElementMobile/WarehouseElementMobile";
import WarehousesElement from "../../Components/WarehouseElement/WarehouseElement";
import { useEffect, useState } from "react";
import btnSort from "../../assets/Icons/sort-24px.svg";
import DeleteComponents from "../../Components/DeleteComponents/DeleteComponents";
import { useNavigate } from "react-router-dom";

const WarehouseList = () => {
  const [openModal, setOpenModal] = useState(false);
  const [warehouses, setWarehouses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [warehouse_id, setWarehouse_id] = useState("");
  const [warehouse_name, setWarehouse_name] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWarehouses = async () => {
      setLoading(true);
      try {
        const { status, data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/warehouses`
        );
        if (status === 200) {
          setWarehouses(data);
        } else {
          console.error("Failed to fetch warehouses:", status);
        }
      } catch (error) {
        console.error("Error fetching warehouses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWarehouses();
  }, []);

  const handleDeleteWareHouse = (warehouseId, warehouseName) => {
    setOpenModal(true);
    console.log(warehouseId);
    console.log(warehouseName);
    setWarehouse_id(warehouseId);
    setWarehouse_name(warehouseName);
  };

  return (
    <>
      {openModal ? (
        <DeleteComponents
          id={warehouse_id}
          warehouseName={warehouse_name}
          setModal={setOpenModal}
        />
      ) : (
        <PageWrapper title={"Warehouses"} location={"Warehouses"}>
          <div className="table-wrapper">
            {!loading ? (
              <section className="table-wrapper__mobile">
                {warehouses.map((warehouse) => (
                  <WarehousesElementMobile
                    handleOnClick={handleDeleteWareHouse}
                    key={warehouse.id}
                    warehouse={warehouse}
                  />
                ))}
              </section>
            ) : (
              <div>
                <div className="spinner">
                  <div className="">
                    <p>loading...</p>
                  </div>
                </div>
              </div>
            )}
            <table className="table-wrapper__main">
              <thead className="table-header">
                <tr className="table-header__cell">
                  <th className="table-header__element">
                    <h4>WAREHOUSE</h4>{" "}
                    <img
                      className="table-header__btn-sort"
                      src={btnSort}
                      alt="Sort"
                    />{" "}
                  </th>
                </tr>
                <tr className="table-header__cell table-header__cell-address">
                  <th className="table-header__element">
                    <h4>ADDRESS</h4>{" "}
                    <img
                      className="table-header__btn-sort"
                      src={btnSort}
                      alt="Sort"
                    />
                  </th>
                </tr>
                <tr className="table-header__cell">
                  <th className="table-header__element">
                    <h4>CONTACT NAME</h4>{" "}
                    <img
                      className="table-header__btn-sort"
                      src={btnSort}
                      alt="Sort"
                    />
                  </th>
                </tr>
                <tr className="table-header__cell">
                  <th className="table-header__element">
                    <h4>CONTACT INFORMATION</h4>{" "}
                    <img
                      className="table-header__btn-sort"
                      src={btnSort}
                      alt="Sort"
                    />
                  </th>
                </tr>
                <tr className="table-header__cell table-header__cell-actions">
                  <th className="table-header__element">
                    <h4>ACTIONS</h4>
                  </th>
                </tr>
              </thead>

              {warehouses.map((warehouse) => (
                <WarehousesElement key={warehouse.id} warehouse={warehouse} />
              ))}
            </table>
          </div>
        </PageWrapper>
      )}
    </>
  );
};

export default WarehouseList;
