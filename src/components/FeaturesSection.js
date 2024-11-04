// components/FeaturesSection.js
import React from 'react';
import SoundWave from '../images/wave.png';

function FeaturesSection() {
    return (
        <section className="py-12 px-6 bg-gray-800">
            <div className="container mx-auto px-8">
                <div className="text-center">
                    <span className="font-semibold text-gray-500 uppercase dark:text-gray-400">
                        Why Davoice?
                    </span>
                </div>
                <div className="mt-10 flex flex-wrap lg:flex-nowrap items-start lg:items-center justify-between">
                    <div className="w-full lg:w-1/2">
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <svg
                                    className="w-6 h-6 text-white-500 flex-shrink-0 mr-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 01.083 1.32l-.083.094L8.414 15l-4.707-4.707a1 1 0 011.32-1.497l.094.083L8.414 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        Avoid Privacy Concerns - All Stays On Device!
                                    </h3>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="w-6 h-6 text-white-500 flex-shrink-0 mr-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 01.083 1.32l-.083.094L8.414 15l-4.707-4.707a1 1 0 011.32-1.497l.094.083L8.414 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        Avoid Expensive Cloud AI API Calls.
                                    </h3>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="w-6 h-6 text-white-500 flex-shrink-0 mr-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 01.083 1.32l-.083.094L8.414 15l-4.707-4.707a1 1 0 011.32-1.497l.094.083L8.414 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        Perfect Accuracy And Resource Efficiency
                                    </h3>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
                        <img
                            src={SoundWave}
                            alt="sound wave mockup"
                            className="max-w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;
