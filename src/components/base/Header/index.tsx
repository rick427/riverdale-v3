import { NavLink, useParams } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react';
import { Heading, Text } from '@radix-ui/themes';
import { useState, useEffect } from 'react';
import { HiPhone } from "react-icons/hi2";

import styles from './header.module.scss';

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scrollPosition, setScrollPosition] = useState<number>(window.scrollY);

    const params = useParams();

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    },[]);

    const activeNavLink = (isActive:boolean) => {
        return isActive ? styles.isActive : "";
    }

    const headerClassNames = (scrollPosition > 50 || !!params.slug) ? `${styles.header} ${styles.sticky}` : styles.header;

    return (
        <header className={headerClassNames}>
            <ul className={styles.header__list}>
                <li className={styles.header__list__item}>
                    <NavLink to="/" className={({isActive}) => activeNavLink(isActive)}>
                        <Text as="span" size="2" weight="medium">Home</Text>
                    </NavLink>
                </li>
                <li className={styles.header__list__item}>
                    <NavLink to="/about" className={({isActive}) => activeNavLink(isActive)}>
                        <Text as="span" size="2" weight="medium">About</Text>
                    </NavLink>
                </li>
                <li className={styles.header__list__item}>
                    <NavLink to="/property" className={({isActive}) => activeNavLink(isActive)}>
                        <Text as="span" size="2" weight="medium">Property</Text>
                    </NavLink>
                </li>
                <li className={styles.header__list__item}>
                    <NavLink to="/blogs" className={({isActive}) => activeNavLink(isActive)}>
                        <Text as="span" size="2" weight="medium">Blogs</Text>
                    </NavLink>
                </li>
            </ul>

            <Heading as="h2" size="7">Riverdale.</Heading>

            <ul className={styles.header__list}>
                <li className={styles.header__list__item}>
                    <NavLink to="/contact" className={({isActive}) => activeNavLink(isActive)}>
                        <Text as="span" size="2" weight="medium">Contact Us</Text>
                    </NavLink>
                </li>
                <li className={styles.header__list__item}>
                    <HiPhone size={16} />
                    <a href="https://wa.me/254705986417" target="_blank" rel="noreferrer">
                        <Text as="span" size="2" weight="medium">
                            +254 791 786 110
                        </Text>
                    </a>
                </li>
            </ul>

            <div className={styles.header__hamburger}>
                <Hamburger 
                    size={25} 
                    toggled={isOpen} 
                    toggle={setIsOpen} 
                />
            </div>            
        </header>
    )
}
