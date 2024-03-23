import { Heading, Box, Grid, TextFieldInput } from "@radix-ui/themes";

import styles from "./hero.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Box className={styles.hero__heading}>
                <Heading as="h1" size="9" weight="medium" align="center">
                    Top Real Estate Listings in Nairobi
                </Heading>
            </Box>

            <Box className={styles.hero__search}>
                <Grid columns={{initial: "3"}} gap="3">
                    <TextFieldInput 
                        color="bronze"
                        placeholder="Enter an address, state, city or area" 
                        className={styles.hero__search__input}
                    />
                    <TextFieldInput 
                        color="bronze"
                        placeholder="Categories" 
                        className={styles.hero__search__input}
                    />
                    <TextFieldInput 
                        color="bronze"
                        placeholder="Property Status" 
                        className={styles.hero__search__input}
                    />
                </Grid>

                <Grid columns={{initial: "4"}} gap="3">
                    <TextFieldInput 
                        color="bronze"
                        placeholder="Beds | Baths" 
                        className={styles.hero__search__input}
                    />
                    <TextFieldInput 
                        color="bronze"
                        placeholder="MLS #" 
                        className={styles.hero__search__input}
                    />
                    <TextFieldInput 
                        color="bronze"
                        placeholder="Price" 
                        className={styles.hero__search__input}
                    />
                    <button className={styles.hero__search__btn}>
                        Search Properties
                    </button>
                </Grid>
            </Box>
        </section>
    )
}
