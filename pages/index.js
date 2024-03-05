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

      <Header cart={cart} logoColor="#00B901" logoImage="logo-white.svg" />

      <section className="w-screen h-screen relative bg-black flex flex-col justify-center items-center">
        <img src="/main.svg" alt="Main" className="w-1/2 mb-[100px] absolute" />
        <img src="/mainImage.png" alt="Main" className="h-screen w-screen" />
        <div className="w-[80%] xl:w-1/3 absolute left-auto right-auto bottom-[10%] xl:bottom-0 xl:m-10">
          <img src="/symphony-white.svg" alt="Symphony of colors" />
        </div>
        <img
          src="/symphony-white.svg"
          alt="Symphony of colors"
          className="w-[80%] xl:w-1/3 absolute left-auto right-auto bottom-[10%] xl:bottom-0 xl:m-10"
        />
      </section>

      <section
        className="h-screen p-10 pt-0 xl:px-20 xl:pb-[200px] bg-[#e2e2e2] flex flex-col items-center relative"
        id="aboutUs"
      >
        <div className="smallLogo mb-10  bg-black flex flex-col items-center p-4 w-28 gap-4">
          <img
            src="/b-white.svg"
            width={180}
            height={180}
            alt="Small Logo"
            class="w-12 mt-4"
          />
          <h3 class="text-white font-bold">ABOUT US</h3>
        </div>
        <div className="flex xl:pt-20 px-0 xl:px-10 gap-10 xl:gap-20 flex-col text-xl xl:w-2/3 items-center text-center">
          <div className="font-light flex-1 pl-0">
            Our mission is to promote the beautiful game of billiards, bring
            comfort to players worldwide and support our custormers enjoyment on
            the table by creating innovative equipment that improves the
            performance of both professional and recreational players. <br />
            <br />
            Furthermore we bring style to the table with an array of unique
            color choices.
          </div>
          <div className="font-light flex-1 pr-0">
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

        <div className="absolute bottom-0 bg-black text-green-400 w-screen text-center mb-12 xl:mb-20">
          Lets simplify: PUT SOME BALLS, HAVE SOME FUN AND TRY TO LOOK COOL
          WHILE YOU DO IT!
        </div>
      </section>

      <section className="text-white">
        {/* <div className="flex justify-center px-20 xl:px-0">
          <img
            src="/lets.svg"
            alt="lets"
            width={404}
            height={274}
            className="mb-[-100px] xl:mb-[-110px]"
          />
        </div> */}

        <div className="bg-[#101010] px-10 xl:px-20 pb-48">
          <div className="smallLogo mb-10  bg-[#e2e2e2] flex flex-col items-center p-4 w-28 gap-4">
            <img
              src="/b-black.svg"
              width={180}
              height={180}
              alt="Small Logo"
              class="w-12 mt-4"
            />
            <h3 class="text-black font-bold text-center">OUR PRODUCTS</h3>
          </div>

          <h3 class="text-center text-xl">Choose category</h3>

          {/* <div className="flex flex-col xl:flex-row justify-center gap-16 xl:gap-8 my-20 text-center">
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
                <Link href="/holders">LEARN MORE</Link>
              </h3>
            </div>
          </div> */}

          <div className="grid grid-cols-1 grid-rows-4 xl:grid-cols-2 xl:grid-rows-2 gap-6 xl:w-1/2 m-auto mt-20">
            <Link href="/gloves">
              <div className="flex flex-col justify-between bg-[#212121] p-8 border-0 relative productContainer hover:scale-105 transition-all hover:bg-[#2b2b2b]">
                <img src="/glove.svg" alt="lets" width={75} height={52} />
                <div>
                  <h3 className="text-[#03ccff] text-3xl font-bold mt-10">
                    GLOVES
                  </h3>
                  <p className="text-2xl">Professional pool gloves.</p>
                </div>
                {/* <div className="w-12 h-12 rotate-45 absolute top-[-1rem] right-[-1rem] bg-white"></div> */}
              </div>
            </Link>

            <Link href="/holders">
              <div className="h-full flex flex-col justify-between bg-[#212121] p-8 relative productContainer hover:scale-105 transition-all hover:bg-[#2b2b2b]">
                <img
                  src="/cue-holder.svg"
                  alt="lets"
                  width={100}
                  height={200}
                />
                <div>
                  <h3 className="text-[#D9AF62] text-3xl font-bold">
                    CUE HOLDERS
                  </h3>
                  <p className="text-2xl">Professional pool cue holders.</p>
                </div>
                {/* <div className="w-12 h-12 rotate-45 absolute top-[-1rem] right-[-1rem] bg-white"></div> */}
              </div>
            </Link>

            <Link href="/fitrack">
              <div className="h-full flex flex-col justify-between bg-[#212121] p-8 relative productContainer hover:scale-105 transition-all hover:bg-[#2b2b2b]">
                <img src="/foil.svg" alt="lets" width={80} height={65} />
                <div>
                  <h3 className="text-3xl font-bold text-[#00B901]">
                    FIT RACK
                  </h3>
                  <p className="text-2xl">Elegant pool racking foil.</p>
                </div>
                {/* <div className="w-12 h-12 rotate-45 absolute top-[-1rem] right-[-1rem] bg-white"></div> */}
              </div>
            </Link>

            <Link href="/scoreboard">
              <div className="h-full flex flex-col justify-between bg-[#212121] p-8 relative productContainer hover:scale-105 transition-all hover:bg-[#2b2b2b]">
                <img src="/counters.svg" alt="lets" width={200} height={200} />
                <div>
                  <h3 className="text-3xl font-bold mt-10 text-[#712296]">
                    SCORE BOARD
                  </h3>
                  <p className="text-2xl">
                    Traditional score board with modern design.
                  </p>
                </div>
                {/* <div className="w-12 h-12 rotate-45 absolute top-[-1rem] right-[-1rem] bg-white"></div> */}
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="contactUs"
        className="xl:m-32 text-xl xl:text-3xl p-20 flex flex-col items-center gap-10 text-center"
      >
        <img src="/logo-gray.svg" alt="lets" className="w-1/2" />

        <div>
          <p className="font-bold">
            Want to become a part of Barraccuda family and sell our products?
          </p>
          <p>
            If you are online reseller, pool hall or a pool player we have great
            packages for everyone!
          </p>
        </div>

        <a href="mailto:contact@barracudabilliards.com">
          <button className="w-[200px] border-2 border-transparent bg-[#00B901] p-2 text-white mt-10">
            Contact us
          </button>
        </a>
      </section>

      <Footer
        darkBackground={false}
        footerColor="#00B901"
        footerImage="footer.svg"
      />
    </>
  );
}
