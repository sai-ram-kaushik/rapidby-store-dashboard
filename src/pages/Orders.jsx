import React from "react";
import OrderDetails from "../components/orderComponents/OrderDetails";
import OrderTracking from "../components/orderComponents/OrderTracking";

const Orders = () => {
  return (
    <div className="py-5 px-5 md:px-10 w-full bg-container flex flex-col items-start gap-4">
      <OrderDetails />
      <OrderTracking />
    </div>
  );
};

export default Orders;
