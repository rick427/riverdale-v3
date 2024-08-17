import { Flex, Heading, Text, Box } from "@radix-ui/themes";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

//@: Styles
import styles from "./founders.module.scss";

//@: Assets
import founder from "@/assets/founder.jpg";

export default function Founders() {
    return (
        <section className={styles.founders}>
            <div className={styles.founders__group}>
                <div className={styles.founders__card}>
                    <Box className={styles.founders__card__content}>
                        <Heading as="h1" size="8">
                            Our Profile
                        </Heading>
                        
                        <Flex direction="column" gap="4">
                            <Text as="p" color="gray">
                                We are Kenya's #1 Real Estate Agency. We have a diverse experience and portfolio of properties which we sell, rent and manage. 
                            </Text>
                            <Text as="p" color="gray">
                                We deal in both Residential & Commercial listings from apartments, townhouses all through to plots and office spaces, we deal with it all!
                            </Text>
                            <Text as="p" color="gray">
                                Give us a call today and let us help you find your next dream property. 
                            </Text>
                        </Flex>

                        <Heading as="h1" size="8">
                            Our Vision
                        </Heading>
                        
                        <Flex direction="column" gap="4">
                            <Text as="p" color="gray">
                                To be the Real Estate Agency of choice and to provide world class customer support.
                            </Text>
                        </Flex>

                        <Heading as="h1" size="8">
                            Our Mission
                        </Heading>
                        
                        <Flex direction="column" gap="4">
                            <Text as="p" color="gray">
                                To help you find the property of choice with the best value for your money.
                            </Text>
                        </Flex>

                        <div className={styles.founders__socials}>
                            {/* <Flex gap="3">
                                <Box className={styles.founders__socials__icon}>
                                    <FaFacebookF size={18} />
                                </Box>
                                <Box className={styles.founders__socials__icon}>
                                    <FaInstagram size={18} />
                                </Box>
                                <Box className={styles.founders__socials__icon}>
                                    <FaLinkedin size={18} />
                                </Box>
                            </Flex> */}
                        <Text>Contact Us &rarr;</Text>
                    </div>
                    </Box>
                </div>

                <img className={styles.founders__img} src={founder} alt="founder" />
            </div>
        </section>
    )
}
