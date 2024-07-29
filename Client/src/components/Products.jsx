import Layout from "./Layout";
import { useState } from "react";
const Products = () => {
  const [products, setProducts] = useState([
    {
      title: "Men's Blue T-shirt",
      price: 1200,
      discount: 30,
      thumbnail: "/Product/a.jpg",
    },
    {
      title: "Men's Blue T-shirt",
      price: 1200,
      discount: 30,
      thumbnail: "/Product/b.jpg",
    },
    {
      title: "Men's Blue T-shirt",
      price: 1200,
      discount: 30,
      thumbnail: "/Product/c.jpg",
    },
    {
      title: "Men's Blue T-shirt",
      price: 1200,
      discount: 30,
      thumbnail: "/Product/d.jpg",
    },
    {
      title: "Men's Blue T-shirt",
      price: 1200,
      discount: 30,
      thumbnail: "/Product/e.jpg",
    },
    {
      title: "Men's Blue T-shirt",
      price: 1200,
      discount: 50,
      thumbnail: "/Product/f.jpg",
    },
    {
      title: "Men's Blue T-shirt",
      price: 1200,
      discount: 30,
      thumbnail: "/Product/g.jpg",
    },
    {
      title: "Men's Blue T-shirt",
      price: 1200,
      discount: 30,
      thumbnail: "/Product/h.jpg",
    },
  ]);
  return (
    <Layout>
      <div className="md:p-16 p-8">
        <h1 className="text-center font-bold text-orange-600 text-6xl">
          All Products
        </h1>
        <p className="md:w-7/12 mx-auto text-center mt-2 mb-16 text-blue-700 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nostrum
          blanditiis ea cumque non ex atque impedit ratione mollitia, eum et
          doloremque adipisci consequatur quasi rerum culpa dolore maiores
          molestias!
        </p>
        <div className="md:w-10/12 mx-auto py-10 grid md:grid-cols-4 gap-12">
          {products.map((item, index) => (
            <div key={index} className="bg-white shadow-lg border">
              <img
                src={item.thumbnail}
                alt={item.thumbnail}
                className="w-full h-[500px] object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg font-bold">{item.title}</h1>
                <div className="flex gap-3 items-center">
                  <label className="font-bold text-xl">
                    {item.price - (item.price * item.discount) / 100}
                  </label>
                  <del className="text-slate-800">{item.price}</del>
                  <label className="text-slate-800">
                    ({item.discount}% Off)
                  </label>
                </div>
                <button className="bg-green-500 hover:bg-green-900  py-2 w-full rounded text-white font-semibold mt-4 duration-500">
                  Buy Now
                </button>
                <button className="bg-rose-500 hover:bg-rose-900 py-2 w-full rounded text-white font-semibold mt-4 duration-500">
                  <i className="ri-shopping-cart-line mr-2"></i>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
