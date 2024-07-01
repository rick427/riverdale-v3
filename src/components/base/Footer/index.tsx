import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Text, Flex, Box } from "@radix-ui/themes";
//import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

import styles from "./footer.module.scss";

import logoImg from "@/assets/logo.png";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__group}>
                <div className={styles.footer__col}>
                    <Flex direction="column" gap="5">
                        <img src={logoImg} alt="logo" className={styles.footer__col__logo} />
                        <Text as="p" size="2">
                            We are committed to providing the most personalized real estate 
                            services from listing to close. We have exceptional results 
                            which are confirmed by the number of clients we serve. 
                            Discover our selection of income-generating rental properties 
                            and commercial ventures.
                        </Text>
                        <Box className={styles.footer__icons}>
                            <a className={styles.footer__icon} href="https://www.facebook.com/riverdalepropertiesltd" target="_blank" rel="noreferrer">
                                <FaFacebookF size={16} />
                            </a>
                            <a className={styles.footer__icon} href="https://www.instagram.com/riverdaleproperties/" target="_blank" rel="noreferrer">
                                <FaInstagram size={16} />
                            </a>
                            {/* <a className={styles.footer__icon} href="https://www.instagram.com/riverdaleproperties/" target="_blank" rel="noreferrer">
                                <FaLinkedin size={16} />
                            </a>
                            <a className={styles.footer__icon} href="https://twitter.com/riverdalepltd" target="_blank" rel="noreferrer">
                                <FaXTwitter size={16} />
                            </a> */}
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
                        </ul>
                    </Flex>
                </div>
                <div className={styles.footer__col}>
                    <Flex direction="column" gap="4">
                        <Text as="p" weight="bold">Contact Us</Text>
                        <ul className={styles.footer__col__list}>
                            <li>
                                <Text as="p" size="2">
                                    Address: Brookside Drive
                                </Text>
                            </li>
                            <li>
                                <Text as="p" size="2">
                                    Phone: +254 791 786 110
                                </Text>
                            </li>
                            <li>
                                <Text as="p" size="2">
                                    Email: info@riverdalep.com
                                </Text>
                            </li>
                        </ul>
                    </Flex>
                </div>
                <div className={styles.footer__col}>
                    <Flex direction="column" gap="4">
                        <Text as="p" weight="bold">Newsletter</Text>
                        <Flex direction="column" gap="5">
                            <input placeholder="Your email address" className={styles.footer__col__input} />
                            <button className={styles.footer__col__btn}>subscribe</button>
                        </Flex>
                    </Flex>
                </div>
            </div>

            {/* <Flex justify="center" align="center">
                <Text size="2">
                    {new Date().getFullYear()} &copy; Copyright. All Rights Reserved
                </Text>
            </Flex> */}
        </footer>
    )
}
