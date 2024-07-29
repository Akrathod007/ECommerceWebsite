import { useState } from "react";
import Layout from "./Layout";

const Cart = () => {
  const [products, setProducts] = useState([
    {
      title: "Men's Red T - shirt",
      amount: 1000,
      discount: 30,
      image: "/Product/a.jpg",
    },
    {
      title: "Men's Red T - shirt",
      amount: 1000,
      discount: 30,
      image: "/Product/b.jpg",
    },
    {
      title: "Men's Red T - shirt",
      amount: 1000,
      discount: 30,
      image: "/Product/c.jpg",
    },
    {
      title: "Men's Red T - shirt",
      amount: 1000,
      discount: 30,
      image: "/Product/d.jpg",
    },
  ]);
  return (
    <Layout>
      <div className="md:w-7/12 mx-auto border shadow-lg p-8 md:my-16 rounded-md bg-white">
        <div className="flex items-center gap-4">
          <i className="ri-shopping-cart-line text-4xl"></i>
          <h1 className="text-3xl text-gray-800">Profile</h1>
        </div>

        <hr className="my-6" />

        <div className="space-y-6">
          {products.map((item, index) => (
            <div key={index} className="flex gap-6">
              <img
                src={item.image}
                alt={item.image}
                className="w-[100px] border-3 border-white shadow"
              />

              <div className="flex flex-col">
                <h1 className="text-xl font-semibold text-slate-800">
                  {item.title}
                </h1>
                <div className="flex flex-col gap-4">
                  <div className="space-x-2">
                    <label className="text-lg font-semibold text-slate-800">
                      ₹ {item.amount - (item.amount * item.discount) / 100}
                    </label>
                    <del className="text-slate-600">{item.amount}</del>
                    <label className="text-slate-600">
                      ({item.discount}% Off)
                    </label>
                  </div>
                  <button className="w-fit bg-rose-600 text-white px-4 py-2 rounded hover:bg-rose-900 duration-300">
                    <i className="ri-delete-bin-line mr-2"></i>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="my-6" />
        <div className="space-y-2">
          <h1 className="text-2xl text-slate-800 font-semibold">
            Total : ₹ 20000
          </h1>
          <button className="bg-green-600 rounded text-white py-2 px-3 hover:bg-rose-600 duration-300">
            <i className="ri-shopping-bag-4-line mr-2"></i>
            Buy Now
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
