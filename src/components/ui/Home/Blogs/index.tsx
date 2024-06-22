import { Heading, Text, Box, Flex, Grid } from "@radix-ui/themes";

//@: Styles
import styles from "./blogs.module.scss";

//@: Assets
import blog_01 from "@/assets/blogs/blog-01.webp";
import blog_02 from "@/assets/blogs/blog-02.webp";
import blog_03 from "@/assets/blogs/blog-03.webp";
import blog_04 from "@/assets/blogs/blog-04.webp";

const blogs = [
    {
        _id: 1,
        date: "Mar 14, 2024",
        title: "Buyers guide",
        image: blog_01,
        description: "New York County as a whole covers a total area of 33.77 square miles (87.5 km2), of which 22.96 square miles (59.5 km2) are land and 10.81 square miles (28.0 km2) are water..."
    },
    {
        _id: 2,
        date: "Mar 16, 2024",
        title: "Sellers guide",
        image: blog_02,
        description: "New York County as a whole covers a total area of 33.77 square miles (87.5 km2), of which 22.96 square miles (59.5 km2) are land and 10.81 square miles (28.0 km2) are water..."
    },
    {
        _id: 3,
        date: "Mar 17, 2024",
        title: "Reasons to sell before Easter",
        image: blog_03,
        description: "New York County as a whole covers a total area of 33.77 square miles (87.5 km2), of which 22.96 square miles (59.5 km2) are land and 10.81 square miles (28.0 km2) are water..."
    },
    {
        _id: 4,
        date: "Mar 18, 2024",
        title: "What to loof for in an agent",
        image: blog_04,
        description: "New York County as a whole covers a total area of 33.77 square miles (87.5 km2), of which 22.96 square miles (59.5 km2) are land and 10.81 square miles (28.0 km2) are water..."
    },
]

export default function Blogs() {
    return (
        <section className={styles.blogs}>
            <div className={styles.blogs__header}>
                <Flex direction="column" align="center" gap="3">
                    <Heading as="h1" size="8" align="center">
                        Our Blog
                    </Heading>
                    <Text as="p" align="center">
                        Browse through our range of articles covering real
                        estate buying tips all through to maximising on your investment.
                        There's something for everyone here.
                    </Text>
                </Flex>
            </div>

            <Grid columns={{initial: "2"}} gap="6">
                {blogs.filter(item => item._id === 1).map(blog => (
                    <div key={blog._id} className={styles.blogs__banner}>
                        <img src={blog.image} alt="blog" />
                        <Flex direction="column" gap="3">
                            <Text as="span" weight="bold">{blog.date}</Text>
                            <Heading as="h4">{blog.title}</Heading>
                            <Text as="p" size="2">{blog.description}</Text>
                        </Flex>
                    </div>
                ))}

                <Flex direction="column" gap="5">
                    {blogs.slice(1).map(blog => (
                        <div key={blog._id} className={styles.blogs__card}>
                            <img src={blog.image} alt="blog" />

                            <Box style={{flex: 1}}>
                                <Flex direction="column" gap="2">
                                    <Text as="span" size="2" weight="bold">{blog.date}</Text>
                                    <Heading as="h4" size="5">{blog.title}</Heading>
                                    <Text as="p" size="2" color="gray">{blog.description}</Text>
                                </Flex>
                            </Box>
                            
                        </div>
                    ))}
                </Flex>
            </Grid>

            <Flex justify="center">
                <button className={styles.blogs__btn}>
                    Read More Blogs
                </button>
            </Flex>
        </section>
    )
}
