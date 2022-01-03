import React from 'react'
import '../../CSS/Map.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import '../../CSS/swiper.css'
import SwiperCore, {
    EffectFlip, Navigation, Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectFlip, Navigation, Pagination]);


function Map({ place, description }) {
    return (
        <div className='map'>
            <div class="map_container">
                <Swiper navigation={true} effect={'flip'} className="mySwiper" >
                    <SwiperSlide><img src={`img/maps/Loading_Screen_${place}_2.jpeg`} alt="bg-map" /></SwiperSlide>
                    <SwiperSlide><img src={`img/maps/Loading_Screen_${place}_4.jpeg`} alt="bg-map" /></SwiperSlide>
                    <SwiperSlide><img src={`img/maps/Loading_Screen_${place}_3.jpeg`} alt="bg-map" /></SwiperSlide>
                    <SwiperSlide><img src={`img/maps/Loading_Screen_${place}_5.jpeg`} alt="bg-map" /></SwiperSlide>
                </Swiper>
                <div class="map_bg">
                    <div class="description">
                        <h1>{place}</h1>
                        <p>{description}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Map
