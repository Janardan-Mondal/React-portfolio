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
        <div className="w-1/2">contact</div>
        <div className="w-1/2">contact</div>
    </motion.div>;
};

export default Contact;
