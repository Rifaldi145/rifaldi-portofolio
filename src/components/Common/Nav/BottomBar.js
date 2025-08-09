import Link from "next/link";
import { ImHome } from 'react-icons/im';
import { HiIdentification } from 'react-icons/hi';
import { FiAward } from 'react-icons/fi';
import { FaHandshake } from 'react-icons/fa';

export default function BottomBar({ currentPath, linkClass }) {
    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-black/40 backdrop-blur-md px-6 py-2 rounded-2xl shadow-lg flex gap-x-6">
            <Link href="/" className={linkClass("/")}>
                <ImHome size={20} />
                <span className="text-xs mt-1">Home</span>
            </Link>

            <Link href="/background" className={linkClass("/background")}>
                <HiIdentification size={20} />
                <span className="text-xs mt-1">Background</span>
            </Link>

            <Link href="/portfolio" className={linkClass("/portfolio")}>
                <FiAward size={20} />
                <span className="text-xs mt-1">Portfolio</span>
            </Link>


        </div>
    );
}
