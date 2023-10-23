import HackNottsDecoratedPage from "@components/shared/HackNottsDecoratedPage";
import HackNottsSectionHeader from "@components/shared/HackNottsSectionHeader";
import { Container, Stack } from "react-bootstrap";
import sponsorDoc from "@assets/sponsor-info.pdf"

import {ReactComponent as CapOneLogo} from "@assets/sponsors/capitalone.svg";
import FrasersLogo from "@assets/sponsors/frasers.png";
import {ReactComponent as IntelLogo } from "@assets/sponsors/intel.svg";
import {ReactComponent as HackUkLogo } from "@assets/sponsors/hackuk.svg";

function Sponsors(): JSX.Element {
    let sponsorDocUrl = new URL(sponsorDoc, import.meta.url).href;

    return <HackNottsDecoratedPage>
        <Container>
            <HackNottsSectionHeader
                title="Our Sponsors"
                id="sponsors"
            />
            <Stack gap={5} className="p-3 d-flex flex-row flex-wrap justify-content-around">
                <div style={{width: "300px"}}>
                    <img src={FrasersLogo} width="100%"/>
                </div>
                <CapOneLogo width="300px" />
                <IntelLogo width="300px" />
                <HackUkLogo width="300px" />
            </Stack>
            <div>
                <p className="italics">
                    HackNotts is only possible because of our amazing sponsors! It's thanks to their help that we can buy food, drinks,
                    and prizes, while keeping our event forever free for our attendees. Look forward to seeing them at the event!
                </p>
                <p className="text-muted">
                    <span className="bold">P.S.</span> A special thanks to our returning sponsors at Frasers Group and Capital One, and a warm welcome to Intel who are sponsoring
                    for the first time!
                </p>
            </div>
        </Container>
    </HackNottsDecoratedPage>
}

export default Sponsors;