import { Heading, Text } from "@radix-ui/themes";

import styles from "./hero.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Heading as="h1" size="9" weight="medium">
                Riverdale Reflections
            </Heading>
            <Text as="p" size="4" weight="medium">
                Where Every Wave Tells a Story
            </Text>
        </section>
    )
}
