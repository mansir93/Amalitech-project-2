import React, { useContext } from "react";
import Layout from "../Components/Layout";
import { Context } from "../utils/Context";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useContext(Context);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "continue",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/invoice");
      }
    });
    clearCart();
  };
  return (
    <Layout>
      <div className="pt-8 border-t-2 bg-gray-200 flex flex-col lg:p-4">
        <div className="h-fit w-full flex items-center gap-3 text-sm font-semibold">
          <span>Shop</span>
          <BiRightArrowAlt />
          <span className="font-bold text-base">Payment</span>
          <BiRightArrowAlt />
          <span>Delivery</span>
        </div>
        <div className="lg:min-h-[70vh] flex flex-wrap flex-col lg:flex-row items- center justify-center lg:p-8 gap-4 ">
          <div className="">
            <div className="max-w-md mx-auto pt-4">
              <form onSubmit={handleSubmit}>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold"> Payment Method</h2>
                  <a href="!" className="text-orange-400 underline">
                    Redeem a gift card
                  </a>
                </div>
                <div className=" bg-gray-400 p-6 rounded-lg">
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium">
                      Card Number
                    </label>
                    <input
                      type="number"
                      minLength={12}
                      maxLength={18}
                      className="border border-orange-400 outline-none rounded px-3 py-2 w-full"
                      placeholder="xxxx-xxx-xxxx-xxxx"
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        required
                        className="border outline-none rounded px-3 py-2 w-full"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium">
                        CVV
                      </label>
                      <input
                        type="number"
                        required
                        className="border outline-none rounded px-3 py-2 w-full"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
                <div className="py-4">
                  <button
                    type="submit"
                    className="w-full text-white font-bold py-2 rounded-lg bg-orange-400 px-4 hover:bg-orange-500 transition duration-300"
                  >
                    Buy Now
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className=" flex flex-col justify-between gap-2 border rounded-md p-4 border-gray-900">
            <div className="max-h-80 overflow-y-auto bg-white border-b-2 border-gray-900">
              {cart?.map((item) => (
                <tbody>
                  <tr className="border-b-2 border-gray-300 " key={item.id}>
                    <th scope="row" className="px-6 py-4">
                      <img
                        src={item?.image}
                        alt={item.name}
                        className="text-center mx-auto h-20 w-20"
                      />
                    </th>
                    <th scope="row" className="px-6 py-4 ">
                      {item.title.length > 25
                        ? item.title.slice(0, 25) + "..."
                        : item.title}
                    </th>
                    <td className="px-6 py-4 ">X{item.qty}</td>

                    <td className="px-6 py-4">
                      {(item.price * item.qty).toFixed(2)}$
                    </td>
                  </tr>
                </tbody>
              ))}
            </div>
            <div className="p-4">
              <p>
                Subtotal:{" "}
                <span>
                  {cart
                    ?.reduce((acc, p) => acc + p.price * p.qty, 0)
                    .toFixed(2)}
                  $
                </span>
              </p>
              <p>
                Discount: <span>0</span>
              </p>
              <p>
                Tax: <span>6%</span>
              </p>
              <p>
                Delivery per item: <span>24.4$</span>
              </p>
              <p>
                Total:{" "}
                <span>
                  {" "}
                  {cart
                    ?.reduce((acc, p) => 24.4 + acc + p.price * p.qty, 0)
                    .toFixed(2)}
                  $
                </span>
              </p>
            </div>
            <div className="w-full">
              <Link to="/cart" className="text-orange-400 text-center">
                Edit Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
