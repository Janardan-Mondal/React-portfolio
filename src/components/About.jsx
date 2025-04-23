import { motion } from "framer-motion";
import React from "react";

// motion
const About = () => {

    const experiences = [
        {
            title: "Me !",
            company: "",
            points: [
                "I come from a village in West Bengal, India and currently work as a Medical Representative.However, my true passion lies in web development.I want to become a web developer because I enjoy creating things that people can use and appreciate. Outside of work, I enjoy playing video games and watching movies.These hobbies help me think creatively and solve problems.They inspire me to design websites that offer engaging experiences and captivating visuals. ",
                `One of my strengths is my ability to learn quickly.I am
                always eager to gain new knowledge and improve my
                skills.`
            ]
        },
        {
            title: "Education",
            company: "",
            school: [{
                name: "B.Sc (Calcutta University)",
                date: " 2020",
                degree: " Bachelor of Science "
            },
            {
                name: "West Bengal Council of Higher Secondary Education",
                date: " 2017",
                degree: " Higher Secondary Certificate"
            },
            {
                name: "West Bengal Board Secondary Education",
                date: "2017",
                degree: "Secondary / Matriculation Certificate"
            }
            ],
            points: [
                ""
            ]
        },
        {
            title: "Senior Front-End Developer & UI/UX Designer",

            company: "StudioNow",
            points: [
                "My focus is on writing clean, performant code and delivering pixel-perfect designs that not only look great but also function seamlessly across devices. I'm constantly learning and evolving, staying up-to-date with the latest trends and best practices in frontend development."
            ]
        },
    ];

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2, // ← here you're using the `custom` value
                duration: 0.5
            }
        })
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
            className=" flex justify-end items-center h-screen">
            <div className="lg:w-1/2 lg:block hidden"></div>
            <div className="pt-25 lg:w-1/2 lg:pt-15 h-full z-40 ">
                <div className="flex flex-col overflow-scroll h-[70vh] gap-5 lg:gap-10 lg:pt-20 pt-10  px-10 ">
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
                                viewport={{ once: false, amount: 0.2 }} // <- always re-animates on scroll
                                variants={itemVariants}
                                className="space-y-2 max-md:bg-[rgba(183,190,209,0.20)] p-2 rounded"
                            >
                                <motion.h3 className="text-lg font-bold lg:text-2xl text-[#FF6EC4]">{exp.title}</motion.h3>
                                <p className="text-sm font-semibold text-purple-300">{exp.company}</p>
                                <p className="list-disc list-inside text-white lg:text-gray-100  text-sm space-y-1">
                                    {exp.school && (
                                        exp.school.map((school, idx) => (
                                            <div key={idx}>
                                                <li className="text-sm font-semibold text-purple-300" >{school.name}</li>
                                                <p className="ml-5">{school.date}</p>
                                                <p className="ml-5">{school.degree}</p>
                                            </div>
                                        ))

                                    )}
                                    {exp.points.map((point, idx) => (
                                        <p key={idx} className="text-base  lg:text-lg">{point}</p>
                                    ))}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    </>);
};

export default About;
