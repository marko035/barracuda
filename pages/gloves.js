import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState } from "react";

function gloves() {
  const [quantity, setQuantity] = useState(1);
  const [imageNumber, setImageNumber] = useState(1);
  const [variant, setVariant] = useState("black");
  const price = 25;
  const gloveVariants = [
    {
      name: "Black",
      color: "#000000",
      variant: "black",
    },
    {
      name: "Red",
      color: "#E20623",
      variant: "red",
    },
    {
      name: "Sky blue",
      color: "#03CCFF",
      variant: "sky",
    },
    {
      name: "Dark blue",
      color: "#2869C8",
      variant: "dark",
    },
    {
      name: "Navy blue",
      color: "#152C40",
      variant: "navy",
    },
    {
      name: "Orange",
      color: "#FDAD79",
      variant: "orange",
    },
    {
      name: "Purple",
      color: "#622773",
      variant: "purple",
    },
    {
      name: "Green",
      color: "#41B541",
      variant: "green",
    },
    {
      name: "Yellow",
      color: "#F4EE27",
      variant: "yellow",
    },
    {
      name: "Grey",
      color: "#AAAAAA",
      variant: "grey",
    },
  ];

  return (
    <>
      <Header />

      <section className="glovesTopSection flex flex-col xl:flex-row min-h-screen px-6 py-20 xl:px-32 xl:pt-48">
        <div className="text-white text-xl xl:text-3xl xl:pr-10 font-extralight">
          <p className="pb-8">
            <span className="text-green-600">
              Barracuda billiard & pool gloves
            </span>{" "}
            are <br />{" "}
            <span className="font-bold">
              the ultimate stroke maximizing accessory
            </span>
            .
          </p>

          <p className="pb-8">
            <span className="font-bold">Hand made in Serbia</span> (Europe) with
            carefully chosen materials <br /> for extreme comfort and dexterity.
          </p>

          <p className="pb-8">
            Offering an{" "}
            <span className="font-bold">ultra-high-quality stylish</span>{" "}
            billiard glove. <br />
            In a multitude of colors to meet every player's artistic
            preferences. <br />
            Industrial grade hook and loop{" "}
            <span className="font-bold">velcro wrist latch</span> for improved{" "}
            <br />
            comfort and fit.
          </p>

          <p className="pb-8">
            <span className="font-bold">Double-stitched, fingerless</span>{" "}
            design for a lighter durable experience. <br />
            Ventilated <span className="font-bold">
              4-way stretch mesh
            </span>{" "}
            material on palm side <br /> with an{" "}
            <span className="font-bold">extra-durable</span> pad at wear point.
          </p>
        </div>

        <div className="h-full text-xl xl:text-2xl text-center text-gray-400">
          <p className="text-white">
            Available in 10 colors you can choose from
          </p>

          <div className="flex flex-col justify-items-stretch mt-6">
            <div className="grid grid-cols-3 gap-x-3 items-center pt-6">
              <span>Black</span>
              <div className="flex justify-center gap-4">
                <div className="h-16 w-16 bg-black"></div>
                <div className="h-16 w-16 bg-orange-400"></div>
              </div>
              <span>Orange</span>
            </div>

            <div className="grid grid-cols-3 gap-x-3 items-center pt-6">
              <span>Red</span>
              <div className="flex justify-center gap-4">
                <div className="h-16 w-16 bg-red-700"></div>
                <div className="h-16 w-16 bg-purple-700"></div>
              </div>
              <span>Purple</span>
            </div>

            <div className="grid grid-cols-3 gap-x-3 items-center pt-6">
              <span>Sky Blue</span>
              <div className="flex justify-center gap-4">
                <div className="h-16 w-16 bg-sky-300"></div>
                <div className="h-16 w-16 bg-green-600"></div>
              </div>
              <span>Green</span>
            </div>

            <div className="grid grid-cols-3 gap-x-3 items-center pt-6">
              <span>Dark Blue</span>
              <div className="flex justify-center gap-4">
                <div className="h-16 w-16 bg-blue-900"></div>
                <div className="h-16 w-16 bg-yellow-400"></div>
              </div>
              <span>Yellow</span>
            </div>

            <div className="grid grid-cols-3 gap-x-3 items-center pt-6">
              <span>Navy Blue</span>
              <div className="flex justify-center gap-4">
                <div className="h-16 w-16 bg-indigo-900"></div>
                <div className="h-16 w-16 bg-gray-500"></div>
              </div>
              <span>Grey</span>
            </div>
          </div>
        </div>
      </section>

      <section className="flex py-10 p-6 xl:px-32 min-h-screen flex-col xl:flex-row">
        <div className="flex-1">
          <h1 className="text-green-600 text-3xl font-light">
            Barracuda Billiard glove
          </h1>

          <div className="grid grid-cols-5 xl:grid-cols-10 gap-x-2 w-[300ox] xl:w-[642px] text-gray-400 xl:h-[70px] text-xs cursor-pointer">
            {gloveVariants.map((glove) => (
              <div
                key={glove.name}
                className="py-1 cursor-pointer border-b-4"
                style={{
                  borderBottomColor:
                    variant === glove.variant ? glove.color : "transparent",
                }}
                onClick={() => setVariant(glove.variant)}
              >
                <span>{glove.name}</span>
                <div
                  style={{ backgroundColor: glove.color }}
                  className="flex justify-center items-center h-12"
                >
                  {variant === glove.variant ? (
                    <span className="text-white text-3xl">&#10003;</span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          <img
            src={`/gloves/${variant}-${imageNumber}.webp`}
            className="mt-4 w-[100%] xl:w-[642px] h-[auto] xl:h-[400px]"
            alt="Glove Preview"
          />

          <div className="flex items-center xl:ml-[-80px] before:none after:none">
            <div className="hidden xl:block w-20 h-20 mt-8 leftArrow"></div>

            <div
              key={variant}
              className="flex gap-4 mt-8 flex-nowrap overflow-y-scroll w-full xl:w-[642px] imageCarousel cursor-pointer"
            >
              <img
                className="w-[100px] xl:w-[214px] h-auto"
                src={`/gloves/${variant}-1.webp`}
                alt="Glove Preview"
                onClick={() => setImageNumber(1)}
              />
              <img
                className="w-[100px] xl:w-[214px] h-auto"
                src={`/gloves/${variant}-2.webp`}
                alt="Glove Preview"
                onClick={() => setImageNumber(2)}
              />
              <img
                className="w-[100px] xl:w-[214px] h-auto"
                src={`/gloves/${variant}-3.webp`}
                alt="Glove Preview"
                onClick={() => setImageNumber(3)}
              />
              <img
                className="w-[100px] xl:w-[214px] h-auto"
                src={`/gloves/${variant}-4.webp`}
                alt="Glove Preview"
                onClick={() => setImageNumber(4)}
              />
            </div>

            <div className="hidden xl:block w-20 h-20 mt-8 rightArrow"></div>
          </div>
          <div className="flex justify-between text-md xl:text-2xl mt-2 xl:w-[642px]">
            <span>$25.00</span>
            <span>FREE SHIPPING</span>
          </div>
        </div>

        <div className="flex-1 text-xs xl:text-xl">
          <div className="mt-20 xl:w-[500px] mx-auto">
            <div className="border-b-2 border-b-green-600 p-[10px] flex justify-between">
              <span className="mr-10 flex-1">CHOOSE HAND</span>
              <div className="flex gap-2">
                <div className="mr-2">
                  <input
                    className="mr-2"
                    type="radio"
                    name="hand"
                    value="left"
                    id="leftHand"
                  />
                  <label htmlFor="leftHand">left</label>
                </div>
                <div className="mr-2">
                  <input
                    className="mr-2"
                    type="radio"
                    name="hand"
                    value="right"
                    id="rightHand"
                  />
                  <label htmlFor="rightHand">right</label>
                </div>
              </div>
            </div>

            <div className="border-b-2 border-b-green-600 p-[10px] flex justify-between">
              <span className="mr-0">CHOOSE SIZE</span>
              <div className="flex gap-2">
                <div className="mr-2">
                  <input
                    className="mr-2"
                    type="radio"
                    name="size"
                    value="SMALL"
                    id="smallSize"
                  />
                  <label htmlFor="smallSize">small</label>
                </div>

                <div className="mr-2">
                  <input
                    className="mr-2"
                    type="radio"
                    name="size"
                    value="medium"
                    id="mediumSize"
                  />
                  <label htmlFor="mediumSize">medium</label>
                </div>

                <div className="mr-2">
                  <input
                    className="mr-2"
                    type="radio"
                    name="size"
                    value="large"
                    id="largeSize"
                  />
                  <label htmlFor="largeSize">large</label>
                </div>
              </div>
            </div>

            <div className="border-b-2 border-b-green-600 p-[10px] flex justify-between">
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

            <button className="w-full border-2 border-transparent bg-green-600 rounded-md p-2 text-white mt-10">
              add to cart
            </button>
            <button className="w-full text-green-600 bg-white border-2 border-green-600 rounded-md mt-6 p-2">
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

      <Footer darkBackground={false} goldFooter={false} />
    </>
  );
}

export default gloves;
