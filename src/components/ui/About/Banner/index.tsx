import { Heading, Text, Flex } from "@radix-ui/themes";

import styles from "./banner.module.scss";

export default function Banner() {
    return (
        <section className={styles.banner}>
            <Heading as="h1">
                Our Results
            </Heading>

            <div className={styles.banner__group}>
                <Flex direction="column" align="center" gap="6">
                    <Heading as="h4">KES 900M</Heading>
                    <Text as="p" size="5" weight="medium">Current Listing Volume</Text>
                </Flex>
                <Flex direction="column" align="center" gap="6">
                    <Heading as="h4">KES 400M</Heading>
                    <Text as="p" size="5" weight="medium">Total Sold 2020 - 2024</Text>
                </Flex>
                <Flex direction="column" align="center" gap="6">
                    <Heading as="h4">KES 2B</Heading>
                    <Text as="p" size="5" weight="medium">Lifetime Sales Volume</Text>
                </Flex>
            </div>
        </section>
    )
}
