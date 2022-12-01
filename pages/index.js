import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cart);
  }, []);

  const [cart, setCart] = useState([]);

  return (
    <>
      <Head>
        <title>Barracuda Billiards</title>
        <meta name="description" content="Billiard gloves and holders shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header cart={cart} />

      <section className="w-screen relative">
        <img src="/main.svg" alt="Background" className="object-cover w-full" />
        <img
          src="/small-logo.png"
          width={180}
          height={180}
          alt="Small Logo"
          className="absolute smallLogo"
          id="aboutUs"
        />
      </section>

      <section className="p-10 xl:px-20">
        <h1 className="w-20 text-4xl xl:text-6xl font-medium ml-0 xl:ml-20 leading-10">
          about us
        </h1>
        <div className="flex pt-4 px-0 xl:px-10 gap-10 xl:gap-20 flex-col xl:flex-row text-xl xl:text-3xl">
          <div className="font-light flex-1 pl-0 xl:pl-32">
            Our mission is to promote the beautiful game of billiards, bring
            comfort to players worldwide and support our custormers enjoyment on
            the table by creating innovative equipment that improves the
            performance of both professional and recreational players. <br />
            <br />
            Furthermore we bring style to the table with an array of unique
            color choices.
          </div>
          <div className="font-light flex-1 pr-0 xl:pr-32">
            <span className="text-[#00B901]">Barracuda Billiards</span> is proud
            of our team of proven professionals with extensive experience in the
            game. <br />
            <br />
            We are continuously working capture evolving needs of the modern
            player. <br />
            <br />
            We strive to translate our knowledge into the products we develop.
          </div>
        </div>
      </section>

      <section className="text-white">
        <div className="flex justify-center pt-20">
          <img
            src="/lets.svg"
            alt="lets"
            width={404}
            height={274}
            className="mb-[-130px]"
          />
        </div>

        <div className="bg-[#212121] px-10 xl:px-20 py-48 xl:py-32">
          <h1 className="w-20 text-6xl font-medium ml-0 xl:ml-20 leading-10">
            our <br />
            products
          </h1>

          <div className="flex flex-col xl:flex-row justify-center gap-16 xl:gap-8 my-20 text-center">
            <div className="border-[#00B901] border w-full xl:w-1/3 flex flex-col items-center bg-[#232323]">
              <img
                src="/glove.png"
                alt="lets"
                width={165}
                height={145}
                className="mx-10 mt-14 mb-5"
              />
              <h1 className="mb-5 text-3xl xl:text-6xl">GLOVES</h1>
              <h2 className="mb-6 font-extralight text-xl xl:text-3xl">
                Professional <br />
                pool gloves
              </h2>
              <h3 className="mb-8 underline text-xl text-[#00B901]">
                <Link href="/gloves">LEARN MORE</Link>
              </h3>
            </div>

            <div className="border-[#00B901] border w-full xl:w-1/3 flex flex-col items-center bg-[#232323]">
              <img
                src="/holder.png"
                alt="lets"
                width={165}
                height={145}
                className="mx-10 mt-14 mb-5"
              />
              <h1 className="mb-5 text-3xl xl:text-6xl">CUE HOLDERS</h1>
              <h2 className="mb-6 font-extralight text-xl xl:text-3xl">
                Professional <br />
                pool cue holders
              </h2>
              <h3 className="mb-8 underline text-xl text-[#00B901]">
                LEARN MORE
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="m-6 xl:m-32 text-xl xl:text-3xl font-light">
        <p>Want to become a part of Barraccuda family and sell our products?</p>
        <p>
          If you are online reseller, pool hall or a pool player we have great
          packages for everyone!
        </p>

        <a href="mailto:contact@barracudabilliards.com">
          <button className="w-[200px] border-2 border-transparent bg-[#00B901] rounded-md p-2 text-white mt-10">
            Contact us
          </button>
        </a>
      </section>

      <Footer darkBackground={false} goldFooter={false} />
    </>
  );
}
