import { useRouter } from "next/router";
import Intro from '../components/Common/Intro';
import BottomBar from "@/components/Common/Nav/BottomBar";
import { FaBars, FaMousePointer } from 'react-icons/fa';
import { SlOptionsVertical } from 'react-icons/sl';
import { useState } from 'react';

export default function Layout({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [intro, setIntro] = useState(false);

    const router = useRouter();
    const currentPath = router.pathname;

    const linkClass = (path) =>
        `flex flex-col items-center justify-center px-4 py-2 rounded-lg transition-all duration-200 ${currentPath === path
            ? "bg-blue-500 text-white shadow-lg"
            : "text-gray-400 hover:text-white hover:bg-blue-500/20"
        }`;

    return (
        <div className={`h-screen lg:p-[0.8rem] flex flex-col  font-circular`}>

            <div className='lg:hidden'>
                <div className=' bg-DeepNightBlack text-LightGray w-full h-10 flex items-center justify-between px-2 lg:hidden relative'>
                    <div className='flex items-center gap-x-2' onClick={() => setIntro(!intro)}>
                        <span className='border-2 text-Blue border-Blue p-1 text-sm rounded-lg'>
                            <FaBars />
                        </span>

                    </div>
                </div>
            </div>

            <div className='flex relative h-full justify-between gap-x-3'>
                {/* Left menu */}
                <div
                    className={`w-64 h-screen left-0 lg:rounded-xl -top-10 lg:top-0 lg:left-0 lg:h-full overflow-hidden bg-DeepNightBlack shadow-2xl z-50 lg:flex flex-col lg:relative ${intro ? 'flex absolute' : 'hidden'
                        }`}>
                    <Intro isOpen={intro} setIsOpen={setIntro} />
                </div>

                {/* Overlay */}
                {intro && <div onClick={() => setIntro(false)} className='fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-[2px] z-40'></div>}

                {/* Content */}
                <div className='w-full h-auto lg:w-10/12 shadow-2xl bg-DeepNightBlack relative overflow-auto overflow-x-hidden no-scrollbar'>

                    {children}
                    <BottomBar currentPath={currentPath} linkClass={linkClass} />
                </div>


            </div>
        </div>
    );
}
