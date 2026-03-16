import useRootContext from "../../utilities/hooks/useRootContext";

const RootLayout = () => {

    const { user } = useRootContext()

    console.log(user)

    return (
        <main>
            <h1 className="font-bold">hi</h1>
        </main>
    );
};

export default RootLayout;