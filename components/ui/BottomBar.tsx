"use client";

import { useState, useEffect } from "react";

function BottomBar() {
    const [opacity, setOpacity] = useState(1);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const maxScroll = window.innerHeight / 3;
        const newOpacity = Math.max(1 - scrollTop / maxScroll, 0);
        setOpacity(newOpacity);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className="text-slate-500 w-full text-center bg-transparent backdrop-filter backdrop-blur-lg py-2"
            style={{
                position: "fixed",
                bottom: "0",
                left: "50%",
                transform: "translateX(-50%)",
                opacity: opacity,
                transition: "opacity 0.3s",
                zIndex: 1000,
            }}>
            scroll down
        </div>
    )
}

export default BottomBar