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
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) | localStorage.setItem("theme", JSON.stringify(themeArr[0])));
    const showNav = () => setNavStatus(!navStatus);
    const changeLight = () => {
        setTheme(themeArr[0]);
        localStorage.setItem("theme", JSON.stringify(themeArr[0]));
        console.log(JSON.parse(localStorage.getItem("theme")));
    }

    const changeDark = () => {
        setTheme(themeArr[1]);
        localStorage.setItem("theme", JSON.stringify(themeArr[1]));
        console.log(JSON.parse(localStorage.getItem("theme")));
    }
    const changeSynth = () => setTheme(themeArr[2]);
    const change80s = () => setTheme(themeArr[3]);
    // const theme = JSON.parse(localStorage.getItem("theme"));
    // console.log(theme);
    return (
        <nav className='flex flex-col pl-1 p-3 sticky'>
            <div className='grid grid-cols-3'>
                <div className='flex'>
                    <div className='flex' onClick={showNav}>
                    {
                        !navStatus ? 
                        <IconContext.Provider value={{color: "white", className:"h-8 w-8 transition ease-in"}}>
                            <BsList/>
                        </IconContext.Provider>
                        :
                        <IconContext.Provider value={{color: "white", className:"h-8 w-8 transition"}}>
                            <CgClose />
                        </IconContext.Provider>
                    }
                    </div>
                </div>
                <h1 className=' font-bold text-5xl text-clip bg-stripes-cyan-text text-center hover:scale-110 transition delay-100'>
                    V-Dash
                </h1>
                {
                    console.log("this is what the theme is:" + theme)
                }
                {
                    theme === 'light' ?
                       <div className="w-full flex justify-end cursor-pointer hover:scale-110  delay-100" onClick={changeDark}>
                            <IconContext.Provider value={{color: "#007bff", className:"h-8 w-8 color-primary"}}>
                                <BsMoonStars />
                            </IconContext.Provider>
                        </div>
                    : 
                        <div className="flex justify-end cursor-pointer hover:scale-110  delay-100" onClick={changeLight}>
                            <IconContext.Provider value={{color: "#ffc107", className:"h-8 w-8 color-primary"}}>
                                <BsSun />
                            </IconContext.Provider>
                        </div> 
                }
            </div>
            
            <ul className={!navStatus ? 'hidden' : 'animate-pulse'}>{
                navlinks.map((item, index) => 
                { 
                    return <li key={index} className='list-none m-2' > {item}</li> 
                })
            }

            </ul>

        </nav>
    );
}

Navbar.propTypes = {

}

export default Navbar;