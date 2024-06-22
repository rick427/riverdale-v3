import styles from "./search.module.scss";
import { Heading, Text, Grid, Flex, Box, TextFieldInput, Select } from "@radix-ui/themes";

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
                    <Select.Root size="3" defaultValue="RENTAL">
                        <Select.Trigger className={styles.search__box__select} />
                        <Select.Content>
                            <Select.Item value="RENTAL">Sale</Select.Item>
                            <Select.Item value="SALE">Rentals</Select.Item>
                        </Select.Content>
                    </Select.Root>

                    <Select.Root size="3" defaultValue="RESIDENTIAL">
                        <Select.Trigger className={styles.search__box__select} />
                        <Select.Content>
                            <Select.Item value="RESIDENTIAL">Residential</Select.Item>
                            <Select.Item value="COMMERCIAL">Commercial</Select.Item>
                        </Select.Content>
                    </Select.Root>

                    <Select.Root size="3" defaultValue="WESTLANDS">
                        <Select.Trigger className={styles.search__box__select} />
                        <Select.Content>
                            <Select.Item value="WESTLANDS">Westlands</Select.Item>
                            <Select.Item value="MUTHIAGA">Muthiaga</Select.Item>
                        </Select.Content>
                    </Select.Root>
                </Grid>

                <Grid columns={{initial: "3"}} gap="5">
                    <TextFieldInput 
                        color="bronze"
                        placeholder="Beds | Baths" 
                        className={styles.search__box__input}
                    />
                    {/* <TextFieldInput 
                        color="bronze"
                        placeholder="MLS #" 
                        className={styles.search__box__input}
                    /> */}
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
