import { motion } from "framer-motion";
import React from "react";


// bg-[rgba(162,162,190,0.3)]
// text-shadow-[1px_1px_2px_rgba(0_0_0_/_0.4)] 
const Navbar = ({ setActivePage, activePage }) => {

    return (
        <nav className="w-full gap-4 p-4 lg:flex items-center justify-around text-white absolute">
            <div className="lg:w-1/2 mb-2.5 text-center text-[#64FFDA] text-shadow-lg sm:text-shadow-sm" style={{ fontFamily: "var(--JetBrains)", fontWeight: "bold" }}>J.Mondal</div>
            <div className="flex items-center justify-around text-[#F8FAFC] font-bold lg:w-1/2">
                <button className="relative pb-1 cursor-pointer bg-gradient-to-r from-[#64FFDA] to-[#1E90FF] bg-clip-text hover:drop-shadow-[0_0_10px_#64FFDA] text-transparent hover:from-[#FF6EC4] hover:to-[#7873F5] transition-all duration-800" onClick={() => setActivePage("home")}>Home
                    {activePage === 'home' && (
                        <motion.div
                            layoutId="underline"
                            className="absolute left-0 bottom-0 h-[2px] w-full bg-[#64FFDA]"
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                        />
                    )}
                </button>
                <button className="relative pb-1 cursor-pointer bg-gradient-to-r from-[#64FFDA] to-[#1E90FF] bg-clip-text hover:drop-shadow-[0_0_10px_#64FFDA] text-transparent hover:from-[#FF6EC4] hover:to-[#7873F5] transition-all duration-800" onClick={() => setActivePage("about")}>About
                    {activePage === 'about' && (
                        <motion.div
                            layoutId="underline"
                            className="absolute left-0 bottom-0 h-[2px] w-full bg-[#64FFDA]"
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                        />
                    )}
                </button>
                <button className="cursor-pointer relative pb-1 bg-gradient-to-r from-[#64FFDA] to-[#1E90FF] bg-clip-text hover:drop-shadow-[0_0_10px_#64FFDA] text-transparent hover:from-[#FF6EC4] hover:to-[#7873F5] transition-all duration-800" onClick={() => setActivePage("contact")}>Contact
                    {activePage === 'contact' && (
                        <motion.div
                            layoutId="underline"
                            className="absolute left-0 bottom-0 h-[2px] w-full bg-[#64FFDA]"
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                        />
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
