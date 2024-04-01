import { Heading, Text } from "@radix-ui/themes";

//@: Styles
import styles from "./hero.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Text as="p" size="4" weight="medium">
                We respond within 2 business days
            </Text>
            <Heading as="h1" size="9" weight="medium">
                How to Reach Us
            </Heading>
        </section>
    )
}
