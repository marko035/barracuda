import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AllVariations } from "../js/AllVariations";

function breaktip() {
  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cart);
  }, []);

  const imageContainer = useRef(null);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [imageNumber, setImageNumber] = useState(1);
  const totalImages = 5;
  const price = 22;

  const showSnackBar = (message) => {
    var snackBar = document.getElementById("snackbar");
    snackBar.textContent = message;
    snackBar.classList.toggle("show");
    setTimeout(function () {
      snackBar.classList.toggle("show");
    }, 3000);
  };

  const addToCart = () => {
    const id = `breaktip`;

    if (!AllVariations[id]) {
      showSnackBar(
        "This variation of the product is not available at the moment."
      );
      return;
    }

    const item = {
      id,
      type: "breaktip",
      quantity,
      price,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartItem = cart.find((cartItem) => cartItem.id === item.id);
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cart.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart);

    showSnackBar("Product has been added to the cart.");
  };

  const nextImage = () => {
    const childArray = Array.from(imageContainer.current.childNodes);

    const nextImageNumber =
      imageNumber === childArray.length ? 1 : imageNumber + 1;

    setImageNumber(nextImageNumber);

    childArray[nextImageNumber - 1].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  const previousImage = () => {
    const childArray = Array.from(imageContainer.current.childNodes);

    const previousImageNumber =
      imageNumber === 1 ? childArray.length : imageNumber - 1;

    setImageNumber(previousImageNumber);

    childArray[previousImageNumber - 1].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return (
    <>
      <Header cart={cart} logoColor="#B6917F" logoImage="logo-bronze.svg" />

      <section className="glovesTopSection flex flex-col min-h-screen px-6 py-20 xl:px-32 xl:pt-48 items-center text-center text-white pb-0">
        <div className="text-white text-xl xl:text-3xl xl:pr-10 font-extralight">
          <p className="mt-20 xl:mt-0">
            Unleash the power of innovation with{" "}
            <span className="text-[#B6917F]">Barracuda FLEX Break Tip</span>!
            <br />
            <br /> Crafted using a fusion of composite materials,
            <br /> our revolutionary tip delivers exceptional energy and precise
            control for the ultimate break shot experience.
            <br />
            <br />
            Unlock your full potential with the next generation of break tips -
            the choice of professionals worldwide!
            <br />
          </p>
        </div>

        <div className="flex-1 mt-20">
          <img
            src={`/breaktip/breaktip-${imageNumber + 1}.jpg`}
            className="mt-4 w-[100%] xl:w-[600px] h-[auto] xl:h-[400px]"
            alt="Glove Preview"
          />

          <div className="flex items-center xl:ml-[-40px] before:none after:none">
            <div
              className="hidden xl:block w-[40px] h-[40px] mt-8 breaktip leftArrow cursor-pointer"
              onClick={() => previousImage()}
            ></div>

            <div
              className="flex gap-4 mt-8 flex-nowrap overflow-y-scroll w-full xl:w-[600px] imageCarousel cursor-pointer"
              ref={imageContainer}
            >
              {new Array(totalImages).fill().map((el, index) => (
                <img
                  key={index}
                  className={
                    "w-[100px] xl:w-[200px] h-auto border-black" +
                    (imageNumber === index + 2 ? " border" : "")
                  }
                  src={`/breaktip/breaktip-${index + 2}.jpg`}
                  alt="Glove Preview"
                  onClick={() => setImageNumber(index + 1)}
                />
              ))}
            </div>

            <div
              className="hidden xl:block w-[40px] h-[40px] mt-8 breaktip rightArrow cursor-pointer"
              onClick={() => nextImage()}
            ></div>
          </div>
          <div className="flex justify-between text-md xl:text-2xl mt-2 xl:w-[600px]">
            <span>${price}.00</span>
            <span>FREE SHIPPING in Continental USA</span>
          </div>
        </div>

        <div className="flex-1 text-xs xl:text-xl mb-48 text-left">
          <div className="mt-32 xl:w-[500px] mx-auto">
            <div className="border-b-2 border-b-[#B6917F] p-[10px] flex justify-between">
              <span className="mr-10 flex-1">QUANTITY</span>

              <div className="flex items-center gap-4">
                <span
                  className="cursor-pointer w-6 h-6 rounded-full border flex items-center justify-center"
                  onClick={() => {
                    if (quantity === 1) return;

                    setQuantity(quantity - 1);
                  }}
                >
                  -
                </span>
                <span>{quantity}</span>
                <span
                  className="cursor-pointer w-6 h-6 rounded-full border flex items-center justify-center"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </span>
              </div>
            </div>

            <div className="p-[10px] flex justify-between">
              <span className="mr-10 flex-1">FINAL TOTAL</span>

              <span>${quantity * price}</span>
            </div>

            <button
              onClick={() => addToCart()}
              className="w-full border-2 border-transparent bg-[#B6917F] rounded-md p-2 text-white mt-10"
            >
              add to cart
            </button>
            <Link href="/cart" passHref>
              <button className="w-full text-[#B6917F] bg-white border-2 border-[#B6917F] rounded-md mt-6 p-2">
                go to cart
              </button>
            </Link>

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
        </div>

        <Footer
          darkBackground={false}
          footerColor="#B6917F"
          footerImage="bronzeFooter.svg"
        />
      </section>

      <div id="snackbar"></div>
    </>
  );
}

export default breaktip;
