import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";

function Header({ logoColor = "#00B901", logoImage = "logo.svg", cart }) {
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
  const router = useRouter();

  const total = cart.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  const routeColorMap = {
    "/": "white",
    "/gloves": "#03ccff",
    "/holders": "#D9AF62",
    "/fitrack": "#00b901",
    "/scoreboard": "#712296",
    "/cart": "#00b901",
  };

  return (
    <>
      <header
        className={
          "justify-between fixed px-8 items-center w-full text-white z-10 hidden md:flex" +
          (scrolled ? " text-white" : "") +
          (scrolled ? " bg-[#212121]" : "")
        }
      >
        <div>
          <Link activeStyle={{ text: logoColor }} href="/" passHref>
            <img
              src={logoImage}
              width={150}
              height={40}
              alt="logo"
              className="object-contain"
            />
          </Link>
        </div>
        <div className="flex sm:text-sm items-stretch h-[75px] box-content font-bold">
          <div className="flex flex-col p-4 items-start justify-center navbarLink">
            <Link
              style={{
                color:
                  router.pathname === "/"
                    ? routeColorMap[router.pathname]
                    : "white",
              }}
              href="/"
            >
              HOME
            </Link>
            <div
              className="headerUnderline"
              style={{
                background: logoColor,
              }}
            ></div>
          </div>
          <div className="flex flex-col p-4 items-start justify-center navbarLink">
            <Link
              style={{
                color:
                  router.pathname === "/gloves"
                    ? routeColorMap[router.pathname]
                    : "white",
              }}
              href="/gloves"
            >
              GLOVES
            </Link>
            <div
              className="headerUnderline"
              style={{
                background: logoColor,
              }}
            ></div>
          </div>
          <div className="flex flex-col p-4 items-start justify-center navbarLink">
            <Link
              style={{
                color:
                  router.pathname === "/holders"
                    ? routeColorMap[router.pathname]
                    : "white",
              }}
              href="/holders"
            >
              HOLDERS
            </Link>
            <div
              className="headerUnderline"
              style={{
                background: logoColor,
              }}
            ></div>
          </div>
          <div className="flex flex-col p-4 items-start justify-center navbarLink">
            <Link
              style={{
                color:
                  router.pathname === "/fitrack"
                    ? routeColorMap[router.pathname]
                    : "white",
              }}
              href="/fitrack"
            >
              FIT RACKS
            </Link>
            <div
              className="headerUnderline"
              style={{
                background: logoColor,
              }}
            ></div>
          </div>
          {/* <div className="flex flex-col p-4 items-start justify-center navbarLink">
            <Link
              style={{
                color:
                  router.pathname === "/scoreboard"
                    ? routeColorMap[router.pathname]
                    : "white",
              }}
              href="/scoreboard"
            >
              SCORE BOARD
            </Link>
            <div
              className="headerUnderline"
              style={{
                background: logoColor,
              }}
            ></div>
          </div> */}
          <div className="flex flex-col p-4 items-start justify-center navbarLink">
            <Link
              style={{
                color:
                  router.pathname === "/cart"
                    ? routeColorMap[router.pathname]
                    : "white",
              }}
              href="/cart"
            >
              CART
            </Link>
            <div
              className="headerUnderline"
              style={{
                background: logoColor,
              }}
            ></div>
          </div>
        </div>
        <div
          className={`flex flex-col w-[150px] p-4 justify-center items-end navbarLink mb-2 text-[${logoColor}]`}
        >
          ${total}.00
        </div>
      </header>

      <div
        className={
          "z-20 fixed w-full md:hidden flex justify-between p-6 items-center" +
          (scrolled ? " text-white" : "") +
          (scrolled ? " bg-[#212121]" : "") +
          (sidebarActive ? " hidden" : "")
        }
      >
        <Link activeStyle={{ text: logoColor }} href="/" passHref>
          <img src={logoImage} alt="Logo" className="w-1/3" />
        </Link>

        <div onClick={() => setSidebarActive(!sidebarActive)}>
          <div
            className={"w-[30px] h-[2px] bg-white mb-2"}
            style={{ background: logoColor }}
          ></div>
          <div
            className={"w-[30px] h-[2px] bg-white mb-2"}
            style={{ background: logoColor }}
          ></div>
          <div
            className={"w-[30px] h-[2px] bg-white mb-2"}
            style={{ background: logoColor }}
          ></div>
        </div>
      </div>

      {sidebarActive && (
        <header className="flex flex-col items-center justify-center gap-16 font-light text-2xl md:hidden fixed w-screen h-screen bg-black z-10 text-white">
          <h1>
            <Link
              style={{
                color:
                  router.pathname === "/"
                    ? routeColorMap[router.pathname]
                    : "white",
              }}
              href="/"
            >
              HOME
            </Link>
          </h1>
          <h1>
            <Link
              style={{
                color:
                  router.pathname === "/gloves"
                    ? routeColorMap[router.pathname]
                    : "white",
              }}
              href="/gloves"
            >
              GLOVES
            </Link>
          </h1>
          <h1>
            <Link
              style={{
                color:
                  router.pathname === "/holders"
                    ? routeColorMap[router.pathname]
                    : "white",
              }}
              href="/holders"
            >
              HOLDERS
            </Link>
          </h1>
          <h1>
            <Link
              style={{
                color:
                  router.pathname === "/fitrack"
                    ? routeColorMap[router.pathname]
                    : "white",
              }}
              href="/fitrack"
            >
              FIT RACK
            </Link>
          </h1>
          {/* <h1>
            <Link
              style={{
                color:
                  router.pathname === "/scoreboard"
                    ? routeColorMap[router.pathname]
                    : "white",
              }}
              href="/scoreboard"
            >
              SCORE BOARD
            </Link>
          </h1> */}
          <h1>
            <Link
              style={{
                color:
                  router.pathname === "/cart"
                    ? routeColorMap[router.pathname]
                    : "white",
              }}
              href="/cart"
            >
              CART
            </Link>
          </h1>
          <h1 className={`text-[${logoColor}]`}>${total}.00</h1>

          <div
            onClick={() => setSidebarActive(false)}
            className="mt-20 bg-[#ED2056] text-black w-12 h-12 rounded-full flex justify-center items-center font-bold"
          >
            X
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
