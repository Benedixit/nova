import contact_bg from '../img/contact-bg.jpg'

const Newsletter = () => {

    return (

        <>
          <section id='newsletter'
        class="lg:py-24 xl:px-36 px-4 py-24 lg:m-24 m-4 lg:space-y-16 space-y-8 bg-center text-white bg-cover rounded-2xl"
        style={{ backgroundImage: `url(${contact_bg})` }}>
        <div class="grid space-y-4">
            <h2 class="lg:text-5xl text-3xl font-bold tracking-tighter">Subscribe To Our <span
                    class="font-[Brygada-1918] italic text-[#be14e9]">Newsletter</span></h2>
            <p class="leading-loose">Be the first to get update when it happens</p>
        </div>



        <form class="max-w-xl">
            <div class="mb-5">
                <input type="text" id="name" placeholder="Full Name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                    rounded-lg focus:ring-[#be14e9] focus:border-[#be14e9] block w-full p-4 dark:bg-gray-700 
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#be14e9] 
                    dark:focus:border-[#be14e9]"
                    required />
            </div>
            <div class="mb-5">
                <input type="email" id="email" placeholder="Email Address"
                    class="bg-gray-50 border border-gray-300 text-gray-900 
                    text-sm rounded-lg focus:ring-[#be14e9] focus:border-[#be14e9] 
                    block w-full p-4 dark:bg-gray-700 dark:border-gray-600 
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#be14e9] 
                    dark:focus:border-[#be14e9]"
                    required />
            </div>

            <button type="submit"
                class="text-white bg-[#be14e9] hover:bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-[#be14e9] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-4 text-center">Subscribe</button>
        </form>

    </section>
        </>
    )
}

export default Newsletter