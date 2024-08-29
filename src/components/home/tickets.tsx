import { useEffect } from 'react';
import TitoWidget from "@components/shared/TitoWidget"


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

    return <div className="m-0">
        <TitoWidget
            event="hacksocnottingham/hacknotts84"
        ></TitoWidget>
    </div>
}

export default Tickets;
export type { TicketsProps }