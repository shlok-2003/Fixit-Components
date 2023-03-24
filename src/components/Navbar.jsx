import React, { Component } from 'react'
import './Navbar.css'

const Navlink = () => {
    return (
        <nav className='sm:flex sm:flex-row sm:ml-auto sm:pr-2 sm:text-[22px] sm:items-center'>
            <input className='sm:w-40 sm:h-8 sm:appearance-none sm:rounded-xl sm:text-black sm:text-base sm:pl-3 sm:outline-none' type='search' />

            <i className='fa-solid fa-magnifying-glass sm:mx-2'></i>
            <i className='fa-regular fa-bell sm:mx-2'></i>
        </nav>
    )
}

class Navbar extends Component {
    state = {  }
    
    render() {
        return (
            <>
                <header className='sm:w-full sm:h-[61px] sm:bg-[#0F3486] sm:text-white sm:flex sm:flex-row sm:top-0 sm:py-2 sm:items-center md:h-max'>
                    
                    <h1 className='sm:text-xl sm:font-bold sm:ml-2 sm:select-none'>Profile</h1>

                    <Navlink />
                </header>
            </>
        )
    }   
}

export default Navbar