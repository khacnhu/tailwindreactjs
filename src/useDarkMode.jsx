import { useEffect, useState } from "react";

const useDarkMode = () => {
    const [isDarkMode, setDarkMode] = useState(()=> localStorage.theme === "dark")
    const toggleDarkMode = () =>{
        setDarkMode(!isDarkMode);
    }
    useEffect(()=>{
        const html = window.document.documentElement;
        console.log(html)
        const prev = isDarkMode ? "light": "dark";
        html.classList.remove(prev)
        const next = isDarkMode ? "dark": "light";
        html.classList.add(next)
        localStorage.setItem("theme", next)
    }, [isDarkMode])
    return (
        [isDarkMode, toggleDarkMode]
    )
}

export default useDarkMode;