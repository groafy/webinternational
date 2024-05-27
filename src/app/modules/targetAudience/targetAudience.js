"use client"
import './targetAudience.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function TargetAudience(){
    const items = [
        "You want to elevate you online presence with a new website",
        "You have a website, but want to improve it.",
        "You have a design and are looking for someone to implement it.",
        "You have a website and want to improve the user experience and make it accessible."
    ]
    return (
        <section className="targetAudience__base">
            <h1 className="h1">
                Solutions for <br />
                <span className="d1 text--primary textcontentshadow" data-title="everyone">everyone</span>
            </h1>
            <Swiper
                spaceBetween={32}
                slidesPerView={3}
                autoplay
            >
                {
                    items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="targetAudience__slide">
                                <h2 className="h2">{item}</h2>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}