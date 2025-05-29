import React from 'react';
import Dropdown from './dropdown.jsx'
import updateMe from './assets/updateMe.png'

// const Navbar = () => {
//     return(
//         <nav className='bg-white z-40 top-0 shadow-md w-full px-16 py-4 flex justify-between mx-auto'>
//             <div className="leftNav w-1/2 flex text-lg font-semibold">Movie Review</div>
//             <div className="rightNav w-1/2 hidden md:block">
//                 <ul className="submenu flex justify-end gap-16">
//                     <li>Top Rate</li>
//                     <li>Latest Update</li>
//                     <li>About us</li>
//                 </ul>
//             </div>
//             <div className="dropdown block md:hidden -ps-20">
//                 <Dropdown />
//             </div>
//         </nav>
//     );
// };

const Navbar = () => {
    return (
        <nav className="bg-white z-40 top-0 shadow-md w-full px-4 md:py-4 flex justify-between mx-auto">
            <div className="content-center bg-white w-full flex items-center justify-between -ms-6 md:ms-0 mx-auto p-0 md:p-2 px-10 md:px-10 sticky top-0">
                <a href="#" className="w-1/2 md:w-auto flex items-center space-x-3 rtl:space-x-reverse justify-start">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-700">Mini Blog</span>
                </a>
                <div className="w-1/2 md:block md:w-auto transition-all ease-in-out duration-300 justify-end md:justify-between">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white justify-end md:justify-between">
                        <li>
                            <img src={updateMe} className="w-8 rounded-full ms-36 md:ms-0" alt="profile" />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};



export default Navbar;