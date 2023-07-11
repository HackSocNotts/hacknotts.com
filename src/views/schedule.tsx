import HackNottsDecoratedPage from "@components/shared/HackNottsDecoratedPage";
import HackNottsSectionHeader from "@components/shared/HackNottsSectionHeader";
import { Container } from "react-bootstrap";

function Schedule() : JSX.Element {
    return <HackNottsDecoratedPage>
        <Container>
            <HackNottsSectionHeader
                title="Schedule"
                id="schedule"
            />
            <div className="text-center fw-bold fst-italic">
                <p>
                    From the moment I understood the weakness of my flesh, it disgusted me. I craved the strength and certainty of steel. I aspired to the purity of the blessed machine.
                </p>
                <p>
                    Your kind cling to your flesh as if it will not decay and fail you. One day the crude biomass you call a temple will wither and you will beg my kind to save you.
                </p>
                <p>
                    But I am already saved. For the Machine is Immortal.
                </p>
            </div>
            <p className="text-end text-muted fst-italic">&mdash; Bruce Bernard II</p>
        </Container>
    </HackNottsDecoratedPage>
}

export default Schedule;