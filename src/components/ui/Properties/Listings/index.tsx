import { Grid, } from "@radix-ui/themes";

//@: Styles
import styles from "./listings.module.scss";

//@: Components
import ListingCard from "@/components/ui/Misc/ListingCard";

//@: Misc
import { listings } from "@/constants/listings";

export default function Listings() {
    return (
        <section className={styles.listings}>
            <Grid columns={{initial: "3", lg: "3"}} gap="8">
                {listings.map(item => (
                    <ListingCard key={item._id} item={item} />
                ))}
            </Grid>
        </section>
    )
}
