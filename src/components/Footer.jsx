import React, { Component } from 'react'
import { FaHome } from 'react-icons/fa'
import './Footer.css'

class Footer extends Component {
    state = {  }

    render() {
        return (
                <footer className='sm:w-full sm:h-[54px] sm:bg-[#f3f3f3] sm:flex sm:flex-row sm:absolute sm:bottom-0 sm:justify-around sm:items-center sm:border-t-2 sm:border-black'>
                    <i className='fa-solid fa-house sm:text-xl'></i>
                    <i className='fa-regular fa-bookmark sm:text-xl'></i>
                    <i className='fa-regular fa-user sm:text-xl'></i>
                    <i className='fa-solid fa-camera sm:text-xl sm:bg-[#F49E0D] sm:py-1 sm:px-2 sm:text-center sm:align-middle sm:rounded-full sm:text-white' ></i>
                </footer>
        )
    }
}

export default Footer