import React from 'react';
import PropTypes from 'prop-types';
import { FcMenu } from "react-icons/fc"
import { IconContext } from 'react-icons/lib';
import { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { BsList } from "react-icons/bs";

const Navbar = ({navlinks}) => {
    const [navStatus, setNavStatus] = useState(false);
    const showNav = () => setNavStatus(!navStatus);
    
    return (
        <nav className='flex flex-col pl-1 p-3 sticky'>
            <div className='absolute' onClick={showNav}>
                {
                    !navStatus ? 
                    <IconContext.Provider value={{color: "black", className:"h-8 w-8 color-primary"}}>
                        <BsList/>
                    </IconContext.Provider>
                    :
                    <IconContext.Provider value={{color: "black", className:"h-8 w-8"}}>
                        <CgClose />
                    </IconContext.Provider>
                }

            </div>
            <div className='w-full flex justify-center'>
                <h1 className='text-2xl text-white bg-stripes-cyan w-32 text-center'>V-Dash</h1>
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