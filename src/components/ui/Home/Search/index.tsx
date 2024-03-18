import styles from "./search.module.scss";
import { Heading, Text, Grid, Flex, Box, TextFieldInput } from "@radix-ui/themes";

export default function Search() {
    return (
        <section className={styles.search}>
            <div className={styles.search__header}>
                <Flex direction="column" align="center" gap="3">
                    <Heading as="h1" size="8" align="center">
                        Find Your Dream Home Today
                    </Heading>
                    <Text as="p" align="center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus 
                        praesentium libero, veniam sint totam incidunt?
                    </Text>
                </Flex>
            </div>

            <Box className={styles.search__box}>
                <Grid columns={{initial: "3"}} gap="5">
                    <TextFieldInput 
                        placeholder="Enter an address, state, city or area" 
                        className={styles.search__box__input}
                    />
                    <TextFieldInput 
                        placeholder="Categories" 
                        className={styles.search__box__input}
                    />
                    <TextFieldInput 
                        placeholder="Property Status" 
                        className={styles.search__box__input}
                    />
                </Grid>

                <Grid columns={{initial: "4"}} gap="5">
                    <TextFieldInput 
                        placeholder="Beds | Baths" 
                        className={styles.search__box__input}
                    />
                    <TextFieldInput 
                        placeholder="MLS #" 
                        className={styles.search__box__input}
                    />
                    <TextFieldInput 
                        placeholder="Price" 
                        className={styles.search__box__input}
                    />
                    <button className={styles.search__box__btn}>
                        Search Properties
                    </button>
                </Grid>
            </Box>
        </section>
    )
}
