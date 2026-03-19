import { useEffect, useState } from "react";

function useThemeControll() {
    const [themeMode, setThemeMode] = useState(() => {
        const getThemeMode = localStorage.getItem("myThemeMode");
        return (getThemeMode ? getThemeMode : "lightMode")
    })

    useEffect(() => {
        localStorage.setItem("myThemeMode", themeMode);
        document.documentElement.setAttribute("data-theme", themeMode)
    }, [themeMode])
    function setLightMode() {
        setThemeMode("lightMode")
    }
    function setDarkMode() {
        setThemeMode("darkMode")
    }
    return { setLightMode, setDarkMode }
}

export default useThemeControll