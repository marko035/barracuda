import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AllVariations } from "../js/AllVariations";

function gloves() {
  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cart);
  }, []);

  const imageContainer = useRef(null);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [imageNumber, setImageNumber] = useState(1);
  const [variant, setVariant] = useState("#000000");
  const [hand, setHand] = useState("left");
  const [size, setSize] = useState("m");
  const price = 25;
  const gloveVariants = [
    {
      name: "Black",
      color: "#000000",
      availableSizes: ["m", "l"],
    },
    {
      name: "Red",
      color: "#E20623",
      availableSizes: ["s", "m", "l"],
    },
    {
      name: "Sky blue",
      color: "#03CCFF",
      availableSizes: ["m", "l"],
    },
    {
      name: "Dark blue",
      color: "#2869C8",
      availableSizes: ["m", "l"],
    },
    {
      name: "Navy blue",
      color: "#152C40",
      availableSizes: ["m"],
    },
    {
      name: "Orange",
      color: "#FDAD79",
      availableSizes: ["s", "m", "l"],
    },
    {
      name: "Purple",
      color: "#622773",
      availableSizes: ["s", "m", "l"],
    },
    {
      name: "Green",
      color: "#41B541",
      availableSizes: ["m"],
    },
    {
      name: "Yellow",
      color: "#F4EE27",
      availableSizes: ["m"],
    },
    {
      name: "Grey",
      color: "#AAAAAA",
      availableSizes: ["m", "l"],
    },
  ];

  const showSnackBar = (message) => {
    var snackBar = document.getElementById("snackbar");
    snackBar.textContent = message;
    snackBar.classList.toggle("show");
    setTimeout(function () {
      snackBar.classList.toggle("show");
    }, 3000);
  };

  const addToCart = () => {
    const id = `glove-${variant}-${hand}-${size}`;

    if (!AllVariations[id]) {
      showSnackBar(
        "This variation of the product is not available at the moment."
      );
      return;
    }

    const item = {
      id,
      type: "glove",
      variant,
      hand,
      size,
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
      <Header cart={cart} />

      <section className="glovesTopSection flex flex-col xl:flex-row min-h-screen px-6 py-20 xl:px-32 xl:pt-36">
        <div className="text-white text-xl xl:text-3xl xl:pr-10 font-extralight">
          <p className="pb-8 mt-20 xl:mt-0">
            <span className="text-[#00B901]">
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

        <div className="h-full text-xl xl:text-2xl text-center text-gray-400 flex-1 flex flex-col justify-center items-center gap-10 text-[#D9AF62]">
          <p className="text-white mt-20 xl:mt-[-30px]">
            Available in 10 colors you can choose from
          </p>

          <div className="flex flex-col justify-items-stretch">
            <div className="grid grid-cols-3 gap-x-3 items-center pt-6">
              <span>Black</span>
              <div className="flex justify-center gap-4">
                <div className="h-16 w-16 bg-[#000000]"></div>
                <div className="h-16 w-16 bg-[#FDAD79]"></div>
              </div>
              <span>Orange</span>
            </div>

            <div className="grid grid-cols-3 gap-x-3 items-center pt-6">
              <span>Red</span>
              <div className="flex justify-center gap-4">
                <div className="h-16 w-16 bg-[#E20623]"></div>
                <div className="h-16 w-16 bg-[#622773]"></div>
              </div>
              <span>Purple</span>
            </div>

            <div className="grid grid-cols-3 gap-x-3 items-center pt-6">
              <span>Sky Blue</span>
              <div className="flex justify-center gap-4">
                <div className="h-16 w-16 bg-[#03CCFF]"></div>
                <div className="h-16 w-16 bg-[#41B541]"></div>
              </div>
              <span>Green</span>
            </div>

            <div className="grid grid-cols-3 gap-x-3 items-center pt-6">
              <span>Dark Blue</span>
              <div className="flex justify-center gap-4">
                <div className="h-16 w-16 bg-[#2869C8]"></div>
                <div className="h-16 w-16 bg-[#F4EE27]"></div>
              </div>
              <span>Yellow</span>
            </div>

            <div className="grid grid-cols-3 gap-x-3 items-center pt-6">
              <span>Navy Blue</span>
              <div className="flex justify-center gap-4">
                <div className="h-16 w-16 bg-[#152C40]"></div>
                <div className="h-16 w-16 bg-[#AAAAAA]"></div>
              </div>
              <span>Grey</span>
            </div>
          </div>
        </div>
      </section>

      <section className="flex py-10 p-6 xl:px-32 min-h-screen flex-col xl:flex-row">
        <div className="flex-1">
          <h1 className="text-[#212121] text-3xl font-light mb-6">
            Barracuda Billiard glove
          </h1>

          <div className="grid grid-cols-5 xl:grid-cols-10 gap-x-2 w-[300ox] xl:w-[642px] text-gray-400 xl:h-[70px] text-xs cursor-pointer">
            {gloveVariants.map((glove) => (
              <div
                key={glove.name}
                className="py-1 cursor-pointer border-b-4"
                style={{
                  borderBottomColor:
                    variant === glove.color ? glove.color : "transparent",
                }}
                onClick={() => setVariant(glove.color)}
              >
                <span>{glove.name}</span>
                <div
                  style={{ backgroundColor: glove.color }}
                  className="flex justify-center items-center h-12"
                >
                  {variant === glove.color ? (
                    <span className="text-white text-3xl">&#10003;</span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          <img
            src={`/gloves/${variant.slice(1)}-${imageNumber}.webp`}
            className="mt-4 w-[100%] xl:w-[642px] h-[auto] xl:h-[400px]"
            alt="Glove Preview"
          />

          <div className="flex items-center xl:ml-[-40px] before:none after:none">
            <div
              className="hidden xl:block w-[40px] h-[40px] mt-8 leftArrow cursor-pointer"
              onClick={() => previousImage()}
            ></div>

            <div
              key={variant}
              ref={imageContainer}
              className="flex gap-4 mt-8 flex-nowrap overflow-y-scroll w-full xl:w-[642px] imageCarousel cursor-pointer"
            >
              <img
                className={
                  "w-[100px] xl:w-[214px] h-auto border-black" +
                  (imageNumber === 1 ? " border" : "")
                }
                src={`/gloves/${variant.slice(1)}-1.webp`}
                alt="Glove Preview"
                onClick={() => setImageNumber(1)}
              />
              <img
                className={
                  "w-[100px] xl:w-[214px] h-auto border-black" +
                  (imageNumber === 2 ? " border" : "")
                }
                src={`/gloves/${variant.slice(1)}-2.webp`}
                alt="Glove Preview"
                onClick={() => setImageNumber(2)}
              />
              <img
                className={
                  "w-[100px] xl:w-[214px] h-auto border-black" +
                  (imageNumber === 3 ? " border" : "")
                }
                src={`/gloves/${variant.slice(1)}-3.webp`}
                alt="Glove Preview"
                onClick={() => setImageNumber(3)}
              />
              <img
                className={
                  "w-[100px] xl:w-[214px] h-auto border-black" +
                  (imageNumber === 4 ? " border" : "")
                }
                src={`/gloves/${variant.slice(1)}-4.webp`}
                alt="Glove Preview"
                onClick={() => setImageNumber(4)}
              />
            </div>

            <div
              className="hidden xl:block w-[40px] h-[40px] mt-8 rightArrow cursor-pointer"
              onClick={() => nextImage()}
            ></div>
          </div>
          <div className="flex justify-between text-md xl:text-2xl mt-2 xl:w-[642px]">
            <span>$25.00</span>
            <span>FREE SHIPPING</span>
          </div>
        </div>

        <div className="flex-1 text-xs xl:text-xl">
          <div className="mt-20 xl:w-[500px] mx-auto">
            <div className="border-b-2 border-b-[#00B901] p-[10px] flex justify-between">
              <span className="mr-10 flex-1">CHOOSE HAND</span>
              <div className="flex gap-2">
                <div className="mr-2">
                  <input
                    className="mr-2"
                    type="radio"
                    name="hand"
                    value="left"
                    id="leftHand"
                    checked={hand === "left"}
                    onChange={() => setHand("left")}
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
                    checked={hand === "right"}
                    onChange={() => setHand("right")}
                  />
                  <label htmlFor="rightHand">right</label>
                </div>
              </div>
            </div>

            <div className="border-b-2 border-b-[#00B901] p-[10px] flex justify-between">
              <span className="mr-0">CHOOSE SIZE</span>
              <div className="flex gap-2">
                <div className="mr-2">
                  <input
                    className="mr-2"
                    type="radio"
                    name="size"
                    value="s"
                    id="smallSize"
                    checked={size === "s"}
                    onChange={() => setSize("s")}
                  />
                  <label htmlFor="smallSize">small</label>
                </div>

                <div className="mr-2">
                  <input
                    className="mr-2"
                    type="radio"
                    name="size"
                    value="m"
                    id="mediumSize"
                    checked={size === "m"}
                    onChange={() => setSize("m")}
                  />
                  <label htmlFor="mediumSize">medium</label>
                </div>

                <div className="mr-2">
                  <input
                    className="mr-2"
                    type="radio"
                    name="size"
                    value="l"
                    id="largeSize"
                    checked={size === "l"}
                    onChange={() => setSize("l")}
                  />
                  <label htmlFor="largeSize">large</label>
                </div>
              </div>
            </div>

            <div className="border-b-2 border-b-[#00B901] p-[10px] flex justify-between">
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
              className="w-full border-2 border-transparent bg-[#00B901] rounded-md p-2 text-white mt-10"
            >
              add to cart
            </button>
            <Link href="/cart" passHref>
              <button className="w-full text-[#00B901] bg-white border-2 border-[#00B901] rounded-md mt-6 p-2">
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

      <div id="snackbar">Product has been added to the cart.</div>

      <Footer darkBackground={false} goldFooter={false} />
    </>
  );
}

export default gloves;
