import React from 'react';
import Dropdown from './dropdown.jsx'

const Navbar = () => {
    return (
        <nav className="bg-white fixed py-8 z-50 top-0 shadow-md w-full px-16 flex justify-between mx-auto">
            <div className="content-center bg-white w-full flex items-center justify-between -ms-6 md:ms-0 mx-auto sticky top-0">
                <a href="#" className="w-1/2 md:w-auto flex items-center space-x-3 rtl:space-x-reverse justify-start">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-700">Farrel Ekaputra</span>
                </a>
                <div className="w-1/2 md:block md:w-auto transition-all ease-in-out duration-300 justify-end md:justify-between">
                    <ul className="font-medium flex flex-col md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white justify-end md:justify-between">
                        <Dropdown />
                    </ul>
                </div>
            </div>
        </nav>
    );
};



export default Navbar;