import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/HomePage/Homepage";
import DisplayComponents from "../Components/DisplayComponents/DisplayComponents";
import EditWarehouse from "../Components/EditWarehouse/EditWarehouse";

const AppNavigations = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* to display  components  */}
      <Route path="/components" element={<DisplayComponents />} />

      <Route path="/warehouses/:id/edit" element={<EditWarehouse />} />
    </Routes>
  );
};

export default AppNavigations;
