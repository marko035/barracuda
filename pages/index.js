import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Barracuda Billiards</title>
        <meta name="description" content="Billiard gloves and holders shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className="w-screen relative h-[800px] xl:h-[1000px]">
        <Image src="/main.png" fill alt="Background" className="object-cover" />
        <Image
          src="/small-logo.png"
          width={180}
          height={180}
          alt="Small Logo"
          className="absolute smallLogo"
        />
      </section>

      <section className="p-10 xl:px-20">
        <h1 className="w-20 text-6xl font-medium ml-0 xl:ml-20 leading-10">
          about us
        </h1>
        <div className="flex pt-4 px-0 xl:px-10 gap-20 flex-col xl:flex-row">
          <div className="font-light text-3xl flex-1 pl-0 xl:pl-32">
            Our mission is to promote the beautiful game of billiards, bring
            comfort to players worldwide and support our custormers enjoyment on
            the table by creating innovative equipment that improves the
            performance of both professional and recreational players. <br />
            <br />
            Furthermore we bring style to the table with an array of unique
            color choices.
          </div>
          <div className="font-light text-3xl flex-1 pr-0 xl:pr-32">
            <span className="text-green-600">Barracuda Billiards</span> is proud
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
          <Image
            src="/lets.png"
            alt="lets"
            width={404}
            height={274}
            className="mb-[-130px]"
          />
        </div>

        <div className="bg-[#1F1F1F] px-10 xl:px-20 py-32">
          <h1 className="w-20 text-6xl font-medium ml-0 xl:ml-20 leading-10">
            our <br />
            products
          </h1>

          <div className="flex flex-col xl:flex-row justify-center gap-16 xl:gap-8 my-20 text-center">
            <div className="border-green-600 border w-full xl:w-1/3 flex flex-col items-center bg-[#232323]">
              <Image
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
              <h3 className="mb-8 underline text-xl text-green-600">
                LEARN MORE
              </h3>
            </div>

            <div className="border-green-600 border w-full xl:w-1/3 flex flex-col items-center bg-[#232323]">
              <Image
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
              <h3 className="mb-8 underline text-xl text-green-600">
                LEARN MORE
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="m-6 xl:m-32 text-3xl font-light">
        <p>Want to become a part of Barraccuda family and sell our products?</p>
        <p>
          If you are online reseller, pool hall or a pool player we have great
          packages for everyone!
        </p>
      </section>

      <Footer />
    </>
  );
}
