import HackNottsDecoratedPage from "@components/shared/HackNottsDecoratedPage";
import HackNottsSectionHeader from "@components/shared/HackNottsSectionHeader";
import { Container } from "react-bootstrap";

function FAQ() : JSX.Element {
    return <HackNottsDecoratedPage>
        <Container>
            <HackNottsSectionHeader
                title="Frequently Asked Questions"
                id="faq"
            />
            <div>
                <p>TBD</p>
            </div>
        </Container>
    </HackNottsDecoratedPage>
}

export default FAQ;