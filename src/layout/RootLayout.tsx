import { Outlet } from "react-router";
import Nav from "../components/nav/Nav";
import { IoMdSettings } from "react-icons/io";
import { motion } from "motion/react"
import { useState } from "react";
import useThemeControll from "../utilities/hooks/useThemeControll";


// variant for ThemeController animation
const ThemeControllerVariant = {
    hidden: {
        x: "100%",
        transition: {
            type: "tween" as const,
            duration: .2
        }
    },
    visible: {
        x: "0",
        transition: {
            type: "tween" as const,
            duration: .2

        }
    }
}

const RootLayout = () => {

    const [isThemeTabOpen, setThemeTabOpen] = useState(false)
    // handle open & close state of theme controller
    function handleThemeTab() {
        setThemeTabOpen(!isThemeTabOpen)
    }

    const { setLightMode, setDarkMode } = useThemeControll()
    return (
        <div className="flex lg:flex-row flex-col relative overflow-x-hidden">
            <Nav></Nav>
            <main className=" w-[77%] lg:h-screen  ">
                <Outlet></Outlet>
            </main>

            {/* theme control tab */}
            <motion.div variants={ThemeControllerVariant} initial="hidden" animate={isThemeTabOpen ? "visible" : "hidden"} className="bg-themeSettingTabBg absolute right-0 top-1/4 rounded-bl-md will-change-transform">
                <div className="absolute bg-themeSettingTabBg left-0 -translate-x-[90%]  h-13 w-13 flex items-center justify-center rounded-bl-md rounded-l-md">
                    <button onClick={handleThemeTab}><IoMdSettings className=" text-sideBarBgColor text-4xl "></IoMdSettings></button>
                </div>
                <div className="w-45 px-4  h-50 relative text-textThemeController font-bold">
                    <div>
                        <h3 className=" mt-13 "> Theme Color</h3>

                        <div className="flex gap-2">
                            <button onClick={setLightMode} className="w-9 h-9 bg-white rounded-full cursor-pointer"></button>
                            <button onClick={setDarkMode} className="w-9 h-9 bg-red-300 rounded-full cursor-pointer"></button>
                        </div>

                    </div>

                </div>
            </motion.div>
        </div>

    );
};

export default RootLayout;