"use client"
import flag1 from "../../../public/flag1.png";
// import image from "./image.png";
// import image1 from "./image.svg";
// import line1 from "./line-1.svg";
// import line42 from "./line-42.svg";
// import logo from "./logo.png";
// import maskGroup from "./mask-group.png";
// import vector from "./vector.svg";
// import vector2 from "./vector-2.svg";
import Image from "next/image";
const navLinks = [
  { label: "Hotels", href: "#" },
  { label: "Flights", href: "#" },
  { label: "Car Rental", href: "#" },
  { label: "Destinations", href: "#" },
  { label: "Wishlist", href: "#" },
];

export const HeaderBar =() => {
  return (
    <div className="relative w-[1920px] h-[121px]">
      <div className="fixed top-[3px] left-[calc(50.00%_-_960px)] w-[1920px] h-[121px]">
        <header className="flex flex-wrap w-[1600px] items-center justify-between gap-[1117px_1117px] px-0 py-2.5 absolute top-[52px] left-[calc(50.00%_-_800px)] bg-transparent rounded-lg backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)]">
          <img
            className="relative w-[146px] h-[48.67px]"
            alt="Logo"
            // src={logo}
          />
          <nav className="relative w-[892px] h-12" aria-label="Main navigation">
            <div className="inline-flex items-center gap-10 absolute top-3.5 left-0">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative w-fit mt-[-1.00px] [font-family:'Catamaran-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal] no-underline"
                >
                  {link.label}
                </a>
              ))}
              <div className="relative w-[63px] h-[26px] mr-[-2.00px]">
                <div className="absolute top-0 left-0 [font-family:'Catamaran-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal]">
                  More
                </div>
                <div className="absolute top-1.5 left-[47px] w-3.5 h-3.5 flex">
                  <img
                    className="flex-1 w-[10.15px]"
                    alt="Vector"
                    // src={vector}
                  />
                </div>
              </div>
            </div>
            <div className="inline-flex items-center justify-end gap-2 absolute top-0 left-[595px]">
              <button
                className="all-[unset] box-border inline-flex items-center justify-end gap-2.5 px-[52px] py-3.5 relative flex-[0_0_auto] bg-[#3964ae] rounded-[42px] cursor-pointer"
                type="button"
                aria-label="Login"
              >
                <span className="relative w-fit mt-[-1.00px] [font-family:'Catamaran-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-5 whitespace-nowrap">
                  Login
                </span>
              </button>
              <button
                className="all-[unset] box-border inline-flex items-center justify-end gap-2.5 px-[46px] py-3.5 relative flex-[0_0_auto] rounded-[42px] border border-solid border-white cursor-pointer"
                type="button"
                aria-label="Sign Up"
              >
                <span className="relative w-fit mt-[-1.00px] [font-family:'Catamaran-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-5 whitespace-nowrap">
                  Sign Up
                </span>
              </button>
            </div>
          </nav>
        </header>
        <div className="flex flex-wrap w-[1600px] items-center justify-between gap-[987px_723px] absolute top-0 left-40">
          <div className="inline-flex items-center gap-10 relative flex-[0_0_auto]">
            <button
              className="all-[unset] box-border relative w-[143px] h-7 cursor-pointer"
              type="button"
              aria-label="Call (647) 498-6504"
            >
              <span className="absolute top-0.5 left-[37px] [font-family:'Catamaran-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal]">
                (647) 498-6504
              </span>
              <span
                className="absolute top-0 left-0 w-7 h-7 flex rounded-[14px] border border-solid border-white"
                aria-hidden="true"
              >
                <img
                  className="mt-[7.5px] w-[13px] h-[13px] ml-[7.5px]"
                  alt=""
                //   src={maskGroup}
                />
              </span>
            </button>
            <img
              className="relative w-px h-[26px] object-cover"
              alt=""
            //   src={line1}
              aria-hidden="true"
            />
            <button
              className="all-[unset] box-border relative w-[178px] h-7 mr-[-2.00px] cursor-pointer"
              type="button"
              aria-label="Email admin@amzioo.com"
            >
              <span className="absolute top-0.5 left-[37px] [font-family:'Catamaran-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal]">
                admin@amzioo.com
              </span>
              <span
                className="absolute top-0 left-0 w-7 h-7 flex rounded-[14px] border border-solid border-white"
                aria-hidden="true"
              >
                <img
                  className="mt-[7.5px] w-[13px] h-[13px] ml-[7.5px]"
                  alt=""
                //   src={image}
                />
              </span>
            </button>
          </div>
          <div className="inline-flex items-center gap-10 px-0 py-1 relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-4 px-0 py-[3px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-4 whitespace-nowrap">
                $usd
              </div>
              <div className="relative w-3 h-3 aspect-[1]">
                <img
                  className="absolute w-[91.67%] h-[75.00%] top-[25.00%] left-[8.33%]"
                  alt="Currency selector"
                //   src={image1}
                />
              </div>
            </div>
            <div
              className="relative w-px h-7 bg-[#f5f5f533] rounded-sm"
              aria-hidden="true"
            />
            <div className="flex w-[94px] items-center justify-between relative">
              <div className="relative w-[68px] h-9">
                <Image
                  className="absolute top-0 left-0 w-9 h-9 aspect-[1] object-cover"
                  alt="English flag"
                  src={flag1}
                />
                <div className="absolute top-2.5 left-[42px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-4 whitespace-nowrap">
                  En
                </div>
              </div>
              <div className="relative w-3 h-[11.25px]">
                <img
                  className="absolute top-[3px] left-px w-2.5 h-[5px]"
                  alt="Language selector"
                //   src={vector2}
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[49px] left-0 w-[1920px] h-px object-cover"
          alt=""
        //   src={line42}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};
