import { createContext, type ReactNode } from "react";



interface MainContestInterface {
    // type definition for the value stored in root context
    user: {
        name: string
    };
}

type RootContextProp = {
    // type definition for the props that Context receives
    children: ReactNode;
}

const RootContext = createContext<MainContestInterface | null>(null);



const Context = ({ children }: RootContextProp) => {


    const user = {
        name: "mehedi"
    }

    const value = {
        user
    }


    return (
        <>
            <RootContext.Provider value={value}>
                {children}
            </RootContext.Provider>

        </>
    );
};



export { Context, RootContext };