import HackNottsDecoratedPage from "@components/shared/HackNottsDecoratedPage";
import HackNottsSectionHeader from "@components/shared/HackNottsSectionHeader";
import { Container } from "react-bootstrap";

function Schedule(): JSX.Element {
    return <HackNottsDecoratedPage>
        <Container>
            <HackNottsSectionHeader
                title="Schedule"
                id="schedule"
            />
            <h2>Saturday 4th</h2>
            <ul>
                <li><b>1000</b> Doors open</li>
                <li><b>1120</b> Opening ceremony</li>
                <li><b>1200</b> Hacking starts!</li>
                <li><b>1200</b> Lunch</li>
                <li><b>1230</b> Intel workshop</li>
                <li><b>1330</b> Capital One workshop</li>
                <li><b>1430</b> Frasers workshop</li>
                <li><b>1900</b> Dinner</li>
            </ul>
            <h2>Sunday 5th</h2>
            <ul>
                <li><b>0700</b> Breakfast</li>
                <li><b>1200</b> Hacking ends!</li>
                <li><b>1300</b> Judging starts</li>
                <li><b>1500</b> Closing ceremony</li>
            </ul>
        </Container>
    </HackNottsDecoratedPage>
}

export default Schedule;
