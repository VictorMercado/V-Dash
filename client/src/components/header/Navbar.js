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
    const isDark = localStorage.theme === 'dark';
    const isThemeStored = 'theme' in localStorage;
    const [navStatus, setNavStatus] = useState({status: false, clicked: false});
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || localStorage.setItem("theme", JSON.stringify(themeArr[0])));
    if (theme) {
        document.querySelector('html').setAttribute('data-mode', theme);
    }
    const showNav = () => {
        setNavStatus({status: !navStatus.status, clicked: true})
    };
    const changeTheme = (theme) => {
        setTheme(theme);
        localStorage.setItem("theme", JSON.stringify(theme));
        document.querySelector('html').setAttribute('data-mode', theme);
    }
 

    const changeSynth = () => setTheme(themeArr[2]);
    const change80s = () => setTheme(themeArr[3]);

    return (
        <nav className='flex flex-col pl-1 p-3 fixed border-b-2 border-mainborder shadow-lg shadow-black w-full bg-background z-10 transition duration-700 ease-in-out'>
            <div className='grid grid-cols-[20%_60%_20%]'>
                <div className='flex'>
                    <div className='flex cursor-pointer' onClick={showNav}>
                    {
                        !navStatus.status ? 
                        <IconContext.Provider value={{color: "var(--icon)", className:"h-8 w-8 icon"}}>
                            <BsList/>
                        </IconContext.Provider>
                        :
                        <IconContext.Provider value={{color: "var(--icon)", className:"h-8 w-8"}}>
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
                            <div className="cursor-pointer delay-100" onClick={() => changeTheme('dark')}>
                                <IconContext.Provider  value={{color: "var(--primary)", className:"h-8 w-8 hover:scale-110 transition"}}>
                                    <BsMoonStars />
                                </IconContext.Provider>
                            </div>
                        : 
                            <div className="cursor-pointer delay-100" onClick={() => changeTheme('light')}>
                                <IconContext.Provider value={{color: "var(--third)", className:"h-8 w-8 hover:scale-110 transition"}}>
                                    <BsSun />
                                </IconContext.Provider>
                            </div> 
                    }
                </div>
            </div>
            
            <ul className={
            !navStatus.status && !navStatus.clicked ? 'h-0 invisible' 
            : !navStatus.status && navStatus.clicked ? 'h-0 invisible animate-shrinkNav' 
            : ' flex justify-center text-3xl animate-growNav'}>
            {
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