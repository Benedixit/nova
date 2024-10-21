import mobile from '../img/mobile.svg'
import paper_plane from '../img/paper-plane.svg'
import twitter from '../img/twitter.svg'
import facebook from '../img/facebook.svg'
import instagram from '../img/instagram.svg'
import linkedin from '../img/linkedin.svg'
import contact from '../img/contact-bg.jpg'

const Contact = () => {

    return (
        <>

        
    <section id="contact" className="py-24  xl:px-36 px-4 lg:space-y-28 space-y-14 
    bg-cover bg-center bg-opacity-10">
        <div className="grid lg:grid-cols-2 grid-flow-row content-center gap-y-12 gap-x-24">
            <div className="grid grid-flow-row space-y-4
            text-white bg-center bg-cover p-12 rounded-lg gap-y-8" style={{ backgroundImage: `url(${contact})` }}>
                <h2 className="text-3xl font-bold tracking-tighter text-[#be14e9]">Contact Info</h2>
                <div className="flex space-x-6">
                    <img src={paper_plane} alt="" class="h-8" />
                    <span>novanamera@gmail.com</span>
                </div>

                <div class="flex space-x-6">
                    <img src={mobile} alt="" class="h-8" />
                    <span>+234-999449585859</span>
                </div>

                <h2 class="text-3xl font-bold tracking-tighter text-[#be14e9]">Follow Us</h2>
                <div class="flex space-x-6">
                    <img src={facebook} alt="" class="h-8" />
                    <img src={twitter}alt="" class="h-8" />
                    <img src={instagram} alt="" class="h-8" />
                    <img src={linkedin} alt="" class="h-8" />
                   
                </div>
            </div>

            <form class="max-w-xl grid content-center">
                <h2 class="text-3xl mb-10 font-bold tracking-tighter">Drop Us A <span class="italic text-[#be14e9]">Message</span></h2>
                <div class="mb-5">
                    <input type="text" id="name" placeholder="Full Name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#be14e9] focus:border-[#be14e9] block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#be14e9] dark:focus:border-[#be14e9]"
                         required />
                </div>
                <div class="mb-5">
                    <input type="email" id="email" placeholder="Email Address"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#be14e9] focus:border-[#be14e9] block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#be14e9] dark:focus:border-[#be14e9]"
                        required />
                </div>

                <div class="mb-5">
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                </div>
                <div>
                <button type="submit"
                    class="text-white bg-[#be14e9] hover:bg-opacity-50 focus:ring-4 focus:outline-none 
                    focus:ring-[#be14e9] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-4 text-center">Submit</button>
                </div>
            </form>

        </div>




    </section>
        
        </>
    )
}


export default Contact