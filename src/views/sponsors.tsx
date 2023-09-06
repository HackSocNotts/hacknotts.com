import HackNottsDecoratedPage from "@components/shared/HackNottsDecoratedPage";
import HackNottsSectionHeader from "@components/shared/HackNottsSectionHeader";
import { Container } from "react-bootstrap";

function Sponsors(): JSX.Element {
    return <HackNottsDecoratedPage>
        <Container>
            <HackNottsSectionHeader
                title="Sponsors"
                id="sponsors"
            />
            <div>
                <p>
                    Would you like to sponsor us? That's great!
                    We really appreciate all of our sponsors, and
                    we have a range of flexible packages available
                    to cater for any budget or other requirements.
                    Take a look at our <a href="/assets/sponsor-info.pdf">Sponsorship Information Booklet</a> for more details and prices, and then feel free to
                    get in contact with the <a href="mailto:committee@hacksocnotts.co.uk">committee</a> or our <a href="mailto:daudi.wampamba@hacksocnotts.co.uk">lead organiser</a> and we can set up a meeting!
                </p>
                <p>
                    Thank you for considering us — HackNotts is only
                    possible because of our amazing sponsors.
                </p>
            </div>
        </Container>
    </HackNottsDecoratedPage>
}

export default Sponsors;