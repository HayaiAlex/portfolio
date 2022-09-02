import svelteCountriesImg from '../images/svelte-countries.png';
import eCommercePageImg from '../images/e-commerce-page.png';
import ProjectCard from '../components/ProjectCard';
import SocialLinks from '../components/SocialLinks';

function Skill({ label }: { label: string }) {
    return (
        <p className='shadow border-cyan-200 border-2 rounded-full py-1 px-2 font-medium hover:bg-cyan-100 hover:border-cyan-100  transition'>{label}</p>
    )
}

export default function Home() {
    return (
        // All content
        <main>

            {/* Hero */}
            <div className="shadow bg-cyan-200 w-full py-16 flex flex-col items-center justify-center">
                <h1 className="text-5xl font-alice">Alexander Adams</h1>
                <p className="text-xl tracking-wide">Frontend Web Developer</p>

                <div className="flex gap-4 mt-2">
                    <SocialLinks />
                </div>
            </div>

            {/* Skills */}
            <div className='m-4 flex flex-col gap-2 items-center'>
                <h2 className="text-xl tracking-wider">Skills</h2>
                <div className='flex flex-wrap justify-center gap-2'>
                    <Skill label='HTML5' />
                    <Skill label='CSS3' />
                    <Skill label='Javascript' />
                    <Skill label='React' />
                    <Skill label='Next.js' />
                    <Skill label='Svelte' />
                    <Skill label='Tailwind CSS' />
                </div>
            </div>

            {/* Recent work */}
            <div className="m-4 flex flex-col gap-6 items-center">
                <h2 className="text-xl tracking-wider">Recent Work</h2>

                {/* Svelte Countries Card */}
                <ProjectCard
                    imgSide={'left'}
                    img={svelteCountriesImg}
                    title={'Svelte Countries'}
                    description={'This single page application uses Svelte, Tailwind CSS and RESTful API to display country information. I really enjoyed learning and using Svelte and now continue to use Tailwind CSS in many of my projects.'}
                    liveLink={"https://hayaialex.github.io/svelte-countries"}
                    gitLink={"https://github.com/hayaialex/svelte-countries"}
                />

                {/* Svelte Countries Card */}
                <ProjectCard
                    imgSide={'right'}
                    img={eCommercePageImg}
                    title={'React-Built E-Commerce Page'}
                    description={'This project is created from the Front-End Mentor Challenge here. \n To complete this project I used React components to compartmentalise the work creating a more legible and maintainable app.'}
                    liveLink={"https://hayaialex.github.io/e-commerce-page"}
                    gitLink={"https://github.com/HayaiAlex/e-commerce-page"}
                />
            </div>
        </main>
    )
}