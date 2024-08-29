import React from "react";

interface TitoWidgetProps {
    event: String;
}

function TitoWidget(props: TitoWidgetProps) : JSX.Element {
    // JSX does not like custom HTML tags
    return React.createElement("tito-widget", props);
}

export default TitoWidget;
export type { TitoWidgetProps };