import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../styles/Projects.css';
import { EffectCards } from 'swiper/modules';

const Projects = () => {
    return (
        <section id="projects">
            <h1>PROJECTS</h1>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="swiper-projects">
                
                <SwiperSlide>
                    <h2>Sporting Events Management System</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <h2>Game Key Store</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <h2>Open-source School Management System</h2>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Projects;