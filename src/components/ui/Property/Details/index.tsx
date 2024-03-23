import { Heading, Text, Flex, Box, Grid, Checkbox, Separator, TextFieldInput } from "@radix-ui/themes";
import { PiMapPinFill } from "react-icons/pi";
import GoogleMapReact from 'google-map-react';

//@: Styles
import styles from "./details.module.scss";

//@: Components
import ListingCard from "@/components/ui/Misc/ListingCard";

//@: Assets
import floorPlans from "@/assets/plans.png";
import rl_01 from "@/assets/hero/hero-1.jpg";
import rl_02 from "@/assets/hero/hero-2.jpg";
import rl_03 from "@/assets/hero/hero-3.jpg";

//@: Misc
import { listings } from "@/constants/listings";
import type { ListingProps } from "@/constants/listings";

interface DetailsProps {
    listing?: ListingProps;
}

const MapMarker = (props:{lat:number; lng: number;}) => (
    <div {...props}>
        <PiMapPinFill color="#de2f40" size={30} />
    </div>
)

export default function Details({listing}:DetailsProps) {
    const defaultProps = {
        center: {
            lat: -1.2644370355853922,
            lng: 36.82419397368907
        },
        zoom: 13
    };

    return (
        <section className={styles.dets}>
            <div className={styles.dets__group}>
                <div className={styles.dets__col}>
                    <Box className={styles.dets__col__header}>
                        <Flex direction="column" gap="1">
                            <Heading as="h2" size="7">{listing?.name}</Heading>
                            <Text>{listing?.address}</Text>
                        </Flex>
                        <Heading as="h4" weight="bold" size="5" color="red">
                            {listing?.currency} {listing?.price.toLocaleString()} plus VAT
                        </Heading>
                    </Box>

                    <div className={styles.dets__col__card}>
                        <Heading as="h4">Description</Heading>
                        <Text as="p" size="3" color="gray">
                            Discover the allure of urban living at {listing?.name} 
                            This stunning residence offers a perfect fusion of modern comfort 
                            and city chic. Step into a sunlit living area, adorned with 
                            floor-to-ceiling windows that unveil captivating panoramic views 
                            of the cityscape. An open-concept kitchen awaits, boasting top-of-the-line 
                            stainless steel appliances, granite countertops, and abundant cabinet space.
                        </Text>
                        <Text as="p" size="3" color="gray">
                            Retreat to the master bedroom, complete with a walk-in closet and 
                            an en-suite bathroom featuring a luxurious soaking tub and a separate 
                            glass-enclosed shower. Two additional generously sized bedrooms offer 
                            versatility for guests, a home office, or hobbies.
                        </Text>
                        <Text as="p" size="3" color="gray">
                            Throughout the apartment, sleek hardwood floors harmonize with 
                            contemporary fixtures and finishes. Step onto your private balcony, 
                            an ideal spot for savoring morning coffee or evening cocktails while 
                            relishing in the city lights. For added convenience, an in-unit laundry 
                            eliminates the hassle of off-site facilities.
                        </Text>
                        <Text as="p" size="3" color="gray">
                            Within the building, enjoy an array of amenities designed to enhance 
                            your lifestyle. A 24-hour concierge provides security and assistance, 
                            while a state-of-the-art fitness center awaits those seeking an active 
                            lifestyle. Take advantage of the inviting rooftop terrace, complete 
                            with barbecue grills and lounge seating, or unwind in the resident 
                            lounge with complimentary Wi-Fi.
                        </Text>
                        <Text as="p" size="3" color="gray">
                            Nestled in the vibrant downtown district, "Skyline Heights Apartments" 
                            offers unparalleled access to the city's finest dining, shopping, 
                            entertainment, and cultural attractions. With easy access to public 
                            transportation and major highways, exploring the city has never been 
                            more convenient.
                        </Text>
                        <Text as="p" size="3" color="gray">
                            Experience luxury urban living at its finest. Schedule a viewing 
                            today and make "Skyline Heights Apartments" your new home sweet home.
                        </Text>
                    </div>

                    <div className={styles.dets__col__card}>
                        <Heading as="h4">Property Details</Heading>
                        <Grid columns={{initial: "3"}} gap="4">
                            <Text as="p">
                                Property ID: {" "}
                                <Text as="span" weight="bold" color="gray">
                                    V254680
                                </Text>
                            </Text>
                            <Text as="p">
                                Property Type: {" "}
                                <Text as="span" weight="bold" color="gray">
                                    House
                                </Text>
                            </Text>
                            <Text as="p">
                                Property Status: {" "}
                                <Text as="span" weight="bold" color="gray">
                                    For Sale
                                </Text>
                            </Text>
                            <Text as="p">
                                Property Price: {" "}
                                <Text as="span" weight="bold" color="gray">
                                    {listing?.price.toLocaleString()}
                                </Text>
                            </Text>
                            <Text as="p">
                                Size: {" "}
                                <Text as="span" weight="bold" color="gray">
                                    2000 sqr ft
                                </Text>
                            </Text>
                            <Text as="p">
                                Bedroom: {" "}
                                <Text as="span" weight="bold" color="gray">
                                    7
                                </Text>
                            </Text>
                            <Text as="p">
                                Bathroom: {" "}
                                <Text as="span" weight="bold" color="gray">
                                    4
                                </Text>
                            </Text>
                            <Text as="p">
                                Garages: {" "}
                                <Text as="span" weight="bold" color="gray">
                                    2
                                </Text>
                            </Text>
                            <Text as="p">
                                Year Built: {" "}
                                <Text as="span" weight="bold" color="gray">
                                    10/06/2020
                                </Text>
                            </Text>
                        </Grid>

                        <Separator my="5" orientation="horizontal" size="4" />

                        <Heading as="h4">Amenities</Heading>
                        <Grid columns={{initial: "3"}} gap="4">
                            <Flex gap="2">
                                <Checkbox checked size="3" color="bronze" />
                                <Text>Air Conditioning</Text>
                            </Flex>
                            <Flex gap="2">
                                <Checkbox checked size="3" color="bronze" />
                                <Text>Balcony</Text>
                            </Flex>
                            <Flex gap="2">
                                <Checkbox checked size="3" color="bronze" />
                                <Text>Microwave</Text>
                            </Flex>
                            <Flex gap="2">
                                <Checkbox checked size="3" color="bronze" />
                                <Text>Parking</Text>
                            </Flex>
                            <Flex gap="2">
                                <Checkbox checked size="3" color="bronze" />
                                <Text>Swimming Pool</Text>
                            </Flex>
                            <Flex gap="2">
                                <Checkbox checked size="3" color="bronze" />
                                <Text>Extra Wifey Cupboards</Text>
                            </Flex>
                        </Grid>
                    </div>

                    <div className={styles.dets__col__card}>
                        <Heading as="h4">Property Plans</Heading>
                        <img 
                            className={styles.dets__col__card__img} 
                            src={floorPlans} 
                            alt="plans" 
                        />
                    </div>

                    <div className={styles.dets__col__card}>
                        <Heading as="h4">Location</Heading>
                        <Box className={styles.dets__col__map}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: import.meta.env.VITE_MAP_KEY }}
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                            >
                                <MapMarker 
                                    lat={-1.2644370355853922} 
                                    lng={36.82419397368907} 
                                />
                            </GoogleMapReact>
                        </Box>
                    </div>
                </div>
                
                <div className={styles.dets__col}>
                    <form className={styles.dets__col__form} onSubmit={e => e.preventDefault()}>
                        <Heading as="h1">Request Inquiry</Heading>

                        <TextFieldInput 
                            color="bronze"
                            variant="surface"
                            size="3" 
                            required
                            placeholder="Full Name" 
                            className={styles.dets__col__input}
                        />

                        <TextFieldInput 
                            color="bronze"
                            variant="surface"
                            size="3" 
                            required
                            placeholder="Phone Number" 
                            className={styles.dets__col__input}
                        />

                        <TextFieldInput 
                            color="bronze"
                            variant="surface"
                            size="3" 
                            required
                            placeholder="Email" 
                            className={styles.dets__col__input}
                        />

                        <TextFieldInput 
                            color="bronze"
                            variant="surface"
                            size="3" 
                            required
                            placeholder="Message" 
                            className={styles.dets__col__input}
                        />

                        <button type="submit" className={styles.dets__col__btn}>
                            Submit request
                        </button>
                    </form>

                    <div className={styles.dets__col__listings}>
                        <Heading as="h1">
                            Recent Properties
                        </Heading>

                        <Flex direction="column" gap="4">
                            <Flex gap="4" align="center">
                                <img src={rl_01} alt="rl" />
                                <Flex direction="column" gap="1">
                                    <Heading size="3">Harmony Court Apartments</Heading>
                                    <Text size="3" weight="medium" color="gray">KES 45,000/mo</Text>
                                </Flex>
                            </Flex>
                            <Flex gap="4" align="center">
                                <img src={rl_02} alt="rl" />
                                <Flex direction="column" gap="1">
                                    <Heading size="3">Azure Vista Apartments</Heading>
                                    <Text size="3" weight="medium" color="gray">KES 65,000/mo</Text>
                                </Flex>
                            </Flex>
                            <Flex gap="4" align="center">
                                <img src={rl_03} alt="rl" />
                                <Flex direction="column" gap="1">
                                    <Heading size="3">Nova Skyline Suites</Heading>
                                    <Text size="3" weight="medium" color="gray">KES 80,000/mo</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </div>
                </div>
            </div>

            <Box className={styles.dets__footer}>
                <Flex direction="column" gap="6">
                    <Heading as="h1" size="7">
                        Similar Properties
                    </Heading>

                    <Grid columns={{initial: "3", lg: "3"}} gap="8">
                        {listings.slice(0, 3).map(item => (
                            <ListingCard key={item._id} item={item} />
                        ))}
                    </Grid>
                </Flex>
            </Box>
        </section>
    )
}
