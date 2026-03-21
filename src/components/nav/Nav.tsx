import { NavLink } from "react-router";
import { PiCopyrightThin } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { RiSuitcaseFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";

type NavFields = {
    name: string,
    icon: React.ElementType,
    id: number,
    path: string,
    size: number
}
const navFields: NavFields[] = [
    {
        name: "Home", icon: FaHome, size: 20.9, id: 11, path: ""
    },
    { name: "About", icon: IoPersonSharp, size: 19.7, id: 22, path: "/about" },
    { name: "Portfolio", icon: RiSuitcaseFill, size: 21.4, id: 32, path: "/portfolio" },
    { name: "Contact", icon: IoIosMail, size: 23.7, id: 55, path: "/contact" },

]
const Nav = () => {

    return (
        <div className="lg:w-[23%] fixed w-full z-50 lg:h-screen h-18 lg:px-0 px-2.5  flex items-center justify-center  bg-sideBarBgColor shadow-[1px_0px_0px_0px_var(--color-sideMenuShadow)] ">
            <div className="flex lg:flex-col lg:w-auto w-full lg:items-start items-center lg:justify-normal justify-between lg:space-y-12">
                <h1 className=" lg:text-[32px] text-primaryTextColor md:text-[25px] text-[22px]  font-extrabold">RyzerX</h1>

                <div className="flex lg:flex-col lg:gap-y-2 gap-3 items-start justify-center">
                    {navFields.map((eachField) => {
                        const Icon = eachField.icon;
                        return (
                            <div key={eachField.id}><NavLink className="text-secondaryTextColor lg:block hidden  font-medium text-[16px]" to={eachField.path}>
                                {eachField.name}
                            </NavLink>

                                <NavLink className="lg:hidden" key={eachField.id} to={eachField.path}>

                                    <Icon size={eachField.size} className="text-primaryTextColor" />

                                </NavLink >


                            </div>)
                    })
                    }

                </div>
                <div className="text-secondaryTextColor lg:block hidden">
                    <p className="flex items-center"> <span className="pr-1"><PiCopyrightThin ></PiCopyrightThin></span>2026 RyzerX </p>
                    <p className="text-[16px]">Created by <span className="font-medium">Mehedi Hasan</span> </p>
                </div>
            </div>
        </div >
    );
};

export default Nav;