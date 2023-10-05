import { AiFillDelete } from "react-icons/ai";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../utils/Context";
import { Link } from "react-router-dom";

const AllProduct = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(Context);

  const [products, setProducts] = useState([]);
  // console.log(products);
  const [nameInput, setNameInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [priceMinInput, setPriceMinInput] = useState("");
  const [priceMaxInput, setPriceMaxInput] = useState("");

  const filteredProducts = products.filter((product) => {
    return (
      (nameInput === "" ||
        product.title.toLowerCase().includes(nameInput.toLowerCase())) &&
      (categoryInput === "" ||
        product.category.toLowerCase() === categoryInput.toLowerCase()) &&
      (priceMinInput === "" || product.price >= priceMinInput) &&
      (priceMaxInput === "" || product.price <= priceMaxInput)
    );
  });

  const fetchProducts = async () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section id="product">
      <div className="flex lg:min-h-[80vh] p-4 gap-5 flex-col lg:flex-row bg-gray-200">
        <div className="flex-1 bg-gray-800 rounded-3xl p-2">
          <div className="w-full flex flex-wrap lg:flex-col justify-center items-center gap-10 p-4">
            <h1 className="text-xl text-white font-bold">
              Products Search and filters{" "}
            </h1>
            <input
              type="text"
              placeholder="Search by name"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className="p-2 rounded-md"
            />

            <input
              type="text"
              placeholder="Search by category"
              value={categoryInput}
              onChange={(e) => setCategoryInput(e.target.value)}
              className="p-2 rounded-md"
            />

            <input
              type="number"
              placeholder="Minimum price"
              value={priceMinInput}
              onChange={(e) => setPriceMinInput(e.target.value)}
              className="p-2 rounded-md"
            />

            <input
              type="number"
              placeholder="Maximum price"
              value={priceMaxInput}
              onChange={(e) => setPriceMaxInput(e.target.value)}
              className="p-2 rounded-md"
            />
          </div>
        </div>
        <div className="flex-[4] flex flex-col">
          <div className="bg- gray-800 rounded-3xl p-2">
            {" "}
            <h1 className="font-bold text-3xl border-b-2">Products</h1>
            <div className="flex justify-center">
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-8 py-8">
                {filteredProducts?.map((product, i) => (
                  <div
                    key={i}
                    className="max-w-xs flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow "
                  >
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.image}
                        className="rounded-t-lg h-64"
                        alt={product.title}
                      />
                    </Link>
                    <div className="p-5">
                      <div className="flex justify-between gap-2">
                        <h5 className="mb-2 font-bold tracking-tight text-gray-900 ">
                          {product.title}
                        </h5>
                        <p className="text-xl"> {product.price}$</p>
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
                      {cart.find(
                        (cartproduct) => cartproduct.id === product.id
                      ) ? (
                        <div className="flex justify-between items-center">
                          <div className="flex gap-4 justify-center items-center bg-gray-700 rounded-lg">
                            <button
                              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-400"
                              onClick={() => increaseQuantity(product.id)}
                            >
                              +
                            </button>
                            {cart.map((p) =>
                              p.id === product.id ? (
                                <span className="text-white" key={p.id}>
                                  {" "}
                                  {p.qty}
                                </span>
                              ) : (
                                ""
                              )
                            )}
                            <button
                              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-400"
                              onClick={() => decreaseQuantity(product.id)}
                            >
                              -
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(product.id)}
                            type="submit"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-400"
                          >
                            <AiFillDelete />
                          </button>
                        </div>
                      ) : (
                        <button
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-400"
                          onClick={() => addToCart(product)}
                        >
                          Add to cart
                        </button>
                      )}
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
