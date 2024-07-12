import { Heading, Box, Grid, Select } from "@radix-ui/themes";
import { useState } from "react";

import styles from "./hero.module.scss";

export default function Hero() {
    const [category, setCategory] = useState<string>("");

    return (
        <section className={styles.hero}>
            <Box className={styles.hero__heading}>
                <Heading as="h1" size="9" weight="medium" align="center">
                    Top Real Estate Listings in Nairobi
                </Heading>
            </Box>

            <Box className={styles.hero__search}>
                <Grid columns={{initial: "3"}} gap="5">
                    <Select.Root size="3" defaultValue="">
                        <Select.Trigger className={styles.hero__search__select} placeholder="Type" />
                        <Select.Content>
                            <Select.Item value="RENTAL">Sale</Select.Item>
                            <Select.Item value="SALE">Rentals</Select.Item>
                        </Select.Content>
                    </Select.Root>

                    <Select.Root size="3" defaultValue="" value={category} onValueChange={(value) => setCategory(value)}>
                        <Select.Trigger className={styles.hero__search__select} placeholder="Category" />
                        <Select.Content>
                            <Select.Item value="RESIDENTIAL">Residential</Select.Item>
                            <Select.Item value="COMMERCIAL">Commercial</Select.Item>
                        </Select.Content>
                    </Select.Root>

                    <Select.Root size="3" defaultValue="" disabled={!category}>
                        <Select.Trigger className={styles.hero__search__select} placeholder="Specification" />
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
                        <Select.Trigger className={styles.hero__search__select} placeholder="Location" />
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
                        <Select.Trigger className={styles.hero__search__select} placeholder="Baths" />
                        <Select.Content>
                            <Select.Item value="1">1</Select.Item>
                            <Select.Item value="2">2</Select.Item>
                            <Select.Item value="3">3</Select.Item>
                            <Select.Item value="4">4</Select.Item>
                        </Select.Content>
                    </Select.Root>

                    <Select.Root size="3" defaultValue="" disabled={category === "COMMERCIAL"}>
                        <Select.Trigger className={styles.hero__search__select} placeholder="Beds" />
                        <Select.Content>
                            <Select.Item value="1">1</Select.Item>
                            <Select.Item value="2">2</Select.Item>
                            <Select.Item value="3">3</Select.Item>
                            <Select.Item value="4">4</Select.Item>
                        </Select.Content>
                    </Select.Root>
                </Grid>
                <button className={styles.hero__search__btn}>
                    Search Properties
                </button>
            </Box>
        </section>
    )
}
