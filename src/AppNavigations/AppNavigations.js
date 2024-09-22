import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/HomePage/Homepage";
import DisplayComponents from "../Components/DisplayComponents/DisplayComponents";
import EditWarehouse from "../Components/EditWarehouse/EditWarehouse";
import WarehouseDetailPage from "../Pages/WarehouseDetailPage/WarehouseDetailPage";
import InventoryDetailPage from "../Pages/InventoryDetailPage/InventoryDetailPage";
import WarehouseListPage from "../Pages/WarehouseListPage/WarehouseListPage"


const AppNavigations = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* to display  components  */}
      <Route path="/components" element={<DisplayComponents />} />
      <Route
        path="/inventory/detail/:inventoryName/:inventoryId"
        element={<InventoryDetailPage />}
      />
      <Route
        path="/warehouse/detail/:warehouseName/:warehouseId"
        element={<WarehouseDetailPage />}
      />
      <Route
        path="/warehouse"
        element={<WarehouseListPage />}
      />

      <Route path="/warehouse/:id/edit" element={<EditWarehouse />} />
    </Routes>
  );
};

export default AppNavigations;
