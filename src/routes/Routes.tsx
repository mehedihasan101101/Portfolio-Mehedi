import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

const Routes = createBrowserRouter([
    {
        path: "",
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: "about",
                element: <About></About>
            },
            {
                path: "portfolio",
                element: <Portfolio></Portfolio>
            },
            {
                path: "contact",
                element: <Contact></Contact>
            }
        ]

    }
])

export default Routes