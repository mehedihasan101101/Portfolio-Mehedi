import { useEffect, useState } from "react";

export default function () {
    const [isHoverAble, setIsHoverAble] = useState(false);

    useEffect(() => {
        const handleMouseIn = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("button, a, input, textarea, select, [data-hoverable]")) {
                setIsHoverAble(true);
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("button,Link, a, input, textarea, select, [data-hoverable]")) {
                setIsHoverAble(false);
            }
        };

        document.addEventListener("mouseover", handleMouseIn);
        document.addEventListener("mouseout", handleMouseOut);

        return () => {
            document.removeEventListener("mouseover", handleMouseIn);
            document.removeEventListener("mouseout", handleMouseOut);
        };
    }, []);

    return { isHoverAble };
}