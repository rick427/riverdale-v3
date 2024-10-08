import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import styles from "./faqs.module.scss";
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Faqs() {
    return (
        <div className={styles.contact}>
            <Accordion preExpanded={["1"]}>
                <AccordionItem uuid="1">
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What harsh truths do you prefer to ignore?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Exercitation in fugiat est ut ad ea cupidatat ut in
                            cupidatat occaecat ut occaecat consequat est minim minim
                            esse tempor laborum consequat esse adipisicing eu
                            reprehenderit enim.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem uuid="2">
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Is free will real or just an illusion?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            In ad velit in ex nostrud dolore cupidatat consectetur
                            ea in ut nostrud velit in irure cillum tempor laboris
                            sed adipisicing eu esse duis nulla non.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
