import React, { useState } from 'react'
import { LuCircleX } from 'react-icons/lu';

const Modal = ({ button, children, size = 'md' }) => {
    const [isOpend, setIsOpend] = useState(false);
    const sizeClass = {
        sm:"min-h-[60vh] rounded-lg min-w-[30vw]",
        md:"min-h-[60vh] rounded-lg min-w-[50vw]",
        lg:"min-h-[60vh] rounded-lg min-w-[70vw]"
    };

    return (
        <div className='flex flex-col items-center'>
            <div className='cursor-pointer'
                onClick={() => { setIsOpend(!isOpend); }}>
                {button}
            </div>
            {isOpend && (
                <div
                    className='bg-black/50 p-3 min-h-screen  absolute top-0 right-0 min-w-full z-50 flex justify-center items-center backdrop-blur-md'
                >
                    <div className="absolute top-3 right-3 rounded-full p-3 bg-white" onClick={() => setIsOpend(false)}>
                        <LuCircleX className='text-green-500' />
                    </div>
                    <div className={`bg-white min-h-[60vh] rounded-lg min-w-[90vw] p-3 ${sizeClass[size]}`}>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal