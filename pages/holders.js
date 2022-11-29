import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState } from "react";

function holders() {
  const [quantity, setQuantity] = useState(1);
  const [imageNumber, setImageNumber] = useState(1);
  const [variant, setVariant] = useState("walnut");
  const totalImages = {
    walnut: 9,
    mahogany: 5,
  };
  const price = 80;

  return (
    <>
      <Header goldLogo={true} />

      <section className="glovesTopSection flex flex-col xl:flex-row min-h-screen px-6 py-20 xl:px-32 xl:pt-48">
        <div className="text-white text-xl xl:text-3xl xl:pr-10 font-extralight">
          <p className="">
            <span className="text-[#C7A15A]">
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

        <div className="h-full text-xl xl:text-2xl text-center text-gray-400 flex-1 flex flex-col justify-center items-center gap-10 text-[#C7A15A]">
          <p className="text-white mt-10 xl:mt-[-30px]">
            Available in 2 materials
          </p>

          <div className="flex flex-col border-2 border-[#C7A15A] rounded-xl p-6">
            <img src="/walnut.svg" alt="Walnut" className="w-32 h-28" />
            <span>Walnut</span>
          </div>

          <div className="flex flex-col border-2 border-[#C7A15A] rounded-xl p-6">
            <img src="/mahogany.svg" alt="Mahogany" className="w-32 h-28" />
            <span>Mahogany</span>
          </div>
        </div>
      </section>

      <section className="flex py-10 p-6 xl:px-32 min-h-screen flex-col xl:flex-row">
        <div className="flex-1">
          <h1 className="text-[#C7A15A] text-3xl font-light">
            Barracuda Billiard cue holder
          </h1>

          <div className="flex gap-x-2 text-gray-400 text-xs">
            <div
              style={{
                borderBottomColor:
                  variant === "walnut" ? "#C7A15A" : "transparent",
              }}
              className="py-1 cursor-pointer border-b-4 w-14"
              onClick={() => {
                setImageNumber(1);
                setVariant("walnut");
              }}
            >
              <span>Walnut</span>
              <div className="flex justify-center items-center h-12 bg-[#C7A15A]">
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

          <div className="flex items-center xl:ml-[-80px] before:none after:none">
            <div className="hidden xl:block w-20 h-20 mt-8 leftArrow"></div>

            <div className="flex gap-4 mt-8 flex-nowrap overflow-y-scroll w-full xl:w-[600px] imageCarousel cursor-pointer">
              {new Array(totalImages[variant]).fill().map((el, index) => (
                <img
                  key={index}
                  className="w-[100px] xl:w-[200px] h-auto"
                  src={`/holders/${variant}-${index + 1}.webp`}
                  alt="Glove Preview"
                  onClick={() => setImageNumber(index + 1)}
                />
              ))}
            </div>

            <div className="hidden xl:block w-20 h-20 mt-8 rightArrow"></div>
          </div>
          <div className="flex justify-between text-md xl:text-2xl mt-2 xl:w-[600px]">
            <span>$80.00</span>
            <span>FREE SHIPPING</span>
          </div>
        </div>

        <div className="flex-1 text-xs xl:text-xl">
          <div className="mt-20 xl:w-[500px] mx-auto">
            <div className="border-b-2 border-b-[#C7A15A] p-[10px] flex justify-between">
              {variant.toUpperCase()} CUE HOLDER
            </div>
            <div className="border-b-2 border-b-[#C7A15A] p-[10px] flex justify-between">
              <span className="mr-10 flex-1">QUANTITY</span>

              <div className="flex items-center gap-4">
                <span
                  className="cursor-pointer w-6 h-6 rounded-full border flex items-center justify-center"
                  onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
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

              <span>{quantity * price}$</span>
            </div>

            <button className="w-full border-2 border-transparent bg-[#C7A15A] rounded-md p-2 text-white mt-10">
              add to cart
            </button>
            <button className="w-full text-[#C7A15A] bg-white border-2 border-[#C7A15A] rounded-md mt-6 p-2">
              go to cart
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
        </div>
      </section>

      <Footer darkBackground={false} goldFooter={true} />
    </>
  );
}

export default holders;