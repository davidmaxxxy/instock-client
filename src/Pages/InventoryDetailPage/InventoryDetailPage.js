import axios from "axios";
import "./InventoryDetailPage.scss";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";

const InventoryDetailPage = () => {
  const { inventoryName, inventoryId } = useParams();
  const navigate = useNavigate();
  const [inventory, setInventory] = useState({
    warehouse_id: 1,
    item_name: "Paper Towels",
    warehouse: "Manhattan",
    description:
      "Made out of military-grade synthetic materials, these paper towels are highly flammable, yet water resistant, and easy to clean.",
    category: "Gear",
    status: "Out of Stock",
    quantity: 0,
  });
  const [loading, setLoading] = useState(false);

  const handleEditInventoryNavigation = () => {
    // Navigate to the inventory Edit page with the inventory ID
    navigate(`/inventory/${inventoryId}/edit`);
  };

  useEffect(() => {
    // Fetch the inventory data from the API
    const getInventoryDetailByInventoryId = async () => {
      setLoading(true);
      try {
        const { status, data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}inventories/${inventoryId}`
        );
        if (status === 200) setInventory(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getInventoryDetailByInventoryId();
  }, [inventoryName, inventoryId]);

  return (
    <PageWrapper
      title={inventoryName || inventory.item_name}
      handleButtonClick={handleEditInventoryNavigation}
      location={"Inventory-details"}
    >
      {!loading ? (
        <section className="inventory-details__container">
          <section className="inventory-details__infor--container address--padding">
            <article className="inventory-details__infor--container">
              <h2 className="inventory-details__infor--container-header">
                ITEM DESCRIPTION:
              </h2>
              <p className="inventory-details__infor--container-text description">
                {inventory.description}
              </p>
            </article>
            <article className="inventory-details__infor--container">
              <h2 className="inventory-details__infor--container-header">
                CATEGORY:
              </h2>
              <p className="inventory-details__infor--container-text">
                {inventory.category}
              </p>
            </article>
          </section>
          <section className="inventory-status__infor">
            <div className="inventory-details__tablet--divider" />
            <section className="inventory-status__infor--container">
              <article className="inventory-details__infor">
                <article className="inventory-details__infor--container">
                  <h2 className="inventory-details__infor--container-header">
                    STATUS:
                  </h2>
                  <p className="inventory-details__infor--container-text status">
                    {inventory.status?.toUpperCase()}
                  </p>
                </article>
                <article className="inventory-details__infor--container">
                  <h2 className="inventory-details__infor--container-header">
                    QUANTITY:
                  </h2>

                  <p className="inventory-details__infor--container-text">
                    {inventory.quantity}
                  </p>
                </article>
              </article>
              <article className="inventory-details__infor--container">
                <h2 className="inventory-details__infor--container-header">
                  WAREHOUSE:
                </h2>

                <p className="inventory-details__infor--container-text">
                  {inventory.warehouse_name}
                </p>
              </article>
            </section>
          </section>
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
    </PageWrapper>
  );
};

export default InventoryDetailPage;
