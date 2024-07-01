import { useState } from "react";
import styles from "./search.module.scss";
import { Heading, Text, Grid, Flex, Box, Select } from "@radix-ui/themes";

export default function Search() {
    const [category, setCategory] = useState<string>("");

    console.log(category)

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
                    <Select.Root size="3" defaultValue="">
                        <Select.Trigger className={styles.search__box__select} placeholder="Type" />
                        <Select.Content>
                            <Select.Item value="RENTAL">Sale</Select.Item>
                            <Select.Item value="SALE">Rentals</Select.Item>
                        </Select.Content>
                    </Select.Root>

                    <Select.Root size="3" defaultValue="" value={category} onValueChange={(value) => setCategory(value)}>
                        <Select.Trigger className={styles.search__box__select} placeholder="Category" />
                        <Select.Content>
                            <Select.Item value="RESIDENTIAL">Residential</Select.Item>
                            <Select.Item value="COMMERCIAL">Commercial</Select.Item>
                        </Select.Content>
                    </Select.Root>

                    <Select.Root size="3" defaultValue="" disabled={!category}>
                        <Select.Trigger className={styles.search__box__select} placeholder="Specification" />
                        <Select.Content>
                            {category === "COMMERCIAL" && (
                                <>
                                    <Select.Item value="OFFICE">Office</Select.Item>
                                    <Select.Item value="HOUSE">House</Select.Item>
                                    <Select.Item value="PLOT">Plot</Select.Item>
                                    <Select.Item value="SHOP">Shop</Select.Item>
                                    <Select.Item value="SHOWROOM">Snowroom</Select.Item>
                                    <Select.Item value="WAREHOUSE">Warehouse</Select.Item>
                                </>
                            )}
                            {category === "RESIDENTIAL" && (
                                <>
                                    <Select.Item value="TOWNHOUSE">TownHouse</Select.Item>
                                    <Select.Item value="APARTMENT">Apartment</Select.Item>
                                    <Select.Item value="GUEST_HOUSE">Guest House</Select.Item>
                                    <Select.Item value="BEDSITTER">Bedsitter</Select.Item>
                                    <Select.Item value="HOUSE">House</Select.Item>
                                    <Select.Item value="MAISONETTE">Maisonette</Select.Item>
                                    <Select.Item value="PENTHOUSE">Penthouse</Select.Item>
                                </>
                            )}
                        </Select.Content>
                    </Select.Root>
                </Grid>

                <Grid columns={{initial: "3"}} gap="5">
                    <Select.Root size="3" defaultValue="">
                        <Select.Trigger className={styles.search__box__select} placeholder="Location" />
                        <Select.Content>
                            <Select.Item value="WESTLANDS">Westlands</Select.Item>
                            <Select.Item value="MUTHIAGA">Muthiaga</Select.Item>
                            <Select.Item value="ATHI_RIVER">Athi River</Select.Item>
                            <Select.Item value="BAMBURI">Bamburi</Select.Item>
                            <Select.Item value="BROOKSIDE_DRIVE">Brookside Drive</Select.Item>
                            <Select.Item value="CENTRAL_BUSINESS_DISTRICT">Central Business District</Select.Item>
                        </Select.Content>
                    </Select.Root>
                    <Select.Root size="3" defaultValue="" disabled={category === "COMMERCIAL"}>
                        <Select.Trigger className={styles.search__box__select} placeholder="Baths" />
                        <Select.Content>
                            <Select.Item value="1">1</Select.Item>
                            <Select.Item value="2">2</Select.Item>
                            <Select.Item value="3">3</Select.Item>
                            <Select.Item value="4">4</Select.Item>
                        </Select.Content>
                    </Select.Root>

                    <Select.Root size="3" defaultValue="" disabled={category === "COMMERCIAL"}>
                        <Select.Trigger className={styles.search__box__select} placeholder="Beds" />
                        <Select.Content>
                            <Select.Item value="1">1</Select.Item>
                            <Select.Item value="2">2</Select.Item>
                            <Select.Item value="3">3</Select.Item>
                            <Select.Item value="4">4</Select.Item>
                        </Select.Content>
                    </Select.Root>
                </Grid>
                <button className={styles.search__box__btn}>
                    Search Properties
                </button>
            </Box>
        </section>
    )
}
