import { createBrowserRouter } from "react-router";
import RootLayout from "../components/root_layout/RootLayout";

const Routes = createBrowserRouter([
    {
        path: "",
        element: <RootLayout></RootLayout>
    }
])

export default Routes