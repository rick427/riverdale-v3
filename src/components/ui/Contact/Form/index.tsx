import { Heading, Grid, Text, Checkbox, Flex, TextFieldInput } from "@radix-ui/themes";

import styles from "./form.module.scss";

import contactImage from "@/assets/contact.webp";

export default function Form() {
    return (
        <section className={styles.contact}>
            <img className={styles.contact__img} src={contactImage} alt="contact" />

            <div className={styles.contact__form}>
                <Heading as="h1" size="8">
                    Get your Home Estimation
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
                        <Grid columns={{initial: "2"}} gap="5">
                            <TextFieldInput 
                                color="bronze"
                                required
                                placeholder="Country" 
                                className={styles.contact__form__input}
                            />
                            <TextFieldInput 
                                color="bronze"
                                required
                                placeholder="City" 
                                className={styles.contact__form__input}
                            />
                        </Grid>
                        <TextFieldInput 
                            color="bronze"
                            placeholder="Message" 
                            className={styles.contact__form__input}
                        />
                        <Text as="label" size="2">
                            <Flex gap="2">
                                <Checkbox size="3" />
                                I consent to having this website store my submitted 
                                information so they can respond to my inquiry.
                            </Flex>
                        </Text>
                        <button type="submit" className={styles.contact__form__btn}>
                            Send Email
                        </button>
                    </Flex>
                </form>
            </div>
        </section>
    )
}
