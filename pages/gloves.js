import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState } from "react";

function gloves() {
  const [quantity, setQuantity] = useState(1);
  const price = 25;

  return (
    <>
      <Header />

      <section className="glovesTopSection flex min-h-screen pt-16">
        <div className="text-white text-3xl p-32 font-extralight">
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

        <div className="h-full text-2xl py-32 text-center text-gray-400">
          <p className="text-white">
            Available in 10 colors you can chose from
          </p>
          <u>- CLICK ON COLOR RECTANGLE -</u>

          <div className="flex flex-col justify-items-stretch">
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

      <section className="flex py-20 px-32 min-h-screen">
        <div className="flex-1">
          <h1 className="text-green-600 text-3xl font-light">
            Barracuda Billiard glove
          </h1>

          <div className="grid grid-cols-10 gap-x-2 w-[600px] text-gray-400 h-[70px] text-xs cursor-pointer">
            <div className="py-1 hover:border-b-4 hover:border-b-black">
              <span>Black</span>
              <div className="bg-black h-12"></div>
            </div>

            <div className="py-1 hover:border-b-4 hover:border-b-red-700">
              <span>Red</span>
              <div className="bg-red-700 h-12"></div>
            </div>

            <div className="py-1 hover:border-b-4 hover:border-b-sky-300">
              <span>Sky b.</span>
              <div className="bg-sky-300 h-12"></div>
            </div>

            <div className="py-1 hover:border-b-4 hover:border-b-blue-900">
              <span>Dark b.</span>
              <div className="bg-blue-900 h-12"></div>
            </div>

            <div className="py-1 hover:border-b-4 hover:border-b-indigo-900">
              <span>Navy b.</span>
              <div className="bg-indigo-900 h-12"></div>
            </div>

            <div className="py-1 hover:border-b-4 hover:border-b-orange-400">
              <span>Orange</span>
              <div className="bg-orange-400 h-12"></div>
            </div>

            <div className="py-1 hover:border-b-4 hover:border-b-purple-700">
              <span>Purple</span>
              <div className="bg-purple-700 h-12"></div>
            </div>

            <div className="py-1 hover:border-b-4 hover:border-b-green-600">
              <span>Green</span>
              <div className="bg-green-600 h-12"></div>
            </div>

            <div className="py-1 hover:border-b-4 hover:border-b-yellow-400">
              <span>Yellow</span>
              <div className="bg-yellow-400 h-12"></div>
            </div>

            <div className="py-1 hover:border-b-4 hover:border-b-gray-500">
              <span>Grey</span>
              <div className="bg-gray-500 h-12"></div>
            </div>
          </div>

          <Image
            width={600}
            height={600}
            src="/blackGlove.jpeg"
            className="mt-4"
            alt="Glove Preview"
          />

          <div className="flex items-center ml-[-80px]">
            <div className="w-20 h-20 mt-8 leftArrow"></div>
            <div className="flex gap-4 mt-8 flex-nowrap overflow-y-scroll w-[600px] imageCarousel cursor-pointer">
              <Image
                width={200}
                height={200}
                src="/blackGlove.jpeg"
                alt="Glove Preview"
              />
              <Image
                width={200}
                height={200}
                src="/blackGlove.jpeg"
                alt="Glove Preview"
              />
              <Image
                width={200}
                height={200}
                src="/blackGlove.jpeg"
                alt="Glove Preview"
              />
              <Image
                width={200}
                height={200}
                src="/blackGlove.jpeg"
                alt="Glove Preview"
              />
              <Image
                width={200}
                height={200}
                src="/blackGlove.jpeg"
                alt="Glove Preview"
              />
              <Image
                width={200}
                height={200}
                src="/blackGlove.jpeg"
                alt="Glove Preview"
              />
            </div>
            <div className="w-20 h-20 mt-8 rightArrow"></div>
          </div>
        </div>

        <div className="flex-1 text-xl">
          <div className="mt-20 w-[500px] mx-auto">
            <div className="border-b-2 border-b-green-600 p-[10px] flex justify-between">
              <span className="mr-10 flex-1">CHOOSE HAND</span>
              <div className="flex-1 flex">
                <div className="flex-1">
                  <input
                    className="mr-2"
                    type="radio"
                    name="hand"
                    value="left"
                    id="leftHand"
                  />
                  <label for="leftHand">left</label>
                </div>
                <div className="flex-1">
                  <input
                    className="ml-6 mr-2"
                    type="radio"
                    name="hand"
                    value="right"
                    id="rightHand"
                  />
                  <label for="rightHand">right</label>
                </div>
              </div>
            </div>

            <div className="border-b-2 border-b-green-600 p-[10px] flex justify-between">
              <span className="mr-10 flex-1">CHOOSE SIZE</span>
              <div className="flex-1 flex">
                <div className="flex-1">
                  <input
                    className="mr-2"
                    type="radio"
                    name="size"
                    value="medium"
                    id="mediumSize"
                  />
                  <label for="mediumSize">medium</label>
                </div>

                <div className="flex-1">
                  <input
                    className="ml-6 mr-2"
                    type="radio"
                    name="size"
                    value="large"
                    id="largeSize"
                  />
                  <label for="largeSize">large</label>
                </div>
              </div>
            </div>

            <div className="border-b-2 border-b-green-600 p-[10px] flex justify-between">
              <span className="mr-10 flex-1">CHOOSE SIZE</span>

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
              go to card
            </button>

            <div className="w-full flex justify-center mt-10 gap-2">
              <Image src="/applePay.png" width={80} height={80} />
              <Image src="/googlePay.png" width={80} height={80} />
              <Image src="/paypal.png" width={80} height={80} />
            </div>

            <div className="w-full flex justify-center mt-2 gap-2">
              <Image src="/visa.png" width={80} height={80} />
              <Image src="/mastercard.png" width={80} height={80} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default gloves;
