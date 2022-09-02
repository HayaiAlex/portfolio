import { FaGithub } from 'react-icons/fa'

interface Props {
    imgSide: string
    img: string
    title: string
    description: string
    liveLink: string
    gitLink: string
}

function Image({ img }: { img: string }) {
    return (
        <div className='md:basis-2/5'>
            <img src={img} alt="A grid of country flags. Under each flag is a box with country name, population, region, and capital city information." />
        </div>
    )
}

export default function ProjectCard({ imgSide, img, title, description, liveLink, gitLink }: Props) {
    return (
        <div className={(imgSide == 'right' ? 'md:flex-row-reverse' : '') + ' md:flex md:flex-row md:gap-10 md:justify-center'}>


            <Image img={img} />


            {/* Content */}
            <div className={(imgSide == 'right' ? 'md:items-end' : '') + ' md:basis-5/12 flex flex-col gap-4'} >

                {/* Title */}
                <h3 className='mt-4 md:mt-0 font-semibold tracking-wide'>{title}</h3>
                {/* Description */}
                <p className={imgSide == 'right' ? 'md:text-right' : ''}>
                    {description}
                </p>

                {/* Links */}
                <div className='flex gap-4 items-center'>

                    {/* Live Site */}
                    <a href={liveLink} target='#'>
                        <button className='bg-cyan-100 font-medium py-2 px-4 rounded shadow hover:bg-white hover:text-cyan-400 transition'>
                            View the live site here
                        </button>
                    </a>

                    {/* Github */}
                    <a href={gitLink} target='#'>
                        <div className='shadow border-black bg-cyan-50 p-2 rounded-full bg-transparent border-2 group hover:bg-white hover:border-cyan-200 hover:cursor-pointer transition'>
                            <FaGithub className='text-xl group-hover:text-cyan-200 transition' />
                        </div>
                    </a>
                </div>
            </div>


        </div >
    )
}