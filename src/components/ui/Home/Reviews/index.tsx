import { Heading, Text, Flex } from "@radix-ui/themes";
import Slider from "react-slick";

import styles from "./review.module.scss";

//import reviews_01 from "@/assets/reviews-01.webp";

export default function Reviews() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <section className={styles.reviews}>
            <div className={styles.reviews__header}>
                <Flex direction="column" align="center" gap="3">
                    <Heading as="h1" size="8" align="center">
                        Client Testimonials
                    </Heading>
                    <Text as="p" align="center">
                        Check out what our lovely clients are saying about us.
                    </Text>
                </Flex>
            </div>

            <Slider {...settings}>
                <div className={styles.reviews__card}>
                    <div className={styles.reviews__card__content}>
                        {/* <Heading as="h1" size="7">
                            Excellent service 🏆 
                        </Heading> */}

                        <Text as="p" size="2" color="gray">
                            We had a very good experience, when looking for a property 
                            in the CBD for Mogo Kenya Ltd. Professional attitude and help 
                            on negotiating better terms. Thank you!					
                        </Text>
                        {/* <Text as="p" size="2" color="gray">
                            They did an outstanding job helping me buy my 
                            first home. The high level of service and dedication.“
                        </Text> */}
                        <Flex direction="column" gap="1">
                            <Text as="span" size="3" weight="bold">
                                Mārtiņš S.
                            </Text>
                            {/* <Text size="2" weight="medium" color="gray">
                                Hogwarts 
                            </Text> */}
                        </Flex>
                    </div>
                    {/* <img className={styles.reviews__card__img} src={reviews_01} alt="rw" /> */}
                </div>

                <div className={styles.reviews__card}>
                    <div className={styles.reviews__card__content}>
                        {/* <Heading as="h1" size="7">
                            Excellent service 
                        </Heading> */}

                        <Text as="p" size="2" color="gray">
                            The customer service from Riverdale was exemplary. They were able to 
                            find us a suitable commercial property and guided us through the 
                            entire process. Highly recommended if you're looking for a 
                            property in Nairobi. 					
                        </Text>
                        {/* <Text as="p" size="2" color="gray">
                            They did an outstanding job helping me buy my 
                            first home. The high level of service and dedication.“
                        </Text> */}
                        <Flex direction="column" gap="1">
                            <Text as="span" size="3" weight="bold">
                                Dennis K
                            </Text>
                            {/* <Text size="2" weight="medium" color="gray">
                                Hogwarts 
                            </Text> */}
                        </Flex>
                    </div>
                    {/* <img className={styles.reviews__card__img} src={reviews_01} alt="rw" /> */}
                </div>

                <div className={styles.reviews__card}>
                    <div className={styles.reviews__card__content}>
                        {/* <Heading as="h1" size="7">
                            Excellent service 
                        </Heading> */}

                        <Text as="p" size="2" color="gray">
                            Definitely can recommend Riverdale's services. They have been 
                            very helpful in finding the right house for our family.					
                        </Text>
                        {/* <Text as="p" size="2" color="gray">
                            They did an outstanding job helping me buy my 
                            first home. The high level of service and dedication.“
                        </Text> */}
                        <Flex direction="column" gap="1">
                            <Text as="span" size="3" weight="bold">
                                Leonard S
                            </Text>
                            {/* <Text size="2" weight="medium" color="gray">
                                Hogwarts 
                            </Text> */}
                        </Flex>
                    </div>
                    {/* <img className={styles.reviews__card__img} src={reviews_01} alt="rw" /> */}
                </div>
            </Slider>
        </section>
    )
}
