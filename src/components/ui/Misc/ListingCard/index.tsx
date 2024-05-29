import { Card, Box, Grid, Heading, Text, Flex } from "@radix-ui/themes";
import { PiMapPin } from "react-icons/pi";
import { Link } from "react-router-dom";

import styles from "./listingCard.module.scss";
import type { ListingProps } from "@/constants/listings";

interface ListingCardProps {
    item: ListingProps
}

export default function ListingCard({item}:ListingCardProps) {
    return (
        <Card size="2">
            <Box className={styles.card}>
                <Flex direction="column" gap="2">
                    <Box className={styles.card__image}>
                        <Link to={`/property/${item.slug}`}>
                            <img src={item.image} alt="l-01" />
                        </Link>
                        <Box className={styles.card__image__price}>
                            <Text as="span" weight="bold">
                                {`${item.currency} ${item.price?.toLocaleString()}`}
                            </Text>
                        </Box>
                        <Box className={styles.card__image__badge} style={{backgroundColor: item.status === "SALE" ? "#d22d3e" : ""}}>
                            For {item.status}
                        </Box>
                    </Box>

                    <Link to={`/property/${item.slug}`}>
                        <Heading size="5" weight="bold">
                            {item.name}
                        </Heading>
                    </Link>

                    <Flex align="center" gap="2">
                        <PiMapPin/> 
                        <Text as="span">
                            {item.address}
                        </Text>
                    </Flex>

                    {/* <Text as="p" size="2" color="gray">
                        {item.description}
                    </Text> */}
                </Flex>

                <Grid columns={{initial: "2"}} gap="3">
                    {item.amenities.map(el => (
                        <Flex key={el.name} align="center" gap="3">
                            <el.icon size={18} />
                            <Text as="p" size="2">
                                {`${el.value} ${el.name}`}
                            </Text>
                        </Flex>
                    ))}
                </Grid>
            </Box>
        </Card>
    )
}
