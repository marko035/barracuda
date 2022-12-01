import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";
import { useEffect } from "react";

function cart() {
  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cart);
  }, []);

  const [cart, setCart] = useState([]);

  const setQuantity = (item, change) => {
    const newCart = cart.map((currentItem) => {
      if (currentItem.id !== item.id) return currentItem;

      return {
        ...currentItem,
        quantity: currentItem.quantity + change,
      };
    });

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeItem = (item) => {
    const newCart = cart.filter((currentItem) => currentItem.id !== item.id);

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeAll = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <>
      <Header cart={cart} />

      <section className="bg-[#212121] flex h-[400px] p-32 text-white h-screen">
        {cart.length ? (
          <div className="flex-1 ">
            <div
              className="flex justify-end text-red-500"
              style={{ display: cart.length ? "flex" : "none" }}
            >
              <span
                className="cursor-pointer mr-12"
                onClick={() => removeAll()}
              >
                clear all
              </span>
            </div>
            <div className="flex flex-col font-thin text-2xl h-[700px] overflow-y-scroll whitespace-nowrap">
              {cart.map((item, index) => (
                <div className="flex" key={index}>
                  <div className="flex-1 bg-[#232323] py-4 px-6 my-2">
                    <div className="mb-4">
                      Barracuda Billiard
                      <span className="text-[#00B901]"> {item.type}</span>
                    </div>
                    <div className="flex">
                      {item.type === "holder" ? (
                        <img
                          src={`/${item.variant}.svg`}
                          alt={item.variant}
                          className="w-32"
                        />
                      ) : (
                        <div
                          style={{ backgroundColor: item.variant }}
                          className="w-32 flex items-center justify-center text-5xl mr-4"
                        >
                          <span>{item.size.toUpperCase()}</span>
                        </div>
                      )}
                      <div className="flex flex-col justify-between flex-1">
                        <div>{item.hand || item.variant}</div>
                        <div className="flex justify-between">
                          <span className="text-[#00B901]">free shipping</span>
                          <span>${item.price * item.quantity}.00</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-4 ml-8">
                        <span
                          onClick={() => setQuantity(item, 1)}
                          className="cursor-pointer w-6 h-6 rounded-full border flex items-center justify-center"
                        >
                          +
                        </span>
                        <span>{item.quantity}</span>
                        <span
                          onClick={() => setQuantity(item, -1)}
                          className="cursor-pointer w-6 h-6 rounded-full border flex items-center justify-center"
                        >
                          -
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="text-red-500 flex justify-center items-center mx-4 cursor-pointer"
                    onClick={() => removeItem(item)}
                  >
                    X
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-3xl">Shopping Cart is empty</div>
        )}

        <div className="flex-1"></div>
      </section>

      <Footer darkBackground={true} goldFooter={false} />
    </>
  );
}

export default cart;
