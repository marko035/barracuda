import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AllVariations } from "../js/AllVariations";

function holders() {
  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cart);
  }, []);

  const imageContainer = useRef(null);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [imageNumber, setImageNumber] = useState(1);
  const [variant, setVariant] = useState("walnut");
  const totalImages = {
    walnut: 9,
    mahogany: 5,
  };
  const price = 69;

  const showSnackBar = (message) => {
    var snackBar = document.getElementById("snackbar");
    snackBar.textContent = message;
    snackBar.classList.toggle("show");
    setTimeout(function () {
      snackBar.classList.toggle("show");
    }, 3000);
  };

  const addToCart = () => {
    const id = `holder-${variant}`;

    if (!AllVariations[id]) {
      showSnackBar(
        "This variation of the product is not available at the moment."
      );
      return;
    }

    const item = {
      id,
      type: "holder",
      variant,
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
      <Header goldLogo={true} cart={cart} />

      <section className="glovesTopSection flex flex-col xl:flex-row min-h-screen px-6 py-20 xl:px-32 xl:pt-48">
        <div className="text-white text-xl xl:text-3xl xl:pr-10 font-extralight">
          <p className="mt-20 xl:mt-0">
            <span className="text-[#D9AF62]">
              PCH is Premium Cue Holder by Barracuda.
            </span>{" "}
            <br />
            <br /> We understand how much every pool player care for his
            equipment <br /> and wanted to create something different than
            current market. <br />
            <br /> PCH Cue Holders are made from{" "}
            <span className="font-bold">A grade Mahogany wood</span>, <br />
            <span className="font-bold">Stainless steel</span> plate and{" "}
            <span className="font-bold">real leather</span> packed in luxury box
            so it can be <br /> perfect gift for any pool buddy. <br />
            <br /> Package contains also{" "}
            <span className="font-bold">alcantara bag</span> with leather <br />
            Barracuda logo for better protection of PCH. .
          </p>
        </div>

        <div className="h-full text-xl xl:text-2xl text-center text-gray-400 flex-1 flex flex-col justify-center items-center gap-10 text-[#D9AF62]">
          <p className="text-white mt-20 xl:mt-[-30px]">
            Available in 2 materials
          </p>

          <div className="flex flex-col border-2 border-[#D9AF62] rounded-xl p-6">
            <img src="/walnut.svg" alt="Walnut" className="w-32 h-28" />
            <span>Walnut</span>
          </div>

          <div className="flex flex-col border-2 border-[#D9AF62] rounded-xl p-6">
            <img src="/mahogany.svg" alt="Mahogany" className="w-32 h-28" />
            <span>Mahogany</span>
          </div>
        </div>
      </section>

      <section className="flex py-10 p-6 xl:px-32 min-h-screen flex-col xl:flex-row">
        <div className="flex-1">
          <h1 className="text-[#212121] text-3xl font-light">
            Barracuda Billiard cue holder
          </h1>

          <div className="flex gap-x-2 text-gray-400 text-xs">
            <div
              style={{
                borderBottomColor:
                  variant === "walnut" ? "#D9AF62" : "transparent",
              }}
              className="py-1 cursor-pointer border-b-4 w-14"
              onClick={() => {
                setImageNumber(1);
                setVariant("walnut");
              }}
            >
              <span>Walnut</span>
              <div className="flex justify-center items-center h-12 bg-[#D9AF62]">
                {variant === "walnut" ? (
                  <span className="text-white text-3xl">&#10003;</span>
                ) : null}
              </div>
            </div>

            <div
              style={{
                borderBottomColor:
                  variant === "mahogany" ? "#82693a" : "transparent",
              }}
              className="py-1 cursor-pointer border-b-4 w-14"
              onClick={() => {
                setImageNumber(1);
                setVariant("mahogany");
              }}
            >
              <span>Mahogany</span>
              <div className="flex justify-center items-center h-12 bg-[#82693a]">
                {variant === "mahogany" ? (
                  <span className="text-white text-3xl">&#10003;</span>
                ) : null}
              </div>
            </div>
          </div>

          <img
            src={`/holders/${variant}-${imageNumber}.webp`}
            className="mt-4 w-[100%] xl:w-[600px] h-[auto] xl:h-[400px]"
            alt="Glove Preview"
          />

          <div className="flex items-center xl:ml-[-40px] before:none after:none">
            <div
              className="hidden xl:block w-[40px] h-[40px] mt-8 leftArrow cursor-pointer"
              onClick={() => previousImage()}
            ></div>

            <div
              className="flex gap-4 mt-8 flex-nowrap overflow-y-scroll w-full xl:w-[600px] imageCarousel cursor-pointer"
              ref={imageContainer}
            >
              {new Array(totalImages[variant]).fill().map((el, index) => (
                <img
                  key={index}
                  className={
                    "w-[100px] xl:w-[200px] h-auto border-black" +
                    (imageNumber === index + 1 ? " border" : "")
                  }
                  src={`/holders/${variant}-${index + 1}.webp`}
                  alt="Glove Preview"
                  onClick={() => setImageNumber(index + 1)}
                />
              ))}
            </div>

            <div
              className="hidden xl:block w-[40px] h-[40px] mt-8 rightArrow cursor-pointer"
              onClick={() => nextImage()}
            ></div>
          </div>
          <div className="flex justify-between text-md xl:text-2xl mt-2 xl:w-[600px]">
            <span>${price}.00</span>
            <span>FREE SHIPPING</span>
          </div>
        </div>

        <div className="flex-1 text-xs xl:text-xl">
          <div className="mt-32 xl:w-[500px] mx-auto">
            <div className="border-b-2 border-b-[#D9AF62] p-[10px] flex justify-between">
              {variant.toUpperCase()} CUE HOLDER
            </div>
            <div className="border-b-2 border-b-[#D9AF62] p-[10px] flex justify-between">
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
              className="w-full border-2 border-transparent bg-[#D9AF62] rounded-md p-2 text-white mt-10"
            >
              add to cart
            </button>
            <Link href="/cart" passHref>
              <button className="w-full text-[#D9AF62] bg-white border-2 border-[#D9AF62] rounded-md mt-6 p-2">
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
      </section>

      <div id="snackbar"></div>

      <Footer darkBackground={false} goldFooter={true} />
    </>
  );
}

export default holders;
