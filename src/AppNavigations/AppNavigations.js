import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/HomePage/Homepage";
import DisplayComponents from "../Components/DisplayComponents/DisplayComponents";
import EditWarehouse from "../Components/EditWarehouse/EditWarehouse";
import WarehouseDetailPage from "../Pages/WarehouseDetailPage/WarehouseDetailPage";
import InventoryDetailPage from "../Pages/InventoryDetailPage/InventoryDetailPage";
import EditInventoryItem from "../Pages/EditInventoryItem/EditInventoryItem"; // Import the EditInventoryItem component

const AppNavigations = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/components" element={<DisplayComponents />} />

      {/* Route for warehouse details */}
      <Route
        path="/warehouse/detail/:warehouseName/:warehouseId"
        element={<WarehouseDetailPage />}
      />

      {/* Route for inventory details */}
      <Route
        path="/inventory/detail/:inventoryName/:inventoryId"
        element={<InventoryDetailPage />}
      />

      {/* Route for editing a warehouse */}
      <Route path="/warehouses/:id/edit" element={<EditWarehouse />} />

      {/* Route for editing an inventory item */}
      <Route
        path="/inventory/:inventoryId/edit"
        element={<EditInventoryItem />}
      />
    </Routes>
  );
};

export default AppNavigations;
