import { useContext } from "react"
import { RootContext } from "../../context/Context"

/**
 * Custom hook to access RootContext values.
 * @throws Error if used outside of a RootContextProvider.
 * @returns The typed context value.
 */


function useRootContext() {
    const context = useContext(RootContext);
    if (!context) {
        throw new Error("useRootContext must be used inside RootContext Provider")
    }
    return context
}

export default useRootContext