import React from 'react';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
    return (
        <div class="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                <svg class="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block" viewBox="0 0 100 100" fill="currentColor" preserveAspectRatio="none slice">
                    <path d="M50 0H100L50 100H0L50 0Z"></path>
                </svg>
                <img
                    class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                    src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
                    alt=""
                />
            </div>
            <div class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <h2 class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
                        Welcome To  Knowledge<br class="hidden md:block" />
                        <span class="inline-block text-deep-purple-accent-400"> Education</span>
                    </h2>
                    <p class="pr-5 text-black mb-5 text-base text-gray-700 font-bold md:text-lg">
                        We are show some web developer quiz. <br />
                        Are You Ready?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;