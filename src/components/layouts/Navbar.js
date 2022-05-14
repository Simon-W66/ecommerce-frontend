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
    { name: "Market", link: "/market" },
    { name: "Blog", link: "/blog" },
  ];
  const [active,setActive] = useState(false)

    
  
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false)

    const showSideMenu = () => {
        (isSideMenuOpen) ? setisSideMenuOpen(false) : setisSideMenuOpen(true)
    }

    return (
        <div className="fixed w-full h-14 bg-yellow-500 text-gray-100 flex flex-row justify-between items-center shadow-md ">
            <div className="brand-logo text-lg font-bold px-2">Ecommerce</div>
            <ul className="hidden menu-list lg:flex lg:flex-row text-xs font-bold px-6 ">
                {Links.map((link) => (
                  <li key={link.name} className="md:ml-8 text-2xl md:my-0 my-7">
                    <a
                      href={link.link}
                      className="text-gray-100 hover:text-black font-mono"
                    >
                      {link.name.toUpperCase()}
                    </a>
                  </li>
                ))}
            </ul>
            
            <button onClick={()=>{showSideMenu()}} className="lg:hidden menu-button">
                {(isSideMenuOpen) ? <AiOutlineClose className="w-12 h-12 p-1"/> : <GiHamburgerMenu  className="w-12 h-12 p-1" />}
            </button>
            {(isSideMenuOpen) ? SideMenu() : ''}
        </div>
    )

   
}

function SideMenu(){
    let Links = [
    { name: "HOME", link: "/" },
    { name: "Market", link: "/market" },
    { name: "Blog", link: "/blog" },
    
  ];
    return(
        <div className="fixed h-auto py-4 w-full sm:w-2/4 lg:hidden bg-yellow-500 opacity-50 top-14  ">
            <ul className="menu-list flex flex-col text-medium font-bold text-center ">
                {Links.map((link) => (
                  <li key={link.name} className="md:ml-8 text-xl md:my-0 my-2 opacity-100">
                    <a
                      href={link.link}
                      className="text-gray-100 hover:text-black font-mono"
                    >
                      {link.name.toUpperCase()}
                    </a>
                  </li>
                ))}
            </ul>
        </div>
    )
}

export default Nav; 
