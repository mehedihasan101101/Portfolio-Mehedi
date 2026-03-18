import { Outlet } from "react-router";
import Nav from "../components/nav/Nav";
import { IoMdSettings } from "react-icons/io";
import { motion } from "motion/react"
import { useState } from "react";



const VariantThemeControllerTab = {
    hidden: {
        x: "100%",
        transition: {
            type: "tween" as const,
        }
    },
    visible: {
        x: "0",
        transition: {
            type: "tween" as const,

        }
    }
}

const RootLayout = () => {

    const [isThemeControllerOpen, setIsThemeControllerOpen] = useState(false)

    function handleThemeControllerState() {
        setIsThemeControllerOpen(!isThemeControllerOpen)
    }



    return (
        <div className="flex relative overflow-x-hidden">
            <Nav></Nav>
            <main className=" w-[77%] h-screen  ">
                <Outlet></Outlet>
            </main>

            {/* theme control tab */}
            <motion.div variants={VariantThemeControllerTab} initial="hidden" animate={isThemeControllerOpen ? "visible" : "hidden"} className="bg-themeSettingTabBg absolute right-0 top-1/4 rounded-bl-md will-change-transform">
                <div className="absolute bg-themeSettingTabBg left-0 -translate-x-[90%]  h-13 w-13 flex items-center justify-center rounded-bl-md rounded-l-md">
                    <button onClick={handleThemeControllerState}><IoMdSettings className=" text-sideBarBgColor text-4xl "></IoMdSettings></button>
                </div>
                <div className="w-30  h-50 relative">

                </div>
            </motion.div>
        </div>

    );
};

export default RootLayout;