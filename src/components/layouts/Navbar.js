import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import {MenuLinks} from "./MenuItems"
import {Login} from "../auth/Login"
import {AiOutlineClose} from "react-icons/ai"

//navbar neni full responsive. routing funguje ale treba spravit cssko kedze toto je strasne. jedna vec zakriva druhu... Horrible

const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" }
  ];
  const [active,setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }
  
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false)

    const showSideMenu = () => {
        (isSideMenuOpen) ? setisSideMenuOpen(false) : setisSideMenuOpen(true)
    }

    return (
        <div className="fixed w-full h-8 bg-blue-400 text-gray-200 flex flex-row justify-between items-center">
            <div className="brand-logo text-sm font-bold px-2">rhombus</div>
            <ul className="hidden menu-list lg:flex lg:flex-row text-xs font-bold">
                <li className="menu-list-item px-2"><a href="#">Home</a></li>
                <li className="menu-list-item px-2"><a href="#">Profile</a></li>
                <li className="menu-list-item px-2"><a href="#">Settings</a></li>
            </ul>
            
            <button onClick={()=>{showSideMenu()}} className="lg:hidden menu-button">
                {(isSideMenuOpen) ? <AiOutlineClose className="w-8 h-8 px-2"/> : <GiHamburgerMenu  className="w-8 h-8 px-2" />}
            </button>
            {(isSideMenuOpen) ? SideMenu() : ''}
        </div>
    )

   
}

function SideMenu(){
    return(
        <div className="fixed h-1/3 w-full sm:w-1/4 lg:hidden bg-blue-500 top-8">
            <ul className="menu-list flex flex-col text-xs font-bold">
                <li className="menu-list-item py-2 hover:bg-white hover:text-blue-700"><a href="#">Home</a></li>
                <li className="menu-list-item py-2 hover:bg-white hover:text-blue-700"><a href="#">Profile</a></li>
                <li className="menu-list-item py-2 hover:bg-white hover:text-blue-700"><a href="#">Settings</a></li>
            </ul>
        </div>
    )
}

export default Nav; 
