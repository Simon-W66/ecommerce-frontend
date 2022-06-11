import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import LoginCred from "./LoginCred.navbar"
import {AiOutlineClose} from "react-icons/ai"
import {Dropdown} from "./Dropdown.navbar";
import axios from "axios";
import Swal from 'sweetalert2';

//navbar neni full responsive. routing funguje ale treba spravit cssko kedze toto je strasne. jedna vec zakriva druhu... Horrible

const Nav = () => {
    const navigate = useNavigate();
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
    const logoutSubmit = (e) => {
      e.preventDefault();
      console.log('hello')
      //axios.post(`/api/logout`).then(res=>{
      //  if(res.data.status === 200){
      //    localStorage.setItem('auth_token', res.data.token); 
      //    localStorage.setItem('auth_name', res.data.username); 
      //    navigate('/'); 
      //    
      //    Swal.fire({
      //        icon:'success',
      //        text: res.data.message,
      //        position: 'top-end',
      //        timer: 1000
      //      })
      //  }else{
//
      //  }
      //})
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
                {(!localStorage.getItem("auth_token")) ? <LoginCred/> : <Dropdown logout={logoutSubmit}/>}
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
        <div className="fixed h-auto py-4 w-full sm:w-full lg:hidden bg-yellow-500 opacity-50 top-14  ">
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
                {(!localStorage.getItem("auth_token")) ? <LoginCred/> : <Dropdown/>}
            </ul>
        </div>
    )
}

export default Nav; 
