import React, { Component } from 'react'
import './Content.css'
import logo from '../Logo/Sujit.png'


const Image = () => {
    return (
        <div className='sm:flex sm:my-auto'>
            <img src={logo} className='sm:h-[134px] sm:w-[134px] sm:rounded-full sm:mx-auto'></img>
        </div>
    )
}

const NameText = (props) => {
    return (
        <div>
        {/* {document.getElementById('name-textbox').value = props.txt} */}
            <input id='name-textbox' type='text' className='sm:w-full sm:appearance-none sm:text-xl sm:font-bold sm:text-center sm:inline sm:border-b-[1.5px] sm:outline-none sm:border-black' value={props.txt} readOnly/>
            <i className='fa-solid fa-pen sm:bottom-9 sm:text-xl sm:absolute sm:right-0'></i>            
        </div>
    )
}

const UserText = (props) => {
    return (
        <div>
            <input type='text' className='sm:w-full sm:appearance-none sm:text-sm sm:font-medium sm:text-center sm:inline sm:border-b-[1.5px] sm:outline-none sm:border-black sm:my-2' value={props.txt} readOnly />
            <i className='fa-solid fa-pen sm:bottom-2 sm:text-xl sm:absolute sm:right-0'></i>
        </div>
    )
}

class Content extends Component {
    state = { 
        Name: 'Sujit Mourya',
        Username: '@SujitKumarMourya',
        IssueNum: 1,
        DraftNum: 4,
        NotificationNum: 2,
    }

    render() {
        return (
            <div className=' sm:rounded-t-[45px] sm:bg-white sm:h-[calc(100vh-5.75rem)]'>
                <div className='sm:h-max sm:relative sm:w-[250px] sm:flex sm:flex-col sm:mx-auto sm:justify-center sm:pt-2'>
                    <Image />

                    <NameText txt={this.state.Name}/>
                    <UserText txt={this.state.Username}/>
                </div>

                <div className='sm:w-[75%] md:w-[50%] sm:h-[10.875rem] sm:mt-2 sm:bg-white sm:flex sm:flex-col sm:mx-auto'>

                    <div className='sm:flex sm:items-center sm:border-b-2 sm:border-gray-300 cursor-default md:hover:shadow-[0_1px_1px_1px_rgba(0,0,0,0.15)] sm:transition-all sm:delay-100'>
                        <i className='fa-solid fa-table-list sm:text-lg'></i>
                        <span className='sm:ml-4 sm:float-left sm:text-lg'>My Issues</span>
                        <span className='sm:ml-auto sm:float-right'>{this.state.IssueNum}</span>
                    </div>

                    <div className='sm:flex sm:items-center sm:border-b-2 sm:border-gray-300 cursor-default md:hover:shadow-[0_1px_1px_1px_rgba(0,0,0,0.15)] sm:transition-all sm:delay-100'>
                        <i className='fa-solid fa-list sm:text-lg'></i>
                        <span className='sm:ml-4 sm:float-left sm:text-lg'>My Drafts</span>
                        <span className='sm:ml-auto sm:float-right'>{this.state.DraftNum}</span>
                    </div>

                    <div className='sm:flex sm:items-center sm:border-b-2 sm:border-gray-300 cursor-default md:hover:shadow-[0_1px_1px_1px_rgba(0,0,0,0.15)] sm:transition-all sm:delay-100'>
                        <i className='fa-solid fa-arrow-rotate-left sm:text-lg'></i>
                        <span className='sm:ml-4 sm:float-left sm:text-lg'>Notifications</span>
                        <span className='sm:ml-auto sm:float-right'>{this.state.NotificationNum}</span>
                    </div>

                    <div className='sm:flex sm:items-center sm:border-b-2 sm:border-gray-300 cursor-default md:hover:shadow-[0_1px_1px_1px_rgba(0,0,0,0.15)] sm:transition-all sm:delay-100'>
                        <i className='fa-solid fa-right-from-bracket sm:text-lg'></i>
                        <span className='sm:ml-4 sm:float-left sm:text-lg'>Log Out</span>
                    </div>

                </div>
            </div>
        )
    }   
}

export default Content