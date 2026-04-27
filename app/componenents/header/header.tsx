"use client"



import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { name: "Hotels", href: "/home" },
  { name: "Flights", href: "/flight/landing" },
  { name: "Car Rental", href: "/car/landing" },
  { name: "Destination", href: "/destination" },
  { name: "Wishlist", href: "/wishlisth" },
  { name: "More", href: "/more" },
];


export const HeaderBar = () => {

      const [open, setOpen] = useState(false);
        const pathname = usePathname();
  return (
   <div className="w-full text-white">

      {/* TOP BAR */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-12   text-xs sm:text-sm">

        {/* LEFT */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 borderflex items-center justify-center">
              <img src="/telephone-1.png" alt="Phone icon" className="w-5 h-5" />
            </div>
            <span 
            className="font-Helvetica"
            >
              (647) 498-6504
              </span>
          </div>

          <div className="hidden sm:block w-px h-5 bg-white/20" />

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 borderflex items-center justify-center">
              <img src="/telephone-1.png" alt="Email icon" className="w-5 h-5" />
            </div>
            <span className="truncate">admin@amzioo.com</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="font-[Vollkorn]">$USD</span>
            <ChevronDown />
          </div>

          <div className="w-px h-5 bg-white/20" />

          <div className="flex items-center gap-1">
            <img src="/flag-1.png" alt="Country flag" className="w-[36] h-[36]" />
            <span>EN</span>
            <ChevronDown />
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="w-full h-px bg-white/20" />

      {/* MAIN NAV */}
      <div className="flex items-start mt-5 justify-between px-4 sm:px-6 lg:px-12 ">

        {/* LOGO */}
        <img src="/amzioo-logo-1.png" alt="Amzioo logo" className="w-[100px] sm:w-[140px]" />

        {/* DESKTOP NAV */}


        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2">

        
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-semibold font-catamaran transition-colors ${
                pathname === link.href
                  ? "text-orange-500"
                  : "text-white hover:text-orange-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

          {/* BUTTONS (hide on small) */}
          <div className="hidden sm:flex gap-2">
            <button className="px-4 py-2 w-[143] h-[48] bg-[#3964ae] rounded-full text-sm font-semibold">
              Login
            </button>
            <button className="px-4 py-2 w-[143] h-[48] border border-white rounded-full text-sm font-semibold">
              Sign Up
            </button>
          </div>

          {/* HAMBURGER */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-sm bg-black border-t border-white/10">
          <p>Hotels</p>
          <p>Flights</p>
          <p>Car Rental</p>
          <p>Destinations</p>
          <p>Wishlist</p>

          <button className="mt-2 py-2 bg-[#3964ae] rounded-full">
            Login
          </button>
          <button className="py-2 border border-white rounded-full">
            Sign Up
          </button>
        </div>
      )}
    </div>


  );
};
