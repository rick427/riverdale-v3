import { Heading, TextArea, Flex, TextFieldInput } from "@radix-ui/themes";
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

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
                        <div style={{display: "flex", flexDirection: "column", gap: "0.5rem"}}>
                            <span style={{fontSize: "0.8rem"}}>Name <span style={{color: "red"}}>*</span></span>
                            <TextFieldInput 
                                color="bronze"
                                variant="surface"
                                size="3" 
                                required
                                placeholder="John Doe" 
                                className={styles.dets__col__input}
                            />
                        </div>

                        <div style={{display: "flex", flexDirection: "column", gap: "0.5rem"}}>
                            <span style={{fontSize: "0.8rem"}}>Phone Number <span style={{color: "red"}}>*</span></span>
                            <TextFieldInput 
                                color="bronze"
                                variant="surface"
                                size="3" 
                                required
                                placeholder="07xxxxxxxx" 
                                className={styles.dets__col__input}
                            />
                        </div>

                        <div style={{display: "flex", flexDirection: "column", gap: "0.5rem"}}>
                            <span style={{fontSize: "0.8rem"}}>Email <span style={{color: "red"}}>*</span></span>
                            <TextFieldInput 
                                color="bronze"
                                variant="surface"
                                size="3" 
                                required
                                placeholder="07xxxxxxxx" 
                                className={styles.dets__col__input}
                            />
                        </div>

                        <TextArea 
                            color="bronze"
                            variant="surface"
                            required
                            placeholder="Message" 
                            className={styles.dets__col__textarea}
                        />

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Checkbox.Root className={styles.Root} defaultChecked id="c1">
                                <Checkbox.Indicator className={styles.Indicator}>
                                <CheckIcon />
                                </Checkbox.Indicator>
                            </Checkbox.Root>
                            <label className={styles.Label} htmlFor="c1">
                                Also sign up to newsletter
                            </label>
                        </div>
                       
                        <button type="submit" className={styles.contact__form__btn}>
                            Send 
                        </button>
                    </Flex>
                </form>
            </div>
        </section>
    )
}
