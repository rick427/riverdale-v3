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
                            Meet the Founders
                        </Heading>
                        
                        <Flex direction="column" gap="4">
                            <Text as="p" color="gray">
                                With over $2 Billion in sales, Our agency is the industry's top 
                                luxury producer with over 27 years of experience in marketing 
                                Seattles's most prestigious waterfront properties. 
                            </Text>
                            <Text as="p" color="gray">
                                Due to our unparalleled results, expertise and dedication, we rank amongst the 
                                Top 6 agencies in Seattle and our area. She is also and is an elite member to 
                                Corcoran's Presidents Council. 
                            </Text>
                            <Text as="p" color="gray">
                                With her years of experience, impressive property portfolio, celebrity 
                                clientele, and unparalleled knowledge of the market and pedigree estates, 
                                Simone estimable business is sophisticated and renowned.
                            </Text>
                        </Flex>

                        <div className={styles.founders__socials}>
                            <Flex gap="3">
                                <Box className={styles.founders__socials__icon}>
                                    <FaFacebookF size={18} />
                                </Box>
                                <Box className={styles.founders__socials__icon}>
                                    <FaInstagram size={18} />
                                </Box>
                                <Box className={styles.founders__socials__icon}>
                                    <FaLinkedin size={18} />
                                </Box>
                            </Flex>
                        <Text>Contact Us &rarr;</Text>
                    </div>
                    </Box>
                </div>

                <img className={styles.founders__img} src={founder} alt="founder" />
            </div>
        </section>
    )
}
