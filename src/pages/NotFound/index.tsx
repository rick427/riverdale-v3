import { Heading, Text, Flex, Box } from "@radix-ui/themes";
import { useRouteError, Link } from "react-router-dom";
import { RiSendPlaneLine } from "react-icons/ri";
import Lottie from "lottie-react";

import styles from "./notFound.module.scss";

import lottieFile from "@/assets/notfound.json";

interface ErrorProps extends Error {
    data: string;
    error: {
        message: string;
        stack: string;
    }
    internal: boolean;
    status: number;
    statusText: string;
}

export default function NotFound() {
    const error = useRouteError() as ErrorProps;
    return (
        <section className={styles.error}>
            <Lottie 
                loop
                className={styles.lottie}
                animationData={lottieFile}
            />

            <Box className={styles.error__box}>
                <Flex direction="column" justify="center" gap="4">
                    <Heading size="8" weight="bold" align="center">
                        Uh oh! You found him ...
                    </Heading>

                    <Text as="p" align="center">
                        Looks like you've found <Text as="span" weight="bold">Cat-astrophy</Text>. As you can see
                        he's quite shy and very grumpy. We advise you leave him alone
                        so he doesn't break the website.
                    </Text>

                    <Text as="p" color="red" align="center" weight="medium">
                        {error.data || error.message}
                    </Text>

                    <Link to="/" className={styles.error__link}>
                        <RiSendPlaneLine size={18} />
                        Ignore Cat-astrophy
                    </Link>
                </Flex>
            </Box>
        </section>
    )
}
