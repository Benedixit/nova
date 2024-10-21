 import hero from '../img/hero_bg.jpg'
import img_hero from '../img/power_new_image.png'


const Hero = () => {
    return (
        <>
         <section className="lg:py-24 xl:px-36 px-4 py-32 bg-cover bg-center text-white" style={{ backgroundImage: `url(${hero})` }}>
        <div className="grid md:grid-cols-2 place-items-center grid-flow-row py-16">
            <div className="grid space-y-7">
                <h1 className="xl:text-6xl text-4xl font-black tracking-tighter">We Provide Amazing <br /><span
                        class="font-[Brygada-1918] italic text-[#ffe500]">3D & VFX
                    </span> Solutions For Brands</h1>
                <p className="leading-loose">At Nova Namera, we specialize in bringing your visions to life with
                    state-of-the-art 3D and Visual
                    Effects (VFX) technology.</p>
                <div className="pt-5">
                    <a href=""
                        className="text-[#be14e9] bg-white hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-[#be14e9]-300 font-medium rounded-lg text-sm px-4 py-4 text-center">View
                        Our Projects</a>
                </div>
            </div>
            <div className="hidden lg:block">
                <img src={img_hero} alt="Nova Namera Power Image Showcasing Our VFX and 3D Prowess" />
            </div>
        </div>
    </section>
        </>
    )
}

export default Hero