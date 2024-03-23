import { Grid, Heading, Text, Flex } from "@radix-ui/themes";

//@: Styles
import styles from "./property.module.scss";

//@: Components
import ListingCard from "@/components/ui/Misc/ListingCard";

//@: Misc
import { listings } from "@/constants/listings";

export default function Property() {
    return (
        <section className={styles.property}>
            <div className={styles.property__header}>
                <Flex direction="column" align="center" gap="3">
                    <Heading as="h1" size="8" align="center">
                        Most Recent Properties
                    </Heading>
                    <Text as="p" align="center">
                        These properties contain exclusive real estate 
                        opportunities within the city. We have lots of 
                        properties to choose from, take your time and 
                        explore.
                    </Text>
                </Flex>
            </div>

            <Grid columns={{initial: "3", lg: "3"}} gap="8">
                {listings.slice(0, 6).map(item => (
                   <ListingCard key={item._id} item={item} /> 
                ))}
            </Grid>

            <Flex justify="center">
                <button className={styles.property__btn}>
                    See all Properties &rarr;
                </button>
            </Flex>
        </section>
    )
}
