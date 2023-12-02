"use client"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Form from "@/Components/Blocks/Form/Form";
import Image from "next/image";
import MyProject from "@/Components/Blocks/MyProject/MyProject";
import Charts from "@/Components/Blocks/Charts/Charts";
export default function Services (){
    return(
        <section className="services">
            <div className="services__wrapper wrapper">
                <h3 className="title">Услуги</h3>
                <Swiper 
                    className="mySwiper"
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={false}
                    keyboard={true}
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    spaceBetween={20}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                >
                    <SwiperSlide>
                        <Image
                            src="/img/services/card1.PNG"
                            alt=""
                            width={300}
                            height={500}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/img/services/card2.PNG"
                            alt=""
                            width={300}
                            height={500}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/img/services/card3.PNG"
                            alt=""
                            width={300}
                            height={500}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            <Charts />
            <MyProject/>
            <Form/>
        </section>
    )
}