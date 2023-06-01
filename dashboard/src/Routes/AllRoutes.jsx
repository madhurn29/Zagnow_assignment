import React from "react";
import { Route, Routes } from "react-router-dom";
import Reports from "../Pages/Reports";
import Workspace from "../Pages/Workspace";
import Settings from "../Pages/Settings";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Reports />} />
      <Route path="/workspace" element={<Workspace />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default AllRoutes;
