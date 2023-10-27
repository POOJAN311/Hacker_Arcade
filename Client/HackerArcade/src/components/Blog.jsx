import React from 'react'
import { posts } from '../constants'
const Blog = () => {
    return (
        <div className="mt-10 mx-auto lg:text-center">
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
            <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[46px] text-white ss:leading-[100.8px] leading-[75px]">
                Latest from our blog
            </h1>
            <p className="mt-2 font-poppins font-semibold text-lg leading-8 text-gray-600">
                Be aware with the latest Trends & News in cybersecuirty world.
            </p>
            <div className="mt-10 flex justify-center flex-wrap gap-10">

            </div>
        </div>
    )
}

export default Blog