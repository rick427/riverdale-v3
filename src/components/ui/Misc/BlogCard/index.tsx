import { Card, Box, Flex, Heading, Text } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";

import styles from "./blogCard.module.scss";

import type { BlogPosts } from "@/components/ui/Blogs/Posts";

interface BlogCardProps {
    item: BlogPosts
}

export default function BlogCard({item}:BlogCardProps) {
    const navigate = useNavigate();

    const onNavigate = () => {
        navigate(`/blog/${slugify(item.title.toLowerCase())}`);
    }

    return (
        <Card size="2" style={{cursor: "pointer"}} onClick={onNavigate}>
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
