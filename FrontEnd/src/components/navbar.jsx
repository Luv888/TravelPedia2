import React from 'react'
import logo from '../assets/logo.png'
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
const Navbar = () => {
    const items = [
       "Home", "Explore", "Experiences", "Events", "Blogs"
    ]
    return (
        <div className='flex justify-between  bg-red-800 items-center h-auto flex-row p-1 pl-5 pr-5 text-white'>

            <div className="logo">
               <Link to={"/"}><img className="h-14 w-14" src={logo} alt="logo" /></Link> 
            </div>
            <ul className=" list-none flex gap-10 ">
                {items.map((item , i) => (
                  <Link to={`/${item}`} key={i}><li key={i} className='hover:bg-red-900 p-2 rounded-md'>{item}</li></Link>
                ))
                }
            </ul>
            <div className="logIn flex gap-3 items-center">
                <Link to={`/LogIn`}>
                    <CgProfile
                    style={{
                        color: "white",
                        height: "30px",
                        width: "30px",
                    }}
                    className="hover:bg-red-900"
                />
                </Link>


            </div>
        </div>
    )
}

export default Navbar