import { useEffect } from "react";
import { useState } from "react";

function useMouseLocation(initVal) {
    const [mouseLocation, setMouseLocation] = useState(initVal || { x: null, y: null });
    
    useEffect((e) => {
        window.addEventListener("mousemove", (e) => {
            setMouseLocation({x: e.x, y: e.y });
        })
    },[])

    return mouseLocation;
}

export default useMouseLocation;