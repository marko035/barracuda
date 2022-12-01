import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

function Header({ goldLogo, cart }) {
  useEffect(() => {
    const scrollHandler = (event) => {
      setScrolled(document.documentElement.scrollTop !== 0);
    };

    document.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const [sidebarActive, setSidebarActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const total = cart.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  return (
    <>
      <header
        className={
          "flex justify-between fixed px-8 items-center w-full text-white z-10 hidden md:flex" +
          (scrolled ? " text-white" : "") +
          (scrolled ? " bg-[#212121]" : "")
        }
      >
        <div>
          <img
            src={goldLogo ? "goldLogo.svg" : "/logo.svg"}
            width={150}
            height={40}
            alt="logo"
            className="object-contain"
          />
        </div>
        <div className="flex sm:text-sm items-stretch h-[75px] box-content font-bold">
          <div className="flex flex-col p-4 items-start justify-center navbarLink">
            <Link href="/">HOME</Link>
            <div
              className={"headerUnderline" + (goldLogo ? " goldUnderline" : "")}
            ></div>
          </div>
          <div className="flex flex-col p-4 items-start justify-center navbarLink">
            <Link href="/gloves">GLOVES</Link>
            <div
              className={"headerUnderline" + (goldLogo ? " goldUnderline" : "")}
            ></div>
          </div>
          <div className="flex flex-col p-4 items-start justify-center navbarLink">
            <Link href="/holders">HOLDERS</Link>
            <div
              className={"headerUnderline" + (goldLogo ? " goldUnderline" : "")}
            ></div>
          </div>
          <div className="flex flex-col p-4 items-start justify-center navbarLink">
            <Link href="/cart">CART</Link>
            <div
              className={"headerUnderline" + (goldLogo ? " goldUnderline" : "")}
            ></div>
          </div>
          <div className="flex flex-col p-4 items-start justify-center navbarLink mb-2">
            ${total}.00
          </div>
        </div>
      </header>

      <div
        className="z-20 fixed top-10 right-10 md:hidden"
        onClick={() => setSidebarActive(!sidebarActive)}
      >
        <div
          className={
            "w-[30px] h-[2px] bg-[#00B901] mb-2" +
            (goldLogo ? " bg-[#D9AF62]" : "")
          }
        ></div>
        <div
          className={
            "w-[30px] h-[2px] bg-[#00B901] mb-2" +
            (goldLogo ? " bg-[#D9AF62]" : "")
          }
        ></div>
        <div
          className={
            "w-[30px] h-[2px] bg-[#00B901] mb-2" +
            (goldLogo ? " bg-[#D9AF62]" : "")
          }
        ></div>
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
