import { useEffect, useState, } from "react";
interface mousePosition {
    x: null | number,
    y: null | number
}
export default function useMousePosition() {
    const [mousePosition, setMousePosition] = useState<mousePosition>({ x: null, y: null })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove)

        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])
    return mousePosition
}
