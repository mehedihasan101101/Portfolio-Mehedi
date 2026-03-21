import profileImg from "../assets/personalImg/profilePicture.jpg"
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "motion/react"
const morphEffect = {
    animate: {
        borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
        ],
        transition: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut" as const
        },
    },
};
const Home = () => {
    return (
        <div className=" flex-1 flex items-center justify-center">
            <div className="flex lg:px-10 text-primaryTextColor  h-full lg:flex-row flex-col  items-center lg:space-y-0 space-y-10 lg:gap-16 justify-center">
                {/* Profile Image  */}
                <motion.div variants={morphEffect} animate="animate" className="   rounded-full relative overflow-hidden md:w-70 md:h-70 w-55 h-55 ">
                    <img className=" w-full h-full  object-cover" src={profileImg} alt="" />
                    <motion.div variants={morphEffect} animate="animate" className="absolute top-0  w-full h-full border-8 rounded-full border-[#555555]/50">
                    </motion.div>
                </motion.div>
                <div className="space-y-10 flex flex-1  flex-col lg:items-start items-center justify-center ">
                    <h1 className="md:text-6xl text-4xl font-extrabold">MEHEDI HASAN </h1>
                    <p className=" max-w-150 text-secondaryTextColor font-medium italic lg:text-start text-center">Front-End Web Developer passionate about creating modern, responsive, and user-friendly web interfaces. Specializes in <span className="font-bold">HTML, CSS, JavaScript, and React.</span>  </p>
                    <div className="flex gap-4 text-xl">
                        <Link to={""}><FaLinkedin />   </Link>
                        <Link to={""}><FaGithub />   </Link>
                        <Link to={""}><FaFacebook />   </Link>
                        <Link to={""}> <FaInstagramSquare />   </Link>

                    </div>
                </div>

            </div>


        </div>
    );
};

export default Home;