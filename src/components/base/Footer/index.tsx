import { Heading, Text, Flex, Box } from "@radix-ui/themes";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

import styles from "./footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__col}>
                <Flex direction="column" gap="5">
                    <Heading as="h1" size="7">Riverdale.</Heading>
                    <Text as="p" size="2">
                        We are committed to providing the most personalized real estate 
                        services from listing to close. We have exceptional results 
                        which are confirmed by the number of clients we serve. 
                        Discover our selection of income-generating rental properties 
                        and commercial ventures.
                    </Text>
                    <Box className={styles.footer__icons}>
                        <Box className={styles.footer__icon}>
                            <FaFacebookF size={16} />
                        </Box>
                        <Box className={styles.footer__icon}>
                            <FaInstagram size={16} />
                        </Box>
                        <Box className={styles.footer__icon}>
                            <FaLinkedin size={16} />
                        </Box>
                        <Box className={styles.footer__icon}>
                            <FaXTwitter size={16} />
                        </Box>
                    </Box>
                </Flex>
            </div>
            <div className={styles.footer__col}>
                <Flex direction="column" gap="4">
                    <Text as="p" weight="bold">Company</Text>
                    <ul className={styles.footer__col__list}>
                        <li>
                            <Link to="about">About</Link>
                        </li>
                        <li>
                            <Link to="about">Properties</Link>
                        </li>
                        <li>
                            <Link to="contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="contact">Blogs</Link>
                        </li>
                        <li>
                            <Link to="contact">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="contact">Terms & Conditions</Link>
                        </li>
                    </ul>
                </Flex>
            </div>
            <div className={styles.footer__col}>
                <Flex direction="column" gap="4">
                    <Text as="p" weight="bold">Listings</Text>
                    <ul className={styles.footer__col__list}>
                        <li>
                            <Link to="about">Muthiaga (4)</Link>
                        </li>
                        <li>
                            <Link to="contact">Kisumu (3)</Link>
                        </li>
                        <li>
                            <Link to="contact">Westlands (3)</Link>
                        </li>
                        <li>
                            <Link to="contact">Mombasa - Diana (2)</Link>
                        </li>
                        <li>
                            <Link to="contact">Kiambu (1)</Link>
                        </li>
                        <li>
                            <Link to="contact">Kilimani (5)</Link>
                        </li>
                    </ul>
                </Flex>
            </div>
        </footer>
    )
}
