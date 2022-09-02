import { FaRegCopyright } from 'react-icons/fa'
import SocialLinks from './SocialLinks'

export default function Footer({ }) {
    return (
        <div className='bg-cyan-200 px-6 py-4 grid grid-cols-4 items-center gap-2 font-medium'>
            <div className='col-span-3 sm:col-start-2 sm:col-span-2 sm:justify-self-center'>
                <a className='mr-1 underline hover:text-gray-500' href='https:/github.com/hayaialex' target='#'><span>Open Source</span></a>
                <span>by Alexander Adams</span>
            </div>

            {/* Links */}
            <div className='ml-auto flex gap-2 col-start-4'>
                <SocialLinks size={'small'} />
            </div>
        </div>
    )
}