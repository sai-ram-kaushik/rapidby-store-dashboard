import React from "react";
import CatalogContainer from "../components/catalogComponents/CatalogContainer";

const Catalog = () => {
  return (
    <div className="py-5 px-5 md:px-10 w-full bg-container flex flex-col items-start gap-4 rounded-xl">
      <CatalogContainer />
    </div>
  );
};

export default Catalog;
