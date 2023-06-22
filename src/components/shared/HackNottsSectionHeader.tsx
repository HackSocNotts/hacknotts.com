interface HackNottsSectionHeaderProps {
    id?: string
    title: string
}

function HackNottsSectionHeader(props: HackNottsSectionHeaderProps): JSX.Element {
    return <div className="border-dark my-3" style={{border: "4px solid", borderRadius: 16}}>
        <h1 id={props.id} className="m-3 text-dark text-center text-uppercase">{props.title}</h1>
    </div>
}

export default HackNottsSectionHeader
export type { HackNottsSectionHeaderProps }