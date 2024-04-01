import { Card, Box, Flex, Heading, Text } from "@radix-ui/themes";

import styles from "./blogCard.module.scss";

import type { BlogPosts } from "@/components/ui/Blogs/Posts";

interface BlogCardProps {
    item: BlogPosts
}

export default function BlogCard({item}:BlogCardProps) {
    return (
        <Card size="2">
            <Box className={styles.card}>
                <img className={styles.card__img} src={item.imageUrl} alt="blog" />
                <Flex direction="column" gap="3">
                    <Heading>{item.title}</Heading>
                    <Text size="2">
                        {item.createdAt}
                    </Text>
                    <Text size="2" color="gray" className={styles.card__text}>
                        {item.subtitle}
                    </Text>
                </Flex>
            </Box>
        </Card>
    )
}
