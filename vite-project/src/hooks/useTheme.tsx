import { useEffect, useState } from "react"
import "../index.css"

const useTheme = ()=>{
    const [theme, setTheem]=useState<string>(()=>{
        return localStorage.getItem("theme") || "light";
    })
    useEffect(()=>{
        localStorage.setItem("theme",theme)
        document.body.classList.remove("light", "dark");
        document.body.classList.add(theme);
    },[theme]);

    const toggleTheme= ()=>{
        setTheem((prev) => prev==="light"? "dark" : "light")
    }
    return{theme, toggleTheme};
}
export default useTheme