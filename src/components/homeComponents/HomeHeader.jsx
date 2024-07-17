import React, { useContext, useState } from "react";
import Button from "../../utils/Button";
// import AddProductPopup from "../productComponents/AddProductPopup";
import { AuthContext } from "../../context/AuthContext";

const HomeHeader = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { authData } = useContext(AuthContext);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="w-full">
      {isPopupOpen && <AddProductPopup onClose={closePopup} />}{" "}
      <div
        className={`overlay ${isPopupOpen ? "show" : ""}`}
        onClick={closePopup}
      ></div>{" "}
      <div className="flex flex-col md:flex-row items-start justify-between w-full gap-3">
        <div className="flex flex-col items-start">
          {authData.accessToken ? (
            <p className="text-[24px] text-secondary font-bold">
              Hello, {authData.storeData.username}{" "}
            </p>
          ) : (
            <p></p>
          )}
          <p className="text-paraHelper">
            This is what we&apos;ve got for you today!
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button title="Add Products +" />
          <Button title="Add Category +" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
