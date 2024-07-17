import React from "react";
import StoreSettingContainer from "../components/storeSettingsComponents/StoreSettingContainer";

const StoreSettings = () => {
  return (
    <div className="py-5 px-5 md:px-10 w-full bg-container flex flex-col items-start gap-4 rounded-xl">
      <StoreSettingContainer />
    </div>
  );
};

export default StoreSettings;
