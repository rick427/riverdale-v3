import { Heading, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";

import styles from "./cta.module.scss";

export default function CallToAction() {
    return (
        <section className={styles.cta}>
            <div className={styles.cta__col}>
                <Text as="p">
                    For Sellers
                </Text>
                <Heading as="h1" size="8" weight="medium">
                    Are your looking to sell?
                </Heading>

                <Link to="/contact" className={styles.cta__col__btn}>
                    Contact us
                </Link>
            </div>

            <div className={styles.cta__col}>
                <Text as="p">
                    For Buyers
                </Text>
                <Heading as="h1" size="8" weight="medium">
                    Ready to buy or rent ?
                </Heading>

                <Link to="/property" className={styles.cta__col__btn}>
                    search listings
                </Link>
            </div>
        </section>
    )
}
