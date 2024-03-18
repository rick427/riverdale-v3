import { Card, Box, Grid, Heading, Text, Flex } from "@radix-ui/themes";
import { PiMapPin, PiBed, PiBathtub, PiRuler, PiCar } from "react-icons/pi";

//@: Styles
import styles from "./property.module.scss";

//@: Assets
import l_01 from "@/assets/listings/l-01.jpeg";
import l_02 from "@/assets/listings/l-02.jpeg";
import l_03 from "@/assets/listings/l-03.jpeg";
import l_04 from "@/assets/listings/l-04.jpeg";
import l_05 from "@/assets/listings/l-05.jpeg";
import l_06 from "@/assets/listings/l-06.webp";

const featured = [
    {
        _id: 1,
        image: l_01,
        price: 200_000,
        status: "RENT",
        currency: "KES",
        name: "Ivy Terrace Residences",
        description: "This solidly constructed, one-storey villa with six bedrooms situated within…",
        address: "Est St, 77 - Central Park South-See",
        amenities: [
            {
                icon: PiBed,
                name: "Bedroom",
                value: 6,
            },
            {
                icon: PiBathtub,
                name: "Bathroom",
                value: 3,
            },
            {
                icon: PiRuler,
                name: "sq ft",
                value: 720
            },
            {
                icon: PiCar,
                name: "Garages",
                value: 2
            }
        ]
    },
    {
        _id: 2,
        image: l_02,
        price: 120_000,
        currency: "KES",
        status: "RENT",
        name: "Tranquil Haven Apartments",
        description: "Charming villa located in a tranquil gated community nestled in…",
        address: "Est St, 77 - Central Park South-See",
        amenities: [
            {
                icon: PiBed,
                name: "Bedroom",
                value: 6,
            },
            {
                icon: PiBathtub,
                name: "Bathroom",
                value: 3,
            },
            {
                icon: PiRuler,
                name: "sq ft",
                value: 720
            },
            {
                icon: PiCar,
                name: "Garages",
                value: 2
            }
        ]
    },
    {
        _id: 3,
        image: l_03,
        price: 350_000,
        currency: "KES",
        status: "SALE",
        name: "Sunset Ridge Residences",
        description: "Generously sized, unfurnished 3-bedroom apartment, offering stunning views of lush…",
        address: "Est St, 77 - Central Park South-See",
        amenities: [
            {
                icon: PiBed,
                name: "Bedroom",
                value: 8,
            },
            {
                icon: PiBathtub,
                name: "Bathroom",
                value: 6,
            },
            {
                icon: PiRuler,
                name: "sq ft",
                value: 2200
            },
            {
                icon: PiCar,
                name: "Garages",
                value: 3
            }
        ]
    },
    {
        _id: 4,
        image: l_04,
        price: 1_200,
        currency: "USD",
        status: "RENT",
        name: "Emerald Heights Suites",
        description: "Wonderful single-story 4-bedroom maisonette with a DSQ, nestled within the…",
        address: "Est St, 77 - Central Park South-See",
        amenities: [
            {
                icon: PiBed,
                name: "Bedroom",
                value: 4,
            },
            {
                icon: PiBathtub,
                name: "Bathroom",
                value: 2,
            },
            {
                icon: PiRuler,
                name: "sq ft",
                value: 1900
            },
            {
                icon: PiCar,
                name: "Garages",
                value: 1
            }
        ]
    },
    {
        _id: 5,
        image: l_05,
        price: 6_250,
        currency: "USD",
        status: "RENT",
        name: "Serenity Springs Apartments",
        description: "Impeccably designed six-bedroom apartment, meticulously made for the discerning buyer.…",
        address: "Est St, 77 - Central Park South-See",
        amenities: [
            {
                icon: PiBed,
                name: "Bedroom",
                value: 8,
            },
            {
                icon: PiBathtub,
                name: "Bathroom",
                value: 6,
            },
            {
                icon: PiRuler,
                name: "sq ft",
                value: 2000
            },
            {
                icon: PiCar,
                name: "Garages",
                value: 2
            }
        ]
    },
    {
        _id: 6,
        image: l_06,
        price: 8_500,
        currency: "USD",
        status: "RENT",
        name: "Harbor View Lofts",
        description: "Well kept three bedroom apartment  (one ensuite) apartment in a…",
        address: "Est St, 77 - Central Park South-See",
        amenities: [
            {
                icon: PiBed,
                name: "Bedroom",
                value: 3,
            },
            {
                icon: PiBathtub,
                name: "Bathroom",
                value: 3,
            },
            {
                icon: PiRuler,
                name: "sq ft",
                value: 1800
            },
            {
                icon: PiCar,
                name: "Garages",
                value: 3
            }
        ]
    }
]

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
                {featured.map(item => (
                    <Card key={item._id} size="2">
                        <Box className={styles.card}>
                            <Flex direction="column" gap="2">
                                <Box className={styles.card__image}>
                                    <img src={item.image} alt="l-01" />
                                    <Box className={styles.card__image__price}>
                                        <Text as="span" weight="bold">
                                            {`${item.currency} ${item.price?.toLocaleString()}`}
                                        </Text>
                                    </Box>
                                    <Box className={styles.card__image__badge}>
                                        For {item.status}
                                    </Box>
                                </Box>

                                <Heading size="5" weight="bold">
                                    {item.name}
                                </Heading>

                                <Flex align="center" gap="2">
                                    <PiMapPin/> 
                                    <Text as="span">
                                        {item.address}
                                    </Text>
                                </Flex>

                                <Text as="p" size="2" color="gray">
                                    {item.description}
                                </Text>
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
                ))}
            </Grid>

            <Flex justify="center">
                <button className={styles.property__btn}>
                    See all Properties
                </button>
            </Flex>
        </section>
    )
}
