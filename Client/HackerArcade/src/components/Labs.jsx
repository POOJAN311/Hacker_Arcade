import React from 'react'
import styles from "../style";

const Labs = () => {
    return (
        <>

            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto font-sans max-w-screen-md text-center lg:py-16 lg:px-12">
                    <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                        <span className="text-xs bg-lime-500 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">New Blog is out! See what's new</span>
                        <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                    <h1 className="mb-4 mt-10 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Start from the absolute fundamentals, move to pure hands-on or competitive training, land your first infosec job position. Ready?</p>
                    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-lime-500 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-900">
                            Learn more
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                            Watch video
                        </a>
                    </div>
                    <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                        <h1 className="mb-4 mt-10 text-2xl font-normal tracking-tight leading-none text-gray-900 dark:text-white">Level Up Your Hacking Skills</h1>
                        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Learn cybersecurity hands-on. Put your skills to the test!
                        </p>
                    </div>
                </div>
                <hr />
                <div className="px-4 py-8 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                    <h1 className="mb-4 mt-10 text-3xl font-bold tracking-tight leading-none text-gray-900 dark:text-white">What Are Hacking Labs</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                        A massive pool of virtual penetration testing labs, simulating up-to-date security
                        vulnerabilities and misconfigurations. New labs are added every week, ensuring the
                        content is always up-to-date and the fun unlimited. Players can learn all the latest attack
                        paths and exploit techniques.
                    </p>

                </div>
                <div className="mt-10 grid grid-cols-3 w-[90%] gap-4 mx-auto">
                    <div className="col-span-1 w-full h-96 border-solid border-2 border-sky-500">
                        <a href="#" className="block max-w-md h-80 p-6 m-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </a>

                    </div>
                    <div className="col-span-2 w-full border-solid border-2 border-sky-500 ">
                        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vero quisquam aut sequi alias nesciunt, quas, ipsam, amet inventore sapiente quaerat cumque? Quidem eveniet neque laborum? Similique doloribus sequi perferendis?
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores exercitationem impedit, harum fugit, magnam illum ea sed nemo, consequuntur suscipit saepe. Debitis libero facere quas laborum vitae, eum beatae porro!
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-span-2 border-solid border-2 border-sky-500 ">
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae aliquam adipisci iusto nostrum ullam reiciendis odit laboriosam. Fugit deleniti optio quos ex dignissimos! Perferendis necessitatibus doloribus praesentium quisquam accusamus.</p>
                    </div>
                    <div className="col-span-1 border-solid border-2 border-sky-500 ">
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae aliquam adipisci iusto nostrum ullam reiciendis odit laboriosam. Fugit deleniti optio quos ex dignissimos! Perferendis necessitatibus doloribus praesentium quisquam accusamus.</p>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Labs