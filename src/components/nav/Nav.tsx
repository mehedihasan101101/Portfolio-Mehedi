import { NavLink } from "react-router";

type NavFields = {
    name: string,
    id: number,
    path: string
}
const navFields: NavFields[] = [
    { name: "Home", id: 1, path: "" },
    { name: "About", id: 2, path: "/about" },
    { name: "Portfolio", id: 3, path: "/portfolio" },
    { name: "Contact", id: 4, path: "/contact" },
]
const Nav = () => {

    return (
        <div className="w-[23%] h-screen border border-amber-300 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-extrabold"> TOKYO</h1>
            {navFields.map((eachField => <NavLink key={eachField.id} to={eachField.path}>{eachField.name}</NavLink>))}
        </div>
    );
};

export default Nav;