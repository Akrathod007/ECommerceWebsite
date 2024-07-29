import React, { useState } from "react";
import Layout from "./Layout";

function Order() {
  const [orders, setOrders] = useState([
    {
      orderId: 1,
      customerName: "Rakesh Pande",
      email: "rakesh789@gmail.com",
      mobile: "+91 7884958464",
      product: "OPPO F15",
      amount: 25000,
      date: "25th June, 2024",
      status: "Pending",
    },
    {
      orderId: 1,
      customerName: "Rakesh Pande",
      email: "rakesh789@gmail.com",
      mobile: "+91 7884958464",
      product: "OPPO F15",
      amount: 25000,
      date: "25th June, 2024",
      status: "Pending",
    },
    {
      orderId: 1,
      customerName: "Rakesh Pande",
      email: "rakesh789@gmail.com",
      mobile: "+91 7884958464",
      product: "OPPO F15",
      amount: 25000,
      date: "25th June, 2024",
      status: "Pending",
    },
    {
      orderId: 1,
      customerName: "Rakesh Pande",
      email: "rakesh789@gmail.com",
      mobile: "+91 7884958464",
      product: "OPPO F15",
      amount: 25000,
      date: "25th June, 2024",
      status: "Pending",
    },
    {
      orderId: 1,
      customerName: "Rakesh Pande",
      email: "rakesh789@gmail.com",
      mobile: "+91 7884958464",
      product: "OPPO F15",
      amount: 25000,
      date: "25th June, 2024",
      status: "Pending",
    },
    {
      orderId: 1,
      customerName: "Rakesh Pande",
      email: "rakesh789@gmail.com",
      mobile: "+91 7884958464",
      product: "OPPO F15",
      amount: 25000,
      date: "25th June, 2024",
      status: "Pending",
    },
    {
      orderId: 1,
      customerName: "Rakesh Pande",
      email: "rakesh789@gmail.com",
      mobile: "+91 7884958464",
      product: "OPPO F15",
      amount: 25000,
      date: "25th June, 2024",
      status: "Pending",
    },
  ]);
  return (
    <Layout>
      <div>
        <div className="flex border-2 w-fit h-12">
          <h1 className="text-2xl text-orange-600 font-semibold">Orders</h1>
          <i className="ri-arrow-right-double-line text-4xl text-orange-600"></i>
        </div>
        <div className="mt-3">
          <table className="w-full">
            <thead className="bg-red-500 text-white">
              <tr>
                <th className="p-3">OrderId</th>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item, index) => (
                <tr
                  key={index}
                  className="text-center"
                  style={{
                    background: (index + 1) % 2 === 0 ? "gray" : "#f1f5f9",
                  }}
                >
                  <td className="p-3">{item.orderId}</td>
                  <td>{item.customerName}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>{item.product}</td>
                  <td>₹ {item.amount.toLocaleString()}</td>
                  <td>{item.date}</td>
                  <td className="border-red-700">
                    <select className="w-[150px] p-1 ">
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="dispatched">Dispatched</option>
                      <option value="returned">Returned</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default Order;
