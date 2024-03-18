import { Heading, Text, Flex, Grid } from "@radix-ui/themes";

import styles from "./places.module.scss";

//@: Assets
import p_01 from "@/assets/places/p-01.webp";
import p_02 from "@/assets/places/p-02.webp";
import p_03 from "@/assets/places/p-03.webp";
import p_04 from "@/assets/places/p-04.webp";

export default function Places() {
    return (
        <section className={styles.places}>
            <div className={styles.places__header}>
                <Flex direction="column" align="center" gap="3">
                    <Heading as="h1" size="8" align="center">
                        Featured Neighbourhoods
                    </Heading>
                    <Text as="p" align="center">
                        Explore our handpicked neighborhoods for your 
                        dream home. From urban excitement to suburban tranquility, 
                        find the perfect fit. Let us guide you to your ideal locale.
                    </Text>
                </Flex>
            </div>

            <Grid columns={{initial: "4"}} gap="5">
                <div className={styles.places__card}>
                    <img src={p_01} alt="places" />
                    <Heading>Muthiaga</Heading>
                </div>
                <div className={styles.places__card}>
                    <img src={p_02} alt="places" />
                    <Heading>Kilimani</Heading>
                </div>
                <div className={styles.places__card}>
                    <img src={p_03} alt="places" />
                    <Heading>Diani</Heading>
                </div>
                <div className={styles.places__card}>
                    <img src={p_04} alt="places" />
                    <Heading>Westlands</Heading>
                </div>
            </Grid>
        </section>
    )
}
