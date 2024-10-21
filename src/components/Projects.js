import React, { useState } from 'react';
import portfolio from '../img/Portfolio.jpg';
import play from '../img/play.svg';

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <section id="projects" className="lg:py-24 xl:px-36 px-4 py-24 lg:space-y-28 space-y-14 bg-[#be14e9] bg-opacity-10">
                <div>
                    <span>Projects</span>
                    <h2 className="lg:text-5xl text-3xl font-bold tracking-tighter">Explore our Portfolio</h2>
                </div>
                <div className="grid lg:grid-cols-2 grid-flow-row place-items-center gap-x-24 gap-y-12">
                    <div className="relative cursor-pointer" onClick={openModal}>
                        <img
                            src={portfolio}
                            alt="Fetal Alcohol Syndrome- 3D Animation Project done by Nova Namera"
                            className="rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img src={play} alt='Please Play This Nova Namera 3D Project Video' className='h-16' />
                        </div>
                    </div>
                    <div className="grid grid-flow-row space-y-4">
                        <h4 className="lg:text-2xl text-xl font-bold text-[#be14e9]">Fetal Alcohol Syndrome</h4>
                        <p className="leading-loose">
                            This project highlights Nova Namera's commitment to using 3D animation for social good. By
                            transforming complex medical information into an engaging and understandable format, Nova Namera has
                            contributed to the important cause of preventing Fetal Alcohol Syndrome and supporting affected
                            families.
                        </p>
                    </div>
                </div>
            </section>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
                    <div className="relative bg-white rounded-lg shadow-lg w-full max-w-4xl p-6" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <div className="relative" style={{ paddingTop: '56.25%' }}>
                            <iframe
                                title="YouTube Video"
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/RHNq4iVCd6o?si=O52aH40BBI-j9hWz"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Projects;
