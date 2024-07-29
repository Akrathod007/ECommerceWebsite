import React, { useState } from "react";
import Layout from "./Layout";

function Customers() {
  const [customers, setCustomers] = useState([
    {
      customerName: "Rakesh Pande",
      email: "rakesh789@gmail.com",
      mobile: "+91 7884958464",
      date: "25th June, 2024",
      address:
        "C/22 ShivShakti Apartment, NR. Bhavik School,Chandlodiya,Ahmedabad",
    },
    {
      customerName: "Rakesh Pande",
      email: "rakesh789@gmail.com",
      mobile: "+91 7884958464",
      date: "25th June, 2024",
      address:
        "C/22 ShivShakti Apartment, NR. Bhavik School,Chandlodiya,Ahmedabad",
    },
    {
      customerName: "Rakesh Pande",
      email: "rakesh789@gmail.com",
      mobile: "+91 7884958464",
      date: "25th June, 2024",
      address:
        "C/22 ShivShakti Apartment, NR. Bhavik School,Chandlodiya,Ahmedabad",
    },
    {
      customerName: "Rakesh Pande",
      email: "rakesh789@gmail.com",
      mobile: "+91 7884958464",
      date: "25th June, 2024",
      address:
        "C/22 ShivShakti Apartment, NR. Bhavik School,Chandlodiya,Ahmedabad",
    },
    {
      customerName: "Rakesh Pande",
      email: "rakesh789@gmail.com",
      mobile: "+91 7884958464",
      date: "25th June, 2024",
      address:
        "C/22 ShivShakti Apartment, NR. Bhavik School,Chandlodiya,Ahmedabad",
    },
  ]);
  return (
    <Layout>
      <div>
        <div className="flex border-2 w-fit h-12">
          <h1 className="text-2xl text-orange-600 font-semibold">Customers</h1>
          <i className="ri-arrow-right-double-line text-4xl text-orange-600"></i>
        </div>
        <div className="mt-3">
          <table className="w-full">
            <thead className="bg-red-500 text-white">
              <tr className="text-left">
                <th className="p-3">Customer Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Date</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((item, index) => (
                <tr
                  key={index}
                  style={{
                    background: (index + 1) % 2 === 0 ? "gray" : "#f1f5f9",
                  }}
                >
                  <td className="p-3 flex gap-2">
                    <img
                      src="/images/avatar.jpg"
                      alt="customer"
                      width={50}
                      className="rounded-full"
                    />
                    <div>
                      <h1>{item.customerName}</h1>
                      <p>{item.date}</p>
                    </div>
                  </td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>{item.date}</td>
                  <td className="border-red-700">{item.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default Customers;
