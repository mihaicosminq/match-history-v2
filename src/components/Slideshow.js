import React, {
    useState
} from "react";
import {
    Swiper,
    SwiperSlide
} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./Slideshow.css"
import {
    Autoplay,
    Pagination,
    Navigation, Thumbs, EffectFade,
} from "swiper";

function Slideshow({slide, image}) {


    const skinName = slide?.skins?.map(skin => {
        return skin.name
    })

    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    return (
        <>
            <Swiper
                spaceBetween={10}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                pagination={{
                    clickable: true,
                }}
                direction="vertical"
                modules={[Autoplay, Pagination, EffectFade]}
                effect={"fade"}
                crossfade="true"
                style={{height: 1000}}
            >
                {slide.skins.map((skin, index) => {
                    return (
                        <>
                            <SwiperSlide
                                key={makeid(15)}
                                style={{
                                    height: 800,
                                    position: "relative"
                                }}
                            >
                                <div>
                                    <span
                                        className="slideName">{skinName[index]}</span>
                                    <img
                                        style={{height: 670}}
                                        src={image[index].props.src}/>
                                </div>
                            </SwiperSlide>
                        </>
                    )
                })}
            </Swiper>
        </>)
}


export default Slideshow;