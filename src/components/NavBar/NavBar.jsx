import { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon} from "react-icons/fa";
import {HiOutlineMenu} from "react-icons/hi"
import {MdOutlineClose } from "react-icons/md";
import useDarkMode from "../../useDarkMode";
const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [isDarkMode, toggleDarkMode] = useDarkMode()
    const handleMenu = ()=>{
        setOpenMenu(!openMenu)
    }
    return (
        <nav className="flex items-center">
            <div className="flex items-center">
                <div className="text-20 font-bold mr-2">NERT CARD</div>
                { isDarkMode ? (
                    <BsSunFill size={"24px"} color="yellow" className="cursor-pointer" onClick = {toggleDarkMode}/>

                ) : (
                    <FaMoon size = {"24px"} color = "yellow" className="cursor-pointer" onClick={toggleDarkMode}/>
                ) }
            </div>
            <ul className="ml-auto font-bold">  
                {openMenu ? (
                    <MdOutlineClose size = {"24px"} onClick={handleMenu}/>
                ):(
                    <HiOutlineMenu size={"24px"} className = "cursor-pointer" onClick = {handleMenu}/>
                )
                }
                
                { openMenu && (
                    <div className="absolute right-8 bg-pink-800 p-8 text-center text-14 transition-all duration-500">
                        <li className="cursor-pointer">Feature</li>  
                        <li className="cursor-pointer">Menu </li>
                        <li className="cursor-pointer">Our Story</li>
                        <li className="cursor-pointer">Contact</li> 
                    </div>
                )
                
                }

            </ul>

        </nav>
    )
};

export default NavBar;


