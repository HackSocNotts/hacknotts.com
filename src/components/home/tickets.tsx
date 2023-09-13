import { Container } from "react-bootstrap"
import { useEffect } from 'react';



interface TicketsProps {
}

function Tickets(_props: TicketsProps): JSX.Element {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://js.tito.io/v2";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return <Container>
        <tito-widget
            event="hacksocnottingham/hacknotts84"
        ></tito-widget>
    </Container>
}

export default Tickets;
export type { TicketsProps }