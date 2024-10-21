import logo from '../img/Nova Namera logo.png'

const Footer = () => {

    return (
        <>

<footer className="grid grid-flow-row  xl:px-36 px-4 xl:py-32 py-16 bg-zinc-900 text-white">
        <div className="grid lg:grid-cols-3 gap-x-32 grid-flow-row gap-y-8">
            <div className="grid grid-flow-row space-y-3">
                <img src={logo}
                    alt="Here is a logo of Nova Namera, leading provider of 3D Animation and Visual Effects Services"
                    className="h-16" />
                <p className="leading-loose">At Nova Namera, we specialize in bringing your visions to life with
                    state-of-the-art 3D and Visual Effects (VFX) technology.</p>
            </div>
            <div className="grid grid-flow-row space-y-3">
                <h4 className="text-2xl font-bold text-[#be14e9]">Useful Links</h4>
                <ul className="grid grid-flow-row space-y-2">
                    <li className="hover:text-[#be14e9]"><a href="">About</a></li>
                    <li className="hover:text-[#be14e9]"><a href="">Projects</a></li>
                    <li className="hover:text-[#be14e9]"><a href="">Newsletter</a></li>
                    <li className="hover:text-[#be14e9]"><a href="">Blog</a></li>
                </ul>
            </div>

            <div className="grid grid-flow-row space-y-3">
                <h4 className="text-2xl font-bold text-[#be14e9]">Socials</h4>
                <ul className="grid grid-flow-row space-y-2">
                    <li className="hover:text-[#be14e9]"><a href="">Facebook</a></li>
                    <li className="hover:text-[#be14e9]"><a href="">Instagram</a></li>
                    <li className="hover:text-[#be14e9]"><a href="">LinkedIn</a></li>
                    <li className="hover:text-[#be14e9]"><a href="">X (formerly Twitter)</a></li>
                </ul>
            </div>




        </div>
       
    </footer>
        
        </>
    )
}

export default Footer