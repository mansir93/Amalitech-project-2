import { AiFillDelete } from "react-icons/ai";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../utils/Context";
import { useParams } from "react-router-dom";
import Layout from "../Components/Layout";
const Product = () => {
  const { id } = useParams();
  const {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(Context);
  const [product, setProduct] = useState({});
  const fetchProduct = async () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchProduct();
  },[product]);
  return (
    <Layout>
      <div className="mt-4 lg:min-h-[80vh] flex flex-wrap flex-col lg:flex-row items-center justify-center bg-blend-multiply bg-gray-50 lg:p-4">
        <img
          src={product?.image}
          className="rounded-t-lg max-h-96"
          alt={product?.title}
        />
        <div className="p-2 lg:p-20 max-w-[50%] flex flex-col justify-between gap-2">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {product?.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700">
            {product?.description}
          </p>
          <p className="text-xl flex gap-5">
            {"Rating " + product?.rating?.rate}
            <span>({product?.rating?.count})</span>
          </p>
          <div className="flex justify-between gap-2">
            <p>
              <span className="font-bold">Type</span> {product.category}
            </p>
            <p className="text-xl">
              <span className="font-bold">Price: </span> {product?.price}$
            </p>
            {cart.map(
              (p) =>
                p?.id === product?.id && (
                  <p className="text-xl" key={p.id}>
                    <span className="font-bold">Total: </span>
                    {p?.qty * p.price}$
                  </p>
                )
            )}
          </div>
          {cart.find((cartproduct) => cartproduct?.id === product?.id) ? (
            <div className="flex justify-between items-center py-4">
              <div className="min-w-[40%] flex gap-4 justify-between items-center bg-gray-700 rounded-lg">
                <button
                  className="inline-flex items-center px-3 py-2 text-sm font-bold text-center text-white bg-orange-500 rounded-lg hover:bg-orange-400"
                  onClick={() => increaseQuantity(product?.id)}
                >
                  +
                </button>
                {cart.map(
                  (p) =>
                    p?.id === product?.id && (
                      <div>
                        <span className="text-white">{p?.qty}</span>
                      </div>
                    )
                )}
                <button
                  className="px-3 py-2 text-sm font-bold text-center text-white bg-orange-500 rounded-lg hover:bg-orange-400"
                  onClick={() => decreaseQuantity(product?.id)}
                >
                  -
                </button>
              </div>
              <div>
                <button
                  onClick={() => removeFromCart(product?.id)}
                  type="submit"
                  className="font-bold px-3 py-2 text-sm text-center text-white bg-orange-500 rounded-lg hover:bg-orange-400"
                >
                  <AiFillDelete />
                </button>
              </div>
            </div>
          ) : (
            <button
              className=" mt-4 px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-400"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Product;
