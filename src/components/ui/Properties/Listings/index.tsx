import { Grid, Text, Flex } from "@radix-ui/themes";

//@: Styles
import styles from "./listings.module.scss";

//@: Components
import ListingCard from "@/components/ui/Misc/ListingCard";

//@: Misc
import { listings } from "@/constants/listings";

export default function Listings() {
    return (
        <section className={styles.listings}>
            <Flex direction="column" gap="3">
                <Text>
                    <strong>1</strong> to <strong>{listings.length}</strong> out of <strong>{listings.length}</strong> properties
                </Text>

                <Grid columns={{initial: "3", lg: "3"}} gap="8">
                    {listings.map(item => (
                        <ListingCard key={item._id} item={item} />
                    ))}
                </Grid>

                <Flex mt="8" gap="3">
                    <div className={styles.listings__paginate}>1</div>
                    <div className={styles.listings__paginate}>2</div>
                    <div className={styles.listings__paginate}>3</div>
                    <div className={styles.listings__paginate}>4</div>
                    <div className={styles.listings__paginate}>5</div>
                </Flex>
            </Flex>
        </section>
    )
}
