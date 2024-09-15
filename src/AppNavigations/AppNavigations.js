import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/HomePage/Homepage";
import DisplayComponents from "../Components/DisplayComponents/DisplayComponents";

const AppNavigations = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* to display  components  */}
      <Route path="/components" element={<DisplayComponents />} />

      {/* All Routes goes here  */}
    </Routes>
  );
};

export default AppNavigations;
