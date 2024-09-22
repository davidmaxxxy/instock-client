import React from "react";
import "./InventoryListPage.scss";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import InventoryTable from "../../Components/InventoryTable/InventoryTable";
import axios from 'axios';
import { useEffect, useState } from "react";
import DeleteComponentsInventory from "../../Components/DeleteComponents/DeleteComponentsInventory";

const InventoryListPage = () => {
    const [inventory, setInventory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [inventory_id, setInventory_id] = useState("");
    const [inventory_name, setInventory_name] = useState("");
  
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

    const handleDeleteInventory = (inventoryId, inventoryName) => {
      setOpenModal(true);
      console.log(inventoryId);
      console.log(inventoryName);
      setInventory_id(inventoryId);
      setInventory_name(inventoryName);
    };
  
    return (
      <>
      {openModal ? (
        <DeleteComponentsInventory
          id={inventory_id}
          inventoryName={inventory_name}
          setModal={setOpenModal}
        />
      ) : (
      <PageWrapper title={"Inventory"} location={"Inventory"}>
        <InventoryTable inventory={inventory} loading={loading} /> {/* Pass inventory and loading as props */}
      </PageWrapper>
    )};

</>
  );
};

  
  export default InventoryListPage;