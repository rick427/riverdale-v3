import Slider from "react-slick";

import styles from "./hero.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import l_01 from "@/assets/listings/l-prev-01.jpeg";
import l_02 from "@/assets/listings/l-prev-02.jpeg";
import l_03 from "@/assets/listings/l-prev-03.jpeg";
import l_04 from "@/assets/listings/l-prev-04.jpeg";
import l_05 from "@/assets/listings/l-prev-05.jpeg";
import type { ListingProps } from "@/constants/listings";

interface HeroProps {
    listing?: ListingProps;
}

export default function Hero({listing}:HeroProps) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
    };

    return (
        <section className={styles.hero}>
            <Slider {...settings}>
                <img src={listing?.image} alt="listing" />
                <img src={l_01} alt="" />
                <img src={l_02} alt="" />
                <img src={l_03} alt="" />
                <img src={l_04} alt="" />
                <img src={l_05} alt="" />
            </Slider>
        </section>
    )
}
