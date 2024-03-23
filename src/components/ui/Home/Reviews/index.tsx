import { Heading, Text, Flex } from "@radix-ui/themes"

import styles from "./review.module.scss";

import reviews_01 from "@/assets/reviews-01.webp";

export default function Reviews() {
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

            <div className={styles.reviews__card}>
                <div className={styles.reviews__card__content}>
                    <Heading as="h1" size="7">
                        Excellent service 🏆 
                    </Heading>

                    <Text as="p" size="2" color="gray">
                        “The Riverdale properties team delivered on that expectation and I 
                        would highly recommend them to anyone who is in the 
                        market to buy a home.
                    </Text>
                    <Text as="p" size="2" color="gray">
                        They did an outstanding job helping me buy my 
                        first home. The high level of service and dedication.“
                    </Text>
                    <Flex direction="column" gap="1">
                        <Text as="span" size="3" weight="bold">
                            Lord Voldermort
                        </Text>
                        <Text size="2" weight="medium" color="gray">
                            Hogwarts 
                        </Text>
                    </Flex>
                </div>
                <img className={styles.reviews__card__img} src={reviews_01} alt="rw" />
            </div>
        </section>
    )
}
