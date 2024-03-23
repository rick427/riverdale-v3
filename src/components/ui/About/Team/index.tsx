import { Flex, Heading, Text, Grid, Box } from "@radix-ui/themes";

//@: Styles
import styles from "./team.module.scss";

//@: Assets
import t_01 from "@/assets/teams/t-01.jpg";
import t_02 from "@/assets/teams/t-02.jpg";
import t_03 from "@/assets/teams/t-03.jpg";
import t_04 from "@/assets/teams/t-04.jpg";

export default function Team() {
    return (
        <section className={styles.team}>
            <div className={styles.team__header}>
                <Flex direction="column" align="center" gap="3">
                    <Heading as="h1" size="8" align="center">
                        Meet the Team
                    </Heading>
                    <Text as="p" align="center">
                        Riverdale is recognized by everyone - clients, developers, 
                        vendors, and industry professionals - for her unique 
                        talents, creative drive, and diligence in assisting
                        buyers and sellers in one of the most scenic and fulfilling 
                        places, Parklands, Westlands. With her far-reaching network/
                    </Text>
                </Flex>
            </div>

            <Grid columns={{initial: "4"}} gap="6">
                <Box className={styles.team__card}>
                    <img src={t_01} alt="team" />
                    <Text as="p" weight="bold">Javid Khan</Text>
                    <Text as="span">Chief Executive Officer</Text>
                </Box>
                <Box className={styles.team__card}>
                    <img src={t_04} alt="team" />
                    <Text as="p" weight="bold">Kabir Khan</Text>
                    <Text as="span">Business Development Officer</Text>
                </Box>
                <Box className={styles.team__card}>
                    <img src={t_03} alt="team" />
                    <Text as="p" weight="bold">Jamal Khan</Text>
                    <Text as="span">Chief Sales Officer</Text>
                </Box>
                <Box className={styles.team__card}>
                    <img src={t_02} alt="team" />
                    <Text as="p" weight="bold">Kaiser Khan</Text>
                    <Text as="span">Chief Finance Officer</Text>
                </Box>
            </Grid>
        </section>
    )
}
