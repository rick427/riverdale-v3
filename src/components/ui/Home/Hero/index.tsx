import HeroSlider, {Overlay, Slide, MenuNav} from "hero-slider";
import { Heading, Text } from "@radix-ui/themes";
import { useState } from "react";

//@: Styles
import styles from "./hero.module.scss";

//@: Assets
import hero_01 from "@/assets/images/hero/hero-1.jpg";
import hero_02 from "@/assets/images/hero/hero-2.jpg";
import hero_03 from "@/assets/images/hero/hero-3.jpg";
import hero_04 from "@/assets/images/hero/hero-4.jpg";

const listings = [
    {
        _id: 1,
        imageUrl: hero_01,
        location: "2nd Muthiaga - Nairobi",
        name: "1bd Studio Apartment",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore repellat quas dolor voluptatem magni inventore, in dicta. Cumque vero nobis dolorum dicta quo delectus accusantium, ullam, adipisci ipsam repellendus molestias."
    },
    {
        _id: 2,
        imageUrl: hero_02,
        location: "Kilimani Road - Nairobi",
        name: "Lavington Apartments",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore repellat quas dolor voluptatem magni inventore, in dicta. Cumque vero nobis dolorum dicta quo delectus accusantium, ullam, adipisci ipsam repellendus molestias."
    },
    {
        _id: 3,
        imageUrl: hero_03,
        location: "Mogotio, Westlands - Nairobi",
        name: "Exclusive Apartments",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore repellat quas dolor voluptatem magni inventore, in dicta. Cumque vero nobis dolorum dicta quo delectus accusantium, ullam, adipisci ipsam repellendus molestias."
    },
    {
        _id: 4,
        imageUrl: hero_04,
        location: "Kiambu Road - Nairobi",
        name: "Lavington Apartments",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore repellat quas dolor voluptatem magni inventore, in dicta. Cumque vero nobis dolorum dicta quo delectus accusantium, ullam, adipisci ipsam repellendus molestias."
    },
]

export default function Hero() {
    const [slideIndex, setSlideIndex] = useState<number>(1);

    return (
        <HeroSlider
            height={"100vh"}
            autoplay
            controller={{
                initialSlide: 0,
                slidingDuration: 500,
                slidingDelay: 100,
                onSliding: (nextSlide) => {
                    setSlideIndex(nextSlide);
                },
                onBeforeSliding: (previousSlide, nextSlide) =>
                    console.log(
                        "onBeforeSliding(previousSlide, nextSlide): ",
                        previousSlide,
                        nextSlide
                    ),
                onAfterSliding: (nextSlide) =>
                    console.log("onAfterSliding(nextSlide): ", nextSlide)
            }}  
        >
            <Overlay>
                <div className={styles.hero}>
                    <div className={styles.hero__stack}>
                        <Heading as="h1" size="9">
                            {listings[slideIndex-1]?.name}
                        </Heading>
                        <Text as="p">
                            {listings[slideIndex-1]?.description}
                        </Text>
                        
                    </div>
                </div>
            </Overlay>

            {listings.map(el => (
                <Slide
                    key={el._id}
                    shouldRenderMask
                    label={el.location}
                    background={{
                        backgroundImageSrc: el.imageUrl,
                    }}
                />
            ))}
            
            <MenuNav />
        </HeroSlider>
    )
}
