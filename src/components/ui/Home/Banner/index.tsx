import { Heading, Text } from "@radix-ui/themes";

import styles from "./cta.module.scss";

export default function CallToAction() {
    return (
        <section className={styles.cta}>
            <div className={styles.cta__col}>
                <Text as="p">
                    For Sellers
                </Text>
                <Heading as="h1" size="8" weight="medium">
                    Are you selling your home?
                </Heading>

                <button className={styles.cta__col__btn}>
                    get estimation
                </button>
            </div>

            <div className={styles.cta__col}>
                <Text as="p">
                    For Buyers
                </Text>
                <Heading as="h1" size="8" weight="medium">
                    Are you looking to buy a home?
                </Heading>

                <button className={styles.cta__col__btn}>
                    search listings
                </button>
            </div>
        </section>
    )
}
