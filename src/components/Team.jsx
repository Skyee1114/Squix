import React, { useState } from 'react'
import ImageWithHover from './ImageHover';

const Team = () => {
    const [currentImage, setCurrentImage] = useState('img/teams/02.png')

    const handleHover = (image) => {
        setCurrentImage(image);
    };

    return (
        <div className='bg-[#F5F1ED]'>
            <div className='max-w-[1520px] mx-auto py-32'>
                <div className="grid grid-cols-6 gap-4">
                    <ImageWithHover defaultImage="img/teams/02_.png" hoverImage="img/teams/02.png" finalImage="img/teams/02+.png" onHover={handleHover} />
                    <ImageWithHover defaultImage="img/teams/03_.png" hoverImage="img/teams/03.png" finalImage="img/teams/03+.png" onHover={handleHover} />
                    <div className='col-span-2 flex flex-col justify-between px-8'>
                        <div className='text-[97px] font-bold text-black leading-[70px] uppercase text-left'>Team</div>
                        <div className='text-[23px] text-left'>Facilisis bibendum blandit adipiscing mi elit netus vulputate ultrices odio libero et. Congue maecenas adipiscing venenatis laoreet hac.</div>
                    </div>
                    <div className='col-span-2 row-span-4'>
                        <img src={currentImage} className='h-[650px]' alt='user' />
                        <div className='bg-[#020911] pt-4 px-8 pb-10 flex flex-col gap-3'>
                            <div className='text-[32px] text-white text-left uppercase font-bold'>Alejandro García Sandoval</div>
                            <div className='text-[23px] text-[#FFC700] text-left'>3D Artist / Company worked in</div>
                            <div className='text-[23px] text-white text-left'>Facilisis bibendum blandit adipiscing mi elit netus vulputate ultrices odio libero et. Congue maecenas adipiscing venenatis laoreet hac.</div>
                        </div>
                    </div>
                    <ImageWithHover defaultImage="img/teams/11_.png" hoverImage="img/teams/11.png" finalImage="img/teams/11+.png" onHover={handleHover} />
                    <ImageWithHover defaultImage='img/teams/04_.png' hoverImage='img/teams/04.png' finalImage='img/teams/04+.png' onHover={handleHover} />
                    <ImageWithHover defaultImage='img/teams/01_.png' hoverImage='img/teams/01.png' finalImage='img/teams/01+.png' onHover={handleHover} />
                    <ImageWithHover defaultImage='img/teams/05_.png' hoverImage='img/teams/05.png' finalImage='img/teams/05+.png' onHover={handleHover} />
                    <ImageWithHover defaultImage='img/teams/12_.png' hoverImage='img/teams/12.png' finalImage='img/teams/12+.png' onHover={handleHover} />
                    <div className='col-span-2 text-[23px] my-auto text-left px-6'>
                        Facilisis bibendum blandit adipiscing mi elit netus vulputate ultrices odio libero et. Congue maecenas adipiscing venenatis laoreet hac.
                    </div>
                    <ImageWithHover defaultImage='img/teams/07_.png' hoverImage='img/teams/07.png' finalImage='img/teams/07+.png' onHover={handleHover} />
                    <ImageWithHover defaultImage='img/teams/09_.png' hoverImage='img/teams/09.png' finalImage='img/teams/09+.png' onHover={handleHover} />
                    <ImageWithHover defaultImage='img/teams/10_.png' hoverImage='img/teams/10.png' finalImage='img/teams/10+.png' onHover={handleHover} />
                    <ImageWithHover defaultImage='img/teams/08_.png' hoverImage='img/teams/08.png' finalImage='img/teams/08+.png' onHover={handleHover} />
                    <ImageWithHover defaultImage='img/teams/06_.png' hoverImage='img/teams/06.png' finalImage='img/teams/06+.png' onHover={handleHover} />
                </div>
                {/* <img src='img/team.png' alt='' /> */}
            </div>
        </div>
    )
}

export default Team;