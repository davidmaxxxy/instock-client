import React from "react";
import "./WarehouseListPage.scss";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import axios from 'axios';
import { useEffect, useState } from "react";
import btnSort from '../../assets/Icons/sort-24px.svg';

const InventoryTable = () => {

  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchInventory = async () => {
      setLoading(true);
      try {
        const { status, data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/inventories`
        );
        if (status === 200) {
          setInventory(data);
        } else {
          console.error('Failed to fetch inventory:', status);
        }
      } catch (error) {
        console.error('Error fetching inventory:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInventory();
  }, []);

  return (
    <PageWrapper title={"Inventory"} location={"Inventory"}>
      <div className="table-wrapper">
        {!loading ? (
          <section className="table-wrapper__mobile">
            {inventory.map((item) => (
              <InventoryElementMobile key={item.id} item={item} />
            ))}
          </section>
        ) : (
          <div className="spinner">
            <p>Loading...</p>
          </div>
        )}
        <table className="table-wrapper__main">
          <thead className="table-header">
            <tr className="table-header__cell">
              <th className="table-header__element"><h4>INVENTORY</h4> <img className="table-header__btn-sort" src={btnSort} alt="Sort"/> </th> 
            </tr>
            <tr className="table-header__cell table-header__cell-address">
              <th className="table-header__element"><h4>ADDRESS</h4> <img className="table-header__btn-sort" src={btnSort} alt="Sort"/></th>
            </tr>
            <tr className="table-header__cell">
              <th className="table-header__element"><h4>CONTACT NAME</h4> <img className="table-header__btn-sort" src={btnSort} alt="Sort"/></th>
            </tr>
            <tr className="table-header__cell">
              <th className="table-header__element"><h4>CONTACT INFORMATION</h4> <img className="table-header__btn-sort" src={btnSort} alt="Sort"/></th>
            </tr>
            <tr className="table-header__cell table-header__cell-actions">
              <th className="table-header__element"><h4>ACTIONS</h4></th>
            </tr>
          </thead>

          {inventory.map((item) => (
            <InventoryElement key={item.id} item={item} />
          ))}
        </table>
      </div>
    </PageWrapper>
  );
};

export default InventoryTable;