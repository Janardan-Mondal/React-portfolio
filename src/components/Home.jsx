import { motion } from "framer-motion";
import React from "react";
import { ReactTyped as Typed } from "react-typed";


const Home = () => {

    const experiences = [
        {
            title: "Developer",
            company: "Source of Supply",
            date: "JUL 2022 – PRESENT",
            points: [
                "I'm a passionate Frontend Developer with a strong foundation in modern web technologies. I specialize in building responsive, user-friendly interfaces using HTML, CSS, and JavaScript, with advanced experience in React for dynamic, component-based UI development."
            ]
        },
        {
            title: "UI/UX Expert",
            company: "Topicals",
            date: "JUN 2021 – PRESENT",
            points: [
                "I’m skilled in Tailwind CSS and Styled Components, allowing me to create clean, scalable, and maintainable styles with speed and consistency. I also bring life to interfaces using Framer Motion, crafting smooth, engaging animations that enhance user experience."
            ]
        },
        {
            title: "Senior Front-End Developer & UI/UX Designer",
            company: "StudioNow",
            date: "NOV 2020 – FEB 2021",
            points: [
                "My focus is on writing clean, performant code and delivering pixel-perfect designs that not only look great but also function seamlessly across devices. I'm constantly learning and evolving, staying up-to-date with the latest trends and best practices in frontend development."
            ]
        },
    ];

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.5 },
        }
    };

    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };


    return (<>
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            className={`text-white flex justify-end lg:items-center h-screen `} style={{ fontFamily: "var(--JetBrains)" }}>
            <div className="lg:w-1/2 lg:block hidden"></div>
            <div className="pt-25 lg:w-1/2 lg:pt-15 h-full z-40">
                <div className="flex flex-col overflow-scroll h-[70vh] gap-5 lg:gap-5 lg:pt-20 pt-10  px-10 lg:pr-20">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={itemVariants}
                        className="lg:text-4xl text-3xl font-medium">Hello, I'm <span className="font-black inline-block rotatedAnimation tracking-tighter" >Janardan Mondal</span></motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, y: -40 }}
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={itemVariants}
                        className="lg:text-4xl text-3xl font-semibold">A {" "}
                        <span className="text-pink-500 max-md:text-2xl">
                            <Typed
                                strings={["Frontend Developer", "React Enthusiast", "UI/UX Explorer"]}
                                typeSpeed={80}
                                backSpeed={50}
                                loop
                            />
                        </span>
                    </motion.h1>
                    {experiences.map((exp, i) => (
                        <div key={i} className="grid grid-cols-[40px_1fr] gap-6 relative z-10">

                            {/* Center: Line & Dot */}
                            <div className="relative flex flex-col items-center">
                                {/* Top line */}
                                {i !== 0 && <div className="h-1/2 w-0.5 bg-purple-600" />}
                                {/* Dot */}
                                <div className="w-4 h-4 rounded-full bg-purple-600 border-4 border-gray-900 z-10" />
                                {/* Bottom line */}
                                {i !== experiences.length - 1 && <div className="h-1/2 w-0.5 bg-purple-600" />}
                            </div>

                            {/* Right: Content */}
                            <motion.div
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                variants={itemVariants}
                                className="space-y-2 max-md:bg-[rgba(183,190,209,0.20)] p-2 rounded"
                            >
                                {/* <h3 className="text-lg font-bold">{exp.title}</h3> */}
                                {/* <p className="text-sm font-semibold text-purple-300">{exp.company}</p> */}
                                <ul className="list-disc list-inside lg:text-gray-100  text-sm space-y-1">
                                    {exp.points.map((point, idx) => (
                                        <p key={idx} className="text-base lg:text-lg">{point}</p>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    </>);
};

export default Home;
