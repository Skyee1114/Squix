import React, { useState } from 'react'

function Lore() {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <div className="flex justify-between max-w-[1520px] mx-auto gap-12">
            <div className="h-[750px] min-w-[400px] overflow-y-auto mt-4 pe-4" id="model_flow">
                <div className="sticky top-0 h-20 bg-gradient-to-b from-[#3b362b] to-transparent w-full mt-[-92px]">
                </div>
                {["Elven City", "Orcs", "Dwarves", "The Great Portal"].map((item, index) => (
                    <div className='relative' onClick={() => handleClick(index)}>
                        <img src={`img/${item}.png`} alt={item} className={`w-[365px] my-4 ${activeIndex === index ? 'opacity-100' : 'opacity-50'}`} />
                        <div className='absolute bottom-2 left-4 text-white text-[30px] font-medium'>{item}</div>
                    </div>
                ))}
                <div className="sticky top-0 h-20 bg-gradient-to-t from-[#3b362b] to-transparent w-full mt-[-92px]">
                </div>
            </div>
            <div className='w-full text-left pe-16'>
                <p className='text-white font-bold text-[47px] mb-8'>Elven city and the Elves {activeIndex}</p>
                <p className='text-white text-[23px] mb-4'>Facilisis bibendum blandit adipiscing mi elit netus vulputate ultrices odio libero et. Congue maecenas adipiscing venenatis laoreet hac. Facilisis bibendum blandit adipiscing mi elit netus vulputate ultrices odio libero et. Congue maecenas adipiscing venenatis laoreet hac.</p>
                <p className='text-white text-[23px] mb-4'>Facilisis bibendum blandit adipiscing mi elit netus vulputate ultrices odio libero et. Congue maecenas adipiscing venenatis laoreet hac. Facilisis bibendum blandit adipiscing mi elit netus vulputate ultrices odio libero et. Congue maecenas adipiscing venenatis laoreet hac.</p>
                <p className='text-white text-[23px] mb-4'>Facilisis bibendum blandit adipiscing mi elit netus vulputate ultrices odio libero et. Congue maecenas adipiscing venenatis laoreet hac. Facilisis bibendum blandit adipiscing mi elit netus vulputate ultrices odio libero et. Congue maecenas adipiscing venenatis laoreet hac.</p>
            </div>
        </div>
    )
}

export default Lore