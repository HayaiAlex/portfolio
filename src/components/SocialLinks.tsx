import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialLinks({ size }: { size?: string }) {
    return (
        <>
            <a href="https://github.com/HayaiAlex" target='#'>
                <div className='border-black bg-cyan-50 p-2 rounded-full bg-transparent border-2 group hover:bg-white hover:border-white hover:cursor-pointer transition'>
                    <FaGithub className={(size == 'small' ? 'text-sm' : 'text-2xl') + '  group-hover:text-cyan-200 transition'} />
                </div>
            </a>
            <a href="https://www.linkedin.com/in/alexander-adams-018a04181/" target='#'>
                <div className='border-black bg-cyan-50 p-2 rounded-full bg-transparent border-2 group hover:bg-white hover:border-white hover:cursor-pointer transition'>
                    <FaLinkedin className={(size == 'small' ? 'text-sm' : 'text-2xl') + '  group-hover:text-cyan-200 transition'} />
                </div>
            </a>
        </>
    )
}