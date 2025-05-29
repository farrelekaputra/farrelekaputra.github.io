import {useState} from 'react';

function Dropdown(){
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    return(
        <div className="relative inline-block">
            <div>
                <button type="button" onClick={toggleDropdown} className='pe-16'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-8'>
                        <path fill="#1e1e1e" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z" />
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div>
                    <div className='flex flex-col fixed bg-white shadow-md p-3 gap-4'>
                        <a href="#">Top Rate</a>
                        <a href="#">Latest Update</a>
                        <a href="#">About us</a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dropdown