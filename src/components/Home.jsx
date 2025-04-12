import { motion } from "framer-motion";
import React from "react";
const Home = () => {

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
            {/* <div className="w-1/2 ">Home</div> */}
            <div className="w-1/2 mt-[10%] md:mt-8 lg:mt-0 text-red-500 z-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nostrum id architecto nulla eos eum nobis perspiciatis asperiores ipsam! Perferendis, autem iste nihil vitae reprehenderit id dolores deserunt mollitia atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore dolores, blanditiis ullam nemo expedita, corporis ipsum tempore laudantium laborum necessitatibus itaque id rerum neque fugit laboriosam non inventore mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, fugit dicta? Voluptatem exercitationem iusto veritatis iure aut. Expedita doloribus quo ab excepturi optio. Quidem nam in tempore officia cupiditate commodi nulla officiis sed nihil modi quo ex illum, quibusdam porro perferendis, laboriosam quam quas natus corrupti incidunt alias eaque atque quisquam! Inventore enim provident quasi doloribus debitis ea nam aliquid et atque sit facilis, molestiae sunt, rerum error maxime porro! Pariatur blanditiis ipsa dolorum nostrum nisi autem ab, necessitatibus veritatis voluptas nesciunt dolores? Vero eius possimus et iure aut blanditiis adipisci, assumenda quidem cum reiciendis incidunt ea saepe provident tenetur ab qui aspernatur unde nostrum ex! Illum mollitia velit deserunt, veniam aperiam dolor eveniet aspernatur doloremque id quae quibusdam tenetur suscipit dolores tempora vel. Corrupti eius, nulla repudiandae iste quam eum magnam quae veritatis. Possimus officiis facere iusto totam, earum quos! Aut, hic quos blanditiis quia quibusdam id doloremque pariatur molestias adipisci rem. At aliquam illo quod beatae dicta animi ex impedit minus, cumque laboriosam tenetur obcaecati voluptatum, deleniti possimus. Officia odio eos assumenda delectus vero. Officia dolore quam, minus nam, ut itaque rerum tenetur corrupti magnam modi illum iusto, consequuntur at. Fugit, dolores! Explicabo laborum blanditiis voluptatem aperiam, molestias hic reprehenderit consectetur repellendus repudiandae autem minima vero sit ut rem quo, quae exercitationem, ex quia provident itaque culpa iste inventore! Consequuntur, quo, suscipit magni optio vitae eos facilis omnis earum accusantium ab odio nemo consectetur labore praesentium fuga impedit. Doloremque, molestiae possimus placeat atque exercitationem provident iure eveniet quasi, assumenda magnam dignissimos tempora quam reprehenderit explicabo ipsa laboriosam. Ratione earum consequuntur, laboriosam ipsa libero nobis tempora nam placeat odio, dolorum eligendi ipsam eius labore officiis est vel repellat voluptas quas tenetur! Sint non doloribus incidunt magni modi inventore minus, nesciunt facilis. Repellat saepe consequuntur quam accusamus accusantium harum sapiente nostrum cupiditate ullam maxime, quisquam earum, fugiat ex quasi! Debitis, delectus ullam! Voluptates voluptas assumenda libero facilis impedit voluptate maiores consectetur, eum cum quibusdam ipsa sapiente, deleniti, sit quae debitis ullam distinctio atque totam doloribus rem aliquam! Nam molestias ducimus accusamus illo rerum maiores recusandae, aperiam sequi, dolore sed perferendis? Quaerat delectus neque saepe dicta voluptatibus quibusdam quod, debitis, quas vitae dolorum consequatur explicabo eligendi temporibus sint voluptatem eveniet modi eaque nisi odit pariatur? Eveniet, facere quidem! Vitae perspiciatis molestiae ut. Repudiandae dolorem quod pariatur sequi quia, laudantium, assumenda sint laborum quae magnam, aperiam est suscipit tempora magni! Est, aliquid. Velit provident fugit id aperiam non iste, cupiditate quaerat fuga inventore modi autem ea quos, impedit tempora, dolorum quidem molestias in laborum! Voluptatibus, est repellat? Eveniet nostrum voluptate nemo illo reiciendis nesciunt, magnam animi quis, optio voluptatum nisi sed aspernatur tempora incidunt perferendis voluptatibus corrupti, eius maiores nobis culpa. Iste, quod commodi a sed iure minus incidunt doloribus inventore praesentium quae, laborum accusantium aspernatur mollitia? Quia magni aut neque deleniti, iure molestiae distinctio, quis deserunt repellat tempore adipisci eum voluptatibus reiciendis? Obcaecati et quidem eligendi, voluptatum reprehenderit, totam sed veritatis repellat quos impedit amet! Laborum qui eum ducimus assumenda expedita!</div>
        </motion.div>
    </>);
};

export default Home;
