import { NavLink, Link, useParams } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react';
import { useState, useEffect } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { Text } from '@radix-ui/themes';

import styles from './header.module.scss';

import logoImg from "@/assets/logo-2.png";

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
                    <NavLink to="/property" className={({isActive}) => activeNavLink(isActive)}>
                        <Text as="span" size="2" weight="medium">Property</Text>
                    </NavLink>
                    <div className={styles.dropdown} style={{bottom: "-4rem"}}>
                        <Link to="/property">For Sale</Link>
                        <Link to="/property">For Rent</Link>
                    </div>
                </li>
                <li className={styles.header__list__item}>
                    <NavLink to="/about" className={({isActive}) => activeNavLink(isActive)}>
                        <Text as="span" size="2" weight="medium">About</Text>
                    </NavLink>
                </li>
                <li className={styles.header__list__item}>
                    <NavLink to="/blogs" className={({isActive}) => activeNavLink(isActive)}>
                        <Text as="span" size="2" weight="medium">Blog</Text>
                    </NavLink>
                </li>
            </ul>

            {/* <Heading as="h2" size="7">Riverdale.</Heading> */}
            <img src={logoImg} alt="logo" className={styles.header__logo} />

            <ul className={styles.header__list}>
                <li className={styles.header__list__item}>
                    <NavLink to="/contact" className={({isActive}) => activeNavLink(isActive)}>
                        <Text as="span" size="2" weight="medium">Contact Us</Text>
                    </NavLink>
                    <div className={styles.dropdown}>
                        <Link to="/contact">FAQ's</Link>
                    </div>
                </li>
                <li className={styles.header__list__item}>
                    <FaWhatsapp size={24} />
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
