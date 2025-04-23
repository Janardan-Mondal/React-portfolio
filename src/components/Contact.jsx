import { motion } from "framer-motion";
import React from "react";
// motion
const Contact = () => {

    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };


    return <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
        className="text-white flex justify-end items-center h-screen">
        <div className="lg:w-1/2 lg:block hidden"></div>
        <div className="pt-25 lg:w-1/2 lg:pt-15 h-full text-red-500 z-40 ">
            <div className="flex flex-col overflow-scroll h-[80vh] gap-5 lg:gap-10 lg:pt-20 pt-10  px-10 ">
                <h1 className="text-5xl font-bold">Hello, I'm</h1>
                <h1 className="text-5xl font-bold">John Doe</h1>
                <p className="text-lg">I am a software engineer with a passion for building web applications. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus pariatur, numquam minus voluptates unde quo, a nemo qui, natus laborum deserunt non? Eveniet quae maxime fugit, cum minima molestiae labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam amet ex accusantium nulla, praesentium minima eos placeat dolores tempora corporis, eius sequi qui deserunt in voluptatibus explicabo commodi, deleniti quo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quis esse cum illo accusamus sed quasi adipisci libero, odit optio nulla nam dolore reiciendis porro distinctio id fugit ipsam sequi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa inventore reprehenderit ad neque sit? Dignissimos dicta id vero quod ut accusamus eaque laborum porro quas voluptas, at atque cum eius.</p>
                <button className="bg-blue-500 text-white rounded mb-4 w-1/2">Learn More</button>
            </div>
        </div>
    </motion.div>;
};

export default Contact;
