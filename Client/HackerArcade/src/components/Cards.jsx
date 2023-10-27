import React from 'react'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { hacker } from "../assets";
import styles from "../style";
import { discount, robot } from "../assets";
const Cards = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <img
                    src={hacker}
                    alt="Product screenshot"
                    className="max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[30rem] md:-mr-4 lg:-mr-0"
                    width={2432}
                    height={1442}
                />
            </div>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[30px] text-[30px] text-white">Who we are.
                    </h1>
                </div>

                <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                    Hackers At Heart                </h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus doloribus labore autem facilis, deserunt dolor quos molestias id, officiis sit eius tenetur soluta numquam dolorum nostrum voluptatum quasi iste?
                </p><p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus doloribus labore autem facilis, deserunt dolor quos molestias id, officiis sit eius tenetur soluta numquam dolorum nostrum voluptatum quasi iste?
                </p>
            </div>
        </section>
    )
}

export default Cards