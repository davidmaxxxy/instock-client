import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/HomePage/Homepage";
import DisplayComponents from "../Components/DisplayComponents/DisplayComponents";
import WarehouseDetailPage from "../Pages/WarehouseDetailPage/WarehouseDetailPage";
import InventoryDetailPage from "../Pages/InventoryDetailPage/InventoryDetailPage";
import AddNewInventory from "../Pages/AddNewInventory/AddNewInventory";

const AppNavigations = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* to display  components  */}
      <Route path="/components" element={<DisplayComponents />} />
      <Route
        path="/warehouse/detail/:warehouseName/:warehouseId"
        element={<WarehouseDetailPage />}
      />
      <Route
        path="/inventory/detail/:inventoryName/:inventoryId"
        element={<InventoryDetailPage />}
      />
      <Route path="/inventory/add" element={<AddNewInventory />} />

      {/* All Routes goes here  */}
    </Routes>
  );
};

export default AppNavigations;
