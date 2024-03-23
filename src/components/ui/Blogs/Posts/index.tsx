import { Heading, Grid } from "@radix-ui/themes";

import styles from "./posts.module.scss";

//@: Assets
import blog_01 from "@/assets/blogs/blog-01.webp";
import blog_02 from "@/assets/blogs/blog-02.webp";
import blog_03 from "@/assets/blogs/blog-03.webp";
import blog_04 from "@/assets/blogs/blog-04.webp";
import blog_05 from "@/assets/blogs/blog-05.webp";
import blog_06 from "@/assets/blogs/blog-06.webp";
import BlogCard from "../../Misc/BlogCard";

export type BlogPosts = {
    _id: number,
    imageUrl: string;
    title: string;
    subtitle: string;
    createdAt: string;
}

const blogPosts:BlogPosts[] = [
    {
        _id: 1,
        imageUrl: blog_01,
        title: "Best areas for families with kids",
        subtitle: "Discover the Perfect Neighborhood: Ideal Areas for Families with Kids. Explore Safety, Education, and Community in Family-Friendly Enclaves. Find Your Haven for Joyful Memories and Flourishing Childhoods",
        createdAt: "March 4, 2024"
    },
    {
        _id: 2,
        imageUrl: blog_02,
        title: "The top neighbourhoods",
        subtitle: "Discover the Perfect Neighborhood: Ideal Areas for Families with Kids. Explore Safety, Education, and Community in Family-Friendly Enclaves. Find Your Haven for Joyful Memories and Flourishing Childhoods",
        createdAt: "March 12, 2024"
    },
    {
        _id: 3,
        imageUrl: blog_03,
        title: "Buyer's guide",
        subtitle: "Discover the Perfect Neighborhood: Ideal Areas for Families with Kids. Explore Safety, Education, and Community in Family-Friendly Enclaves. Find Your Haven for Joyful Memories and Flourishing Childhoods",
        createdAt: "March 12, 2024"
    },
    {
        _id: 4,
        imageUrl: blog_04,
        title: "What to look for in an agent",
        subtitle: "Discover the Perfect Neighborhood: Ideal Areas for Families with Kids. Explore Safety, Education, and Community in Family-Friendly Enclaves. Find Your Haven for Joyful Memories and Flourishing Childhoods",
        createdAt: "March 12, 2024"
    },
    {
        _id: 5,
        imageUrl: blog_05,
        title: "Reasons to sell before new year",
        subtitle: "Discover the Perfect Neighborhood: Ideal Areas for Families with Kids. Explore Safety, Education, and Community in Family-Friendly Enclaves. Find Your Haven for Joyful Memories and Flourishing Childhoods",
        createdAt: "March 12, 2024"
    },
    {
        _id: 6,
        imageUrl: blog_06,
        title: "Seller's guide",
        subtitle: "Discover the Perfect Neighborhood: Ideal Areas for Families with Kids. Explore Safety, Education, and Community in Family-Friendly Enclaves. Find Your Haven for Joyful Memories and Flourishing Childhoods",
        createdAt: "March 12, 2024"
    },
]

export default function Posts() {
    return (
        <section className={styles.posts}>
            <Heading>Blog List</Heading>

            <Grid columns={{initial: "3"}} gap="8">
                {blogPosts.map(item => (
                    <BlogCard item={item} />
                ))}
            </Grid>
        </section>
    )
}
