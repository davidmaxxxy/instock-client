import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/HomePage/Homepage";
import DisplayComponents from "../Components/DisplayComponents/DisplayComponents";
import WarehouseDetailPage from "../Pages/WarehouseDetailPage/WarehouseDetailPage";
import InventoryDetailPage from "../Pages/InventoryDetailPage/InventoryDetailPage";
import DeleteComponents from "../Components/DeleteComponents/DeleteComponents";

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

      <Route path="/:id" element={<DeleteComponents />} />

      {/* All Routes goes here  */}
    </Routes>
  );
};

export default AppNavigations;
