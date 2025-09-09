import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from "swiper/modules";

export default function Slider() {
    // const MyInitialSlider =()=>{
        const initialActiveSlide = 1;
    // }
    
    return (
        <Swiper navigation={true} modules={[Navigation]} initialSlide ={initialActiveSlide} className="h-screen w-full rouded">
            <SwiperSlide><img src="./img/slide1.jpg" className="h-full w-full" /></SwiperSlide>
            <SwiperSlide><img src="./img/slide2.jpg" className="h-full w-full" /></SwiperSlide>
            <SwiperSlide><img src="./img/slide3.jpg" className="h-full w-full" /></SwiperSlide>
            <SwiperSlide><img src="./img/slide5.jpg" className="h-full w-full" /></SwiperSlide>
            <SwiperSlide><img src="./img/slide6.jpg" className="h-full w-full" /></SwiperSlide>
            <SwiperSlide><img src="./img/slide7.jpg" className="h-full w-full" /></SwiperSlide>
            <SwiperSlide><img src="./img/slide8.jpg" className="h-full w-full" /></SwiperSlide>
        </Swiper>
    )
}