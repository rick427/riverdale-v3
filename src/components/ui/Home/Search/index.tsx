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
                        color="bronze"
                        placeholder="Property Type" 
                        className={styles.search__box__input}
                    />
                    <TextFieldInput 
                        color="bronze"
                        placeholder="Property Category" 
                        className={styles.search__box__input}
                    />
                    <TextFieldInput 
                        color="bronze"
                        placeholder="Location" 
                        className={styles.search__box__input}
                    />
                </Grid>

                <Grid columns={{initial: "4"}} gap="5">
                    <TextFieldInput 
                        color="bronze"
                        placeholder="Beds | Baths" 
                        className={styles.search__box__input}
                    />
                    <TextFieldInput 
                        color="bronze"
                        placeholder="MLS #" 
                        className={styles.search__box__input}
                    />
                    <TextFieldInput 
                        color="bronze"  
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
