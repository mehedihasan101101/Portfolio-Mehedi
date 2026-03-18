import { Outlet } from "react-router";
import Nav from "../components/nav/Nav";
import useRootContext from "../utilities/hooks/useRootContext";

const RootLayout = () => {

    const { user } = useRootContext()

    console.log(user)

    return (
        <div className="flex">
            <Nav></Nav>
            <main className=" w-[77%] h-screen border border-amber-300">
                <Outlet></Outlet>
            </main>
        </div>

    );
};

export default RootLayout;