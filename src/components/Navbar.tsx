import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const active = location.pathname;

    return (
        <ul className="tracking-widest flex items-center gap-8 justify-center py-4">
            <li className={active == '/' ? 'text-cyan-400 hover:text-cyan-300 transition' : 'text-gray-700 hover:text-gray-400 transition'}>
                <Link to='/'>Home</Link>
            </li>
            <li className={active == '/about' ? 'text-cyan-400 hover:text-cyan-300 transition' : 'text-gray-700 hover:text-gray-400 transition'}>
                <Link to='/about'>About</Link>
            </li>
            <li className={active == '/contact' ? 'text-cyan-400 hover:text-cyan-300 transition' : 'text-gray-700 hover:text-gray-400 transition'}>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
    )
}