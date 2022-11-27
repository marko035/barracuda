import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

function Header() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = (event) => {
      setScrolled(document.documentElement.scrollTop !== 0);
    };

    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <>
      <header
        className={
          "flex justify-between fixed px-8 items-center w-full text-white z-10 hidden md:flex" +
          (scrolled ? " text-white" : "") +
          (scrolled ? " bg-[#1F1F1F]" : "")
        }
      >
        <div className="h-[75px] w-[150px] relative">
          <Image src="/logo.png" fill alt="logo" className="object-contain" />
        </div>
        <div className="flex sm:text-sm items-stretch h-[75px] box-content">
          <div className="box-content flex p-4 items-center hover:border hover:border-green-600">
            <Link href="/">HOME</Link>
          </div>
          <div className="flex p-4 items-center hover:border hover:border-green-600">
            <Link href="/gloves">GLOVES</Link>
          </div>
          <div className="flex p-4 items-center hover:border hover:border-green-600">
            <Link href="/holders">HOLDERS</Link>
          </div>
          <div className="flex p-4 items-center hover:border hover:border-green-600">
            <Link href="/cart">CART</Link>
          </div>
        </div>
      </header>

      <div
        className="z-20 fixed top-10 right-10 md:hidden"
        onClick={() => setSidebarActive(!sidebarActive)}
      >
        <div className="w-[30px] h-[2px] bg-green-600 mb-2"></div>
        <div className="w-[30px] h-[2px] bg-green-600 mb-2"></div>
        <div className="w-[30px] h-[2px] bg-green-600 mb-2"></div>
      </div>

      {sidebarActive && (
        <header className="flex flex-col items-center justify-center gap-20 font-light text-2xl md:hidden fixed w-screen h-screen bg-black z-10 text-white">
          <h1>
            <Link href="/">HOME</Link>
          </h1>
          <h1>
            <Link href="/gloves">GLOVES</Link>
          </h1>
          <h1>
            <Link href="/holders">HOLDERS</Link>
          </h1>
          <h1>
            <Link href="/cart">CART</Link>
          </h1>

          <div
            onClick={() => setSidebarActive(false)}
            className="mt-20 bg-white text-black w-12 h-12 rounded-full flex justify-center items-center font-bold"
          >
            X
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
