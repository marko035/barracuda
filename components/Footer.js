import Image from "next/image";
import Link from "next/link";

function Footer({ darkBackground }) {
  return (
    <>
      <footer className="relative h-[400px]">
        <Image
          src="/footer.png"
          fill
          alt="Background"
          className={"object-cover " + (darkBackground ? "bg-[#1F1F1F]" : "")}
          priority
        />
        <div className="flex justify-center gap-6 xl:gap-32 absolute w-full bottom-64 text-white text-xl xl:text-2xl font-thin">
          <div>
            <div>
              <Link href="#aboutUs" scroll={false}>
                About us
              </Link>
            </div>
            <div className="footerUnderline"></div>
          </div>
          <div>
            <div>
              <Link href="/policy">Privacy Policy</Link>
            </div>
            <div className="footerUnderline"></div>
          </div>
          <div>
            <div>Contact us</div>
            <div className="footerUnderline"></div>
          </div>
        </div>

        <div className="w-full absolute bottom-0 px-6 xl:px-32 text-gray-600 flex text-sm xl:text-2xl font-thin">
          <div className="border-t-2 border-gray-600 h-32 flex items-start xl:items-center flex-1 flex-col xl:flex-row p-4">
            <div className="flex items-center mr-2">
              <span className="text-3xl mr-1">&#169;</span> Copyright 2022.
            </div>
            Barracudagloves, Inc.
            <span className="xl:ml-2">All rights reserved.</span>
          </div>
          <div className="border-t-2 border-gray-600 h-32 flex items-center flex justify-end gap-2">
            <Image src="/facebook.png" width={24} height={24} alt="Facebook" />
            <Image
              src="/instagram.png"
              width={25}
              height={24}
              alt="Instagram"
            />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
