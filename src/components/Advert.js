import video from '../video/video.mp4'

const Advert = () => {

    return (
        <>
        <section class="lg:py-24 xl:px-36 px-4 py-24 lg:space-y-28 space-y-14 bg-[#be14e9] bg-opacity-10">
        <div class="grid lg:grid-cols-2 grid-flow-row gap-y-12 gap-x-24">
            <div class="grid grid-flow-row space-y-4">
                <h2 class="lg:text-5xl text-3xl font-bold tracking-tighter">Bring Your Vision <br />To <span
                        class="font-[Brygada-1918] italic text-[#be14e9]">Reality</span></h2>
                <p class="leading-loose">Our team of creative experts is dedicated to delivering top-notch digital
                    experiences that exceed your expectations. Whether you need character rigging, motion design, or full-scale visual effects,
                    we've got you covered. Contact us today to discuss your project and see how we can help you achieve your
                    creative goals. Let's make something amazing together!</p>
            </div>

            <video muted autoPlay loop>
                <source src={video} type="video/mp4" />
            </video>

        </div>




    </section>
        </>
    )

}

export default Advert