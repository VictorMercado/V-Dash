import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons/lib';
import { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { BsList } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

const themeArr = ['light', 'dark', 'synthwave', '80s'];
const Navbar = ({navlinks}) => {
    const [navStatus, setNavStatus] = useState(false);
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || localStorage.setItem("theme", JSON.stringify(themeArr[0])) );
    const showNav = () => setNavStatus(!navStatus);
    const changeTheme = (theme) => {
        setTheme(theme);
        localStorage.setItem("theme", JSON.stringify(theme));
        console.log(JSON.parse(localStorage.getItem("theme")));
        document.querySelector('html').setAttribute('data-mode', theme);
    }

    const changeDark = () => {
        setTheme(themeArr[1]);
        localStorage.setItem("theme", JSON.stringify(themeArr[1]));
        console.log(JSON.parse(localStorage.getItem("theme")));
        document.querySelector('html').setAttribute('data-mode', themeArr[1]);
    }
    const changeSynth = () => setTheme(themeArr[2]);
    const change80s = () => setTheme(themeArr[3]);
    // const theme = JSON.parse(localStorage.getItem("theme"));
    // console.log(theme);
    return (
        <nav className='flex flex-col pl-1 p-3 fixed border-b-2 border-mainborder shadow-lg shadow-black w-full bg-background z-10 hover:bg-main hover:transition hover:duration-200'>
            <div className='grid grid-cols-[20%_60%_20%]'>
                <div className='flex'>
                    <div className='flex cursor-pointer' onClick={showNav}>
                    {
                        !navStatus ? 
                        <IconContext.Provider value={{color: "var(--icon)", className:"h-8 w-8 transition ease-in"}}>
                            <BsList/>
                        </IconContext.Provider>
                        :
                        <IconContext.Provider value={{color: "var(--icon)", className:"h-8 w-8 transition"}}>
                            <CgClose />
                        </IconContext.Provider>
                    }
                    </div>
                </div>
                <div className='flex justify-center'>
                    <h1 className='max-w-max font-bold text-5xl bg-gradient-text text-center hover:scale-110 transition delay-400'>
                        V-Dash
                    </h1>
                </div>
                {
                    console.log("this is what the theme is:" + theme)
                }
                <div className='flex justify-end '>
                    {
                        theme === 'light' ?
                        <div className="cursor-pointer delay-100" onClick={() => changeTheme(themeArr[1])}>
                                <IconContext.Provider  value={{color: "var(--primary)", className:"h-8 w-8 hover:scale-110 transition"}}>
                                    <BsMoonStars />
                                </IconContext.Provider>
                            </div>
                        : 
                            <div className="cursor-pointer delay-100" onClick={() => changeTheme(themeArr[0])}>
                                <IconContext.Provider value={{color: "var(--third)", className:"h-8 w-8 hover:scale-110 transition"}}>
                                    <BsSun />
                                </IconContext.Provider>
                            </div> 
                    }
                </div>
            </div>
            
            <ul className={!navStatus ? 'h-0 invisible animate-shrinkNav' : ' flex justify-center text-3xl animate-growNav'}>{
                navlinks.map((item, index) => 
                { 
                    return <li key={index} className='m-2 text-fontcolor list-none cursor-pointer hover:animate-pulse hover:text-accent hover-border-b-2 border-border2' > {item}</li> 
                })
            }

            </ul>

        </nav>
    );
}

Navbar.propTypes = {

}

export default Navbar;