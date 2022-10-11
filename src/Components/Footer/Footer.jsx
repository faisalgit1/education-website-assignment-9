import React from 'react';

const Footer = () => {
    return (
        <footer class="px-4 py-8 bg-black dark:bg-gray-800 dark:text-gray-400">
            <div class="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                <div class="flex flex-row pr-3 space-x-4 sm:space-x-8">
                    <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400">
                        <svg class="w-8 text-white text-teal-accent-400"
                            viewBox="0 0 24 24"
                            stroke-linejoin="round"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-miterlimit="10"
                            stroke="currentColor"
                            fill="none">
                            <rect x="3" y="1" width="7"
                                height="12"></rect>
                            <rect x="3" y="17" width="7"
                                height="6"></rect>
                            <rect x="14" y="1" width="7"
                                height="6"></rect>
                            <rect x="14" y="11" width="7"
                                height="12"></rect>
                        </svg>
                    </div>
                    <ul class="flex flex-wrap items-center space-x-4 sm:space-x-8">
                        <li>
                            <a className='text-white' rel="noopener noreferrer" href="#">Terms of Use</a>
                        </li>
                        <li>
                            <a className='text-white' rel="noopener noreferrer" href="#">Privacy</a>
                        </li>
                    </ul>
                </div>
                <ul class="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                    <li>
                        <a className='text-white' rel="noopener noreferrer" href="#">Instagram</a>
                    </li>
                    <li>
                        <a className='text-white' rel="noopener noreferrer" href="#">Facebook</a>
                    </li>
                    <li>
                        <a className='text-white' rel="noopener noreferrer" href="#">Twitter</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;