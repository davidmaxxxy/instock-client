import { Routes, Route } from "react-router-dom";
import DisplayComponents from "../Components/DisplayComponents/DisplayComponents";
import EditWarehouse from "../Components/EditWarehouse/EditWarehouse";
import WarehouseDetailPage from "../Pages/WarehouseDetailPage/WarehouseDetailPage";
import InventoryDetailPage from "../Pages/InventoryDetailPage/InventoryDetailPage";

import WarehouseListPage from "../Pages/WarehouseListPage/WarehouseListPage";
import AddNewInventory from "../Pages/AddNewInventory/AddNewInventory";

import InventoryListPage from "../Pages/InventoryListPage/InventoryListPage";
import WarehouseList from "../Pages/WarehouseListPage/WarehouseListPage";


import AddNewWarehouse from "../Pages/AddNewWarehouse/AddNewWarehouse";
import EditInventory from "../Pages/EditInventory/EditInventory";



const AppNavigations = () => {
  return (
    <Routes>
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
      <Route path="/" element={<WarehouseListPage />} />
      <Route path="/add/inventory/:warehouseId" element={<AddNewInventory />} />
      <Route path="/edit/inventory/:warehouseId" element={<EditInventory />} />
      <Route
        path="/inventory/detail/:inventoryName/:inventoryId"
        element={<InventoryDetailPage />}
      />
      <Route
        path="/inventory"
        element={<InventoryListPage />}
      />
      <Route path="/warehouse/:id/edit" element={<EditWarehouse />} />
      <Route path="/add/:warehouseId" element={<AddNewWarehouse />} />
      <Route path="/warehouse"
        element={<WarehouseList />}/>
    </Routes>
  );
};

export default AppNavigations;