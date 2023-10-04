import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";

const Invoice = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  return (
    <div>
      <Layout>
        <div className="min-h-[80vh] bg-gray-200 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-semibold mb-4">Order Confirmation</h1>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Order Details</h2>
            <ul className="list-disc pl-4">
              <li>Order ID: #12345</li>
              <li>Order Date: {formattedDate}</li>
              <li>Shipping Address: to you</li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Estimated Delivery</h2>
            <p>Your order is expected to arrive within 5-7 business days.</p>
          </div>

          <div className="mt-8">
            <Link
              to="/"
              className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Invoice;
