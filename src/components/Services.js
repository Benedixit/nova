import vfx from '../img/motion-graphic.png'
import animation from '../img/3d-animation.png'

const Services = () => {

    return ( 
        <>
         <section id='services' class="lg:py-24 xl:px-36 px-4 py-24 lg:space-y-28 space-y-14">
        <div>
            <span>Our Services</span>
            <h2 class="lg:text-5xl text-3xl font-bold tracking-tighter">We Deliver <span
                    class="font-[Brygada-1918] italic text-[#be14e9]">Amazing </span> <br /> Jobs for Our Clients
            </h2>
        </div>
        <div class="grid lg:grid-cols-2 grid-flow-row lg:gap-y-24 gap-x-24 gap-y-12">
            <div class="grid lg:grid-flow-col grid-flow-row gap-x-6 gap-y-4 p-12 bg-[#be14e9] rounded-lg bg-opacity-10">
                <img src={vfx} width="100px"
                    alt="Showcasing our Visual Effects Skills at Nova Namera" />
                <div class="grid grid-flow-row gap-y-2">
                    <h4 class="lg:text-2xl text-xl font-bold text-[#be14e9]">Visual Effects</h4>
                    <p class="leading-loose">We deliver stunning visual effects for films, TV, and digital media,
                        transforming your vision
                        into reality.</p>
                </div>
            </div>

            <div class="grid lg:grid-flow-col grid-flow-row gap-x-6 gap-y-4 p-12 bg-[#be14e9] rounded-lg bg-opacity-10">
                <img src={animation} width="100px"
                    alt="We provide top-notch 3D Animation Services at Nova Namera" />
                <div class="grid grid-flow-row gap-y-2">
                    <h4 class="lg:text-2xl text-xl font-bold text-[#be14e9]">3D Animation</h4>
                    <p class="leading-loose">We deliver stunning visual effects for films, TV, and digital media,
                        transforming your vision
                        into reality.</p>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Services