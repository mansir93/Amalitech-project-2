import React, { useContext } from "react";
import Layout from "../Components/Layout";
import { AiFillDelete } from "react-icons/ai";
import { Context } from "../utils/Context";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useContext(Context);
  console.log(cart);
  return (
    <Layout>
      <div className="bg-gray-200 flex flex-wrap flex-col lg:flex-row items-center justify-center lg:p-4">
        <div className="w-full flex p-4 ">
          <button
            className="w-full bg-orange-400 text-white rounded-md p-2 font-bold"
            onClick={() => clearCart()}
          >
            Clear cart
          </button>
        </div>
        <div className="lg:min-h-[70vh] w-full overflow-y-auto">
          <div className="relative p-4 sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-900 bg-gray-100">
              <thead className="text-xs uppercase ">
                <tr>
                  <th scope="col" className="px-6 py-3 ">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Product Price(Gh)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total Cost (Gh)
                  </th>
                </tr>
              </thead>
              {cart.length === 0 ? (
                <div className="w-full text-center text-xl font-bold">
                  Cart is Empty
                </div>
              ) : (
                <tbody>
                  {cart?.map((item) => (
                    <tr className="border-b-2 border-gray-300 " key={item.id}>
                      <th scope="row" className="px-6 py-4">
                        <Link to={`/product/${item.id}`}>
                          <img
                            src={item?.image}
                            alt={item.name}
                            className="text-center mx-auto h-20 w-20"
                          />
                        </Link>
                      </th>
                      <th scope="row" className="text-xl px-6 py-4 ">
                        {item.title}
                      </th>
                      <td className="px-6 py-4 ">{item.price}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col justify-between items-center py-2 gap-2">
                          <div className="min-w-[40%] flex gap-4 justify-between items-center bg-gray-700 rounded-lg">
                            <button
                              className="inline- flex items-center px-3 py-2 text-sm font-bold text-center text-white bg-orange-500 rounded-lg hover:bg-orange-400"
                              onClick={() => increaseQuantity(item?.id)}
                            >
                              +
                            </button>
                            {cart.map(
                              (p) =>
                                p?.id === item?.id && (
                                  <span className="text-white">{p?.qty}</span>
                                )
                            )}
                            <button
                              className="px-3 py-2 text-sm font-bold text-center text-white bg-orange-500 rounded-lg hover:bg-orange-400"
                              onClick={() => decreaseQuantity(item?.id)}
                            >
                              -
                            </button>
                          </div>
                          <div>
                            <button
                              onClick={() => removeFromCart(item?.id)}
                              type="submit"
                              className="font-bold px-3 py-2.5 text-sm text-center text-white bg-orange-500 rounded-lg hover:bg-orange-400"
                            >
                              <AiFillDelete />
                            </button>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        {(item.price * item.qty).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
        <div className="w-full flex justify-end gap-4 p-4 text-orange-400 text-xl font-bold">
          Sub-Total:
          <span>
            {cart?.reduce((acc, p) => acc + p.price * p.qty, 0).toFixed(2)}
          </span>
        </div>
        <hr />
        {cart.length !== 0 && (
          <div className="w-full flex p-4">
            <Link
              to="/checkout"
              className="w-full bg-orange-400 text-white text-center rounded-md p-2 font-bold"
            >
              Proceed to Check-Out
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
