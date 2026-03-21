import { Outlet } from "react-router";
import Nav from "../components/nav/Nav";
import { IoMdSettings } from "react-icons/io";
import { motion } from "motion/react"
import { useState } from "react";
import useThemeControl from "../utilities/hooks/useThemeControl";
import useMousePosition from "../utilities/hooks/useMousePosition";
import cursorImg from '../assets/cursorImg/cursor.svg';
import useIsHoverAble from "../utilities/hooks/useIsHoverAble";

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
};

const RootLayout = () => {

    const { x, y } = useMousePosition(); //custom hook that return mouse cursor position
    const { isHoverAble } = useIsHoverAble()
    console.log(isHoverAble)
    //cursor animation variant
    const mouseCursorVariant = {
        animation: {
            x: x ?? 0,
            y: y ?? 0,
            transition: {
                type: "spring" as const,
                stiffness: 500,
                damping: 40
            },
            scale: isHoverAble ? 2 : 1
        },

    }
    const [isThemeTabOpen, setThemeTabOpen] = useState(false)
    // handle open & close state of theme controller
    function handleThemeTab() {
        setThemeTabOpen(!isThemeTabOpen)
    }

    const { setLightMode, setDarkMode } = useThemeControl();
    return (

        <div className="flex  min-h-screen lg:flex-row flex-col relative overflow-x-hidden">
            <div className="lg:w-[23%]">
                <Nav></Nav>

            </div>
            <main className=" lg:w-[77%] lg:px-0 px-2.5 flex-1  flex flex-col ">
                <Outlet></Outlet>
            </main>
            {/* cursor Svg */}
            <motion.img variants={mouseCursorVariant} animate="animation" className="  fixed lg:block hidden pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2" src={cursorImg} alt="" />

            {/* theme control tab */}
            <motion.div variants={ThemeControllerVariant} initial="hidden" animate={isThemeTabOpen ? "visible" : "hidden"} className="bg-themeSettingTabBg absolute right-0 top-1/4 rounded-bl-md will-change-transform">
                <div className="fixed bg-themeSettingTabBg left-0 -translate-x-[90%]  h-13 w-13 flex items-center justify-center rounded-bl-md rounded-l-md">
                    <button onClick={handleThemeTab}><motion.div
                        initial={{ rotate: 0 }} animate={{ rotate: 180 }}
                        transition={{
                            repeat: Infinity, duration: 1,
                            ease: "linear"
                        }}
                    ><IoMdSettings className=" text-sideBarBgColor text-4xl "></IoMdSettings></motion.div></button>
                </div>
                <div className="w-45 px-4  h-50 relative text-sideBarBgColor font-bold">
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