import Profile from '../assets/updateMe.png'

const Navbar = () => {
    return(
        <nav className="bg-white flex justify-center z-50 w-screen md:-ms-20 -ms-6 fixed top-0 p-0 md:p-4 md:px-44 shadow-md">
          <div className="content-center bg-white w-full flex items-center justify-between -ms-6 md:ms-0 mx-auto p-0 md:p-2 px-10 md:px-10 sticky top-0">
            <a href="#" className="w-1/2 md:w-auto flex items-center space-x-3 rtl:space-x-reverse justify-start">
              <span className="self-center hidden md:block text-2xl font-semibold whitespace-nowrap text-gray-700">Tiba Tiba Ngajar</span>
              <span className="self-center md:hidden text-2xl font-semibold whitespace-nowrap text-gray-700">Mini Blog</span>
            </a>
            <div className="w-1/2 md:block md:w-auto transition-all ease-in-out duration-300 justify-end md:justify-between">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white justify-end md:justify-between">
                <li>
                  <h1 className="text-lg font-semibold text-gray-700 gap-16 me-0 md:me-4 hidden md:block">Mini Blog</h1>
                </li>
                <li>
                  <img src= {Profile} className="w-8 rounded-full ms-36 md:ms-0" alt="profile" />
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
};

export default Navbar;