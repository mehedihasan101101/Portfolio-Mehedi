import useRootContext from "../../utilities/hooks/useRootContext";

const RootLayout = () => {

    const { user } = useRootContext()

    console.log(user)

    return (
        <div>
            <h1>hissss</h1>
        </div>
    );
};

export default RootLayout;