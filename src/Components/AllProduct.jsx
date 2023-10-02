import React, { useState, useEffect } from "react";
import axios from "axios";

const AllProduct = () => {
  const [products, setProduct] = useState([]);

  console.log(products);

  const fetchProducts = async () => {
    axios
      .get("https://fakestoreapi.com/products", {
        params: {
          limit: "",
          sort: "Rain",
        },
      })
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchProducts();
  });

  return (
    <section>
      <div className="flex lg:min-h-[80vh] p-4 gap-5 flex-col lg:flex-row ">
        <div className="flex-1 bg-gray-800 rounded-3xl p-2">left</div>
        <div className="flex-[4] flex flex-col">
          <div className="bg- gray-800 rounded-3xl p-2">
            {" "}
            <h1 className="font-bold text-3xl border-b-2">Products</h1>
            <div className="flex justify-center">
              <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-8 py-8">
                {products?.map((product, i) => (
                  <div className="max-w-xs flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow ">
                    <img
                      src={product.image}
                      className="rounded-t-lg h-64"
                      alt=""
                    />
                    <div className="p-5">
                      <div className="flex justify-center">
                        <h5 className="mb-2 font-bold tracking-tight text-gray-900 ">
                          {product.title}
                        </h5>
                        <p> {product.price}$</p>
                      </div>
                      <p>
                        {"rating " + product.rating.rate}
                        <span>({product.rating.count})</span>
                      </p>

                      <p className="mb-3 font-normal text-gray-700">
                        {product.description.length > 55
                          ? product.description.slice(0, 55) + "....."
                          : product.description}
                      </p>
                      {/* <p> {product.category}</p> */}
                      <a
                        href="#!"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-400"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProduct;
