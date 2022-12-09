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

      const newQuantity =
        currentItem.quantity + change < 0 ? 0 : currentItem.quantity + change;
      return {
        ...currentItem,
        quantity: newQuantity,
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

  const getTotal = () => {
    return cart.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
  };

  const buy = () => {};

  return (
    <>
      <Header cart={cart} />

      <section className="shoppingCart bg-[#212121] flex flex-col xl:flex-row p-6 pt-20 xl:p-32 xl:pb-0 text-white">
        {cart.length ? (
          <div className="flex-1">
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
            <div className="flex flex-col font-thin text-sm xl:text-2xl xl:h-[70vh] xl:overflow-y-scroll xl:whitespace-nowrap">
              {cart.map((item, index) => (
                <div className="flex w-full" key={index}>
                  <div className="flex-1 bg-[#272727] py-4 px-6 my-2">
                    <div className="mb-4">
                      Barracuda Billiard
                      <span className="text-[#00B901]"> {item.type}</span>
                    </div>
                    <div className="flex">
                      {item.type === "holder" ? (
                        <img
                          src={`/${item.variant}.svg`}
                          alt={item.variant}
                          className="w-20 xl:w-32 mr-4"
                        />
                      ) : (
                        <div
                          style={{ backgroundColor: item.variant }}
                          className="w-20 xl:w-32 flex items-center justify-center text-5xl mr-4"
                        >
                          <span>{item.size.toUpperCase()}</span>
                        </div>
                      )}
                      <div className="flex flex-col justify-between flex-1">
                        <div>{item.hand || item.variant}</div>
                        <div className="flex flex-col-reverse xl:flex-row justify-between">
                          <span className="text-[#00B901] text-xs xl:text-2xl mr-4">
                            free shipping
                          </span>
                          <span>${item.price * item.quantity}.00</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-2 ml-2">
                        <span
                          onClick={() => setQuantity(item, 1)}
                          className="cursor-pointer w-6 h-6 rounded-full border flex items-center justify-center"
                        >
                          +
                        </span>
                        <span>{item.quantity}</span>
                        <span
                          onClick={() => {
                            if (item.quantity === 1) return;

                            setQuantity(item, -1);
                          }}
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
          <div className="text-3xl w-full text-center my-20">
            Shopping Cart is empty
          </div>
        )}

        {cart.length ? (
          <div className="flex-1 flex flex-col items-center justify-center mt-20 xl:mt-[-100px] xl:h-screen">
            <div className="text-4xl">Total: ${getTotal()}.00</div>

            <button
              onClick={() => buy()}
              className="w-full xl:w-1/2 border-2 border-transparent bg-[#00B901] rounded-md p-2 text-white mt-10"
            >
              buy
            </button>

            <div className="w-full flex justify-center mt-10 gap-2">
              <img
                src="/applePay.png"
                className="w-[50px] xl:w-[90px]"
                alt="ApplePay"
              />
              <img
                src="/googlePay.png"
                className="w-[50px] xl:w-[90px]"
                alt="GooglePay"
              />
              <img
                src="/paypal.png"
                className="w-[50px] xl:w-[90px]"
                alt="Paypal"
              />
            </div>

            <div className="w-full flex justify-center mt-2 gap-2">
              <img
                src="/visa.png"
                className="w-[50px] xl:w-[90px]"
                alt="Visa"
              />
              <img
                src="/mastercard.png"
                className="w-[50px] xl:w-[90px]"
                alt="Mastercard"
              />
            </div>
          </div>
        ) : null}
      </section>

      <Footer darkBackground={true} goldFooter={false} />
    </>
  );
}

export default cart;
