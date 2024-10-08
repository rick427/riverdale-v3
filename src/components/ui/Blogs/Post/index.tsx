import { Flex, Heading, Text } from "@radix-ui/themes";

import styles from "./post.module.scss";
import bgImg from "@/assets/cta-02.webp";

export default function Post() {
    return (
        <section className={styles.post}>
            <div>
                <Flex gap="3" justify="center" align="center">
                    <div className={styles.post__badge}>
                        Polpular Articles
                    </div>
                    <Text>October 23, 2023</Text>
                </Flex>
            </div>

            <Heading className={styles.post__heading}>
                Best Strategy to Achieve Profitable Harvest
            </Heading>

            <p className={styles.post__text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum qui optio 
                expedita voluptas saepe sapiente repellendus vero dolor aliquid harum!
            </p>

            <div className={styles.post__box}>
                <img src={bgImg} alt="bg-img" />
                <Heading>Achieve a profitable harvest</Heading>
                <br/><br/>
                <Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum incidunt 
                    facilis rem ullam eos sit, animi perferendis minima expedita reprehenderit 
                    cupiditate? Quisquam, facere tempora! Dignissimos, unde iusto eos earum 
                    exercitationem perferendis doloribus, eius eaque, dicta explicabo labore! 
                    Nostrum, nulla corrupti.
                </Text>
                <br/><br/>
                <Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum incidunt 
                    facilis rem ullam eos sit, animi perferendis minima expedita reprehenderit 
                    cupiditate? Quisquam, facere tempora! Dignissimos, unde iusto eos earum 
                    exercitationem perferendis doloribus, eius eaque, dicta explicabo labore! 
                    Nostrum, nulla corrupti.
                </Text>
                <br/><br/>
                <Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum incidunt 
                    facilis rem ullam eos sit, animi perferendis minima expedita reprehenderit 
                    cupiditate? Quisquam, facere tempora! Dignissimos, unde iusto eos earum 
                    exercitationem perferendis doloribus, eius eaque, dicta explicabo labore! 
                    Nostrum, nulla corrupti.
                </Text>
            </div>
        </section>
    )
}
