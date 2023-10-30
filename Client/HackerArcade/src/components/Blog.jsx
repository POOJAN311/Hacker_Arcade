import React, { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { dataDigitalBestSeller } from '../constants/index';
import blog1 from '../assets/blog1.jpg';

import "../App.css"
import { RxArrowTopRight } from "react-icons/rx";
const Blog = () => {

    const [defaultImage, setDefaultImage] = useState({});
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const handleErrorImage = (data) => {
        setDefaultImage((prev) => ({
            ...prev,
            [data.target.alt]: data.target.alt,
            linkDefault: blog1,
        }));
    };

    return (
        <>
            <div className="mt-10 mx-auto lg:text-center">
                {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
                <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[46px] text-white ss:leading-[100.8px] leading-[75px]">
                    Latest from our blog
                </h1>
                <p className="mt-2 font-poppins font-semibold text-lg leading-8 text-dimWhite">
                    Be aware with the latest Trends & News in cybersecuirty world.
                </p>
            </div>
            <div className="mt-10 mx-auto">
                <Slider {...settings}>
                    {dataDigitalBestSeller.map((item) => (
                        <div className="card">
                            <div className="card-top">
                                <img
                                    src={
                                        defaultImage[item.title] === item.title
                                            ? defaultImage.linkDefault
                                            : item.linkImg
                                    }
                                    alt={item.title}
                                    onError={handleErrorImage}
                                />
                                <h1>{item.title}</h1>
                            </div>
                            <div className="card-bottom">
                                <h3>{item.price}</h3>
                                <span className="category">{item.category}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>

    )
}

export default Blog