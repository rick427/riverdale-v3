import { Heading, Text } from "@radix-ui/themes";

//@: Styles
import styles from "./hero.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Text as="p" size="4" weight="medium">
                Interested?
            </Text>
            <Heading as="h1" size="9" weight="medium">
                Get in Touch
            </Heading>
        </section>
    )
}
