import React from 'react'
import { Link } from 'react-router-dom'
import SelectLang from './SelectLang'
import ProfileButtons from './ProfileButtons'
import NavLogoSvg from '../assets/img/logo_nav.svg'

function Navbar() {
    return (
        <div className='bg-[#070811] py-4'>
            <div className='flex items-center justify-between max-w-[1520px] mx-auto'>
                <img src={NavLogoSvg} alt='logo' />

                <div className='flex items-center gap-8'>
                    <Link
                        to={"/"}
                        className="font-bold text-[18px] text-white h-fit hover:text-[#FFA801]"
                    >
                        PLAYTEST
                    </Link>
                    <Link
                        to={"/"}
                        className="font-bold text-[18px] text-white hover:text-[#FFA801] h-fit"
                    >
                        ROADMAP
                    </Link>
                    <Link
                        to={"/"}
                        className="font-bold text-[18px] text-white hover:text-[#FFA801] h-fit"
                    >
                        CAREERS
                    </Link>
                    <Link
                        to={"/"}
                        className="font-bold text-[18px] text-white hover:text-[#FFA801] h-fit"
                    >
                        CONTACTS
                    </Link>
                    <SelectLang />
                    <ProfileButtons />
                </div>
            </div>
        </div>
    )
}

export default Navbar