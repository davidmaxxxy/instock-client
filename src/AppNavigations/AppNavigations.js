import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/HomePage/Homepage";

const AppNavigations = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      {/* All Routes goes here  */}
    </Routes>
  );
};

export default AppNavigations;
