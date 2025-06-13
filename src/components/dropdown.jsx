import {useState} from 'react';

const listVertikal = () =>{
    return(
        <div className='flex flex-col fixed bg-white shadow-md p-3 gap-4'>
            <a href="#home" className='py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:hover:font-semibold md:p-0'>Home</a>
            <a href="#what-i-do" className='py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:hover:font-semibold md:p-0'>What I do</a>
            <a href="#" className='py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:hover:font-semibold md:p-0'>Portofolio</a>
            <a href="#" className='py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:hover:font-semibold md:p-0'>Contact Me</a>
        </div>
    );
}

const listHorizontal = () => {
    return(
        <div className='hidden md:block flex bg-white p-3 gap-8'>
                    <a href="#home" className='text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:hover:font-semibold'>Home</a>
                    <a href="#what-i-do" className='text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:hover:font-semibold'>What I do</a>
                    <a href="#" className='text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:hover:font-semibold'>Portofolio</a>
                    <a href="#" className='text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:hover:font-semibold'>Contact Me</a>
                </div>
    )
}

const Dropdown = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    return(
        <div className="relative inline-block">
            <div>
                {listHorizontal()}
                <button type="button" onClick={toggleDropdown} className='md:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-8'>
                        <path fill="#1e1e1e" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z" />
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div>
                    {listVertikal()}
                </div>
            )}
        </div>
    );
}

export default Dropdown