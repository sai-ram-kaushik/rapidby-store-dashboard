import React from "react";
import Sidebar from "../components/Sidebar";
import data from "../data/sidebar.json";
const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar sidebar={data.sidebar} />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
