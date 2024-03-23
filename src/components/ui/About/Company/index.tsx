import { Flex, Heading, Text, Grid, Box } from "@radix-ui/themes";

import styles from "./company.module.scss";

export default function Company() {
    return (
        <section className={styles.company}>
            <div className={styles.company__header}>
                <Flex direction="column" align="center" gap="3">
                    <Heading as="h1" size="8" align="center">
                        About Riverdale Properties
                    </Heading>
                    <Text as="p" align="center">
                        Riverdale is recognized by everyone - clients, developers, 
                        vendors, and industry professionals - for her unique 
                        talents, creative drive, and diligence in assisting
                        buyers and sellers in one of the most scenic and fulfilling 
                        places, Parklands, Westlands. With her far-reaching network/
                    </Text>
                </Flex>
            </div>

            <Grid columns={{initial: "2"}} gap="6">
                <Box className={styles.company__card}>
                    <Heading as="h2" size="7">Our Vision</Heading>
                    <Text as="p">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Optio cupiditate explicabo aliquid provident molestiae libero, 
                        harum aspernatur atque doloribus eaque?
                    </Text>
                </Box>
                <Box className={styles.company__card}>
                    <Heading as="h2" size="7">Our Mission</Heading>
                    <Text as="p">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Optio cupiditate explicabo aliquid provident molestiae libero, 
                        harum aspernatur atque doloribus eaque?
                    </Text>
                </Box>
                <Box className={styles.company__card}>
                    <Heading as="h2" size="7">Our Values</Heading>
                    <Text as="p">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Optio cupiditate explicabo aliquid provident molestiae libero, 
                        harum aspernatur atque doloribus eaque?
                    </Text>
                </Box>
                <Box className={styles.company__card}>
                    <Heading as="h2" size="7">Our Resources</Heading>
                    <Text as="p">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Optio cupiditate explicabo aliquid provident molestiae libero, 
                        harum aspernatur atque doloribus eaque?
                    </Text>
                </Box>
            </Grid>
        </section>
    )
}
