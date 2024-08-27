import { Heading, Grid, Flex, TextFieldInput } from "@radix-ui/themes";

import styles from "./form.module.scss";

import contactImage from "@/assets/contact.webp";

export default function Form() {
    return (
        <section className={styles.contact}>
            <img className={styles.contact__img} src={contactImage} alt="contact" />

            <div className={styles.contact__form}>
                <Heading as="h1" size="8">
                    We are Here for You
                </Heading>
                
                <form>
                    <Flex direction="column" gap="5">
                        <Grid columns={{initial: "2"}} gap="5">
                            <TextFieldInput 
                                color="bronze"
                                required
                                placeholder="First Name" 
                                className={styles.contact__form__input}
                            />
                            <TextFieldInput 
                                color="bronze"
                                required
                                placeholder="Last Name" 
                                className={styles.contact__form__input}
                            />
                        </Grid>
                        <Grid columns={{initial: "2"}} gap="5">
                            <TextFieldInput 
                                required
                                color="bronze"
                                placeholder="Email Address" 
                                className={styles.contact__form__input}
                            />
                            <TextFieldInput 
                                color="bronze"
                                required
                                placeholder="Mobile Number" 
                                className={styles.contact__form__input}
                            />
                        </Grid>
                        <TextFieldInput 
                            color="bronze"
                            placeholder="Message" 
                            style={{height: "10rem"}}
                            className={styles.contact__form__input}
                        />
                       
                        <button type="submit" className={styles.contact__form__btn}>
                            Send 
                        </button>
                    </Flex>
                </form>
            </div>
        </section>
    )
}
