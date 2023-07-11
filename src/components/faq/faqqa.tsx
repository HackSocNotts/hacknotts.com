import { Container } from "react-bootstrap"

interface FaqQAQuestionType extends JSX.Element {}
interface FaqQAAnswerType extends JSX.Element {}

interface FaqQAProps {
    children: [FaqQAQuestionType, FaqQAAnswerType]
}

interface FaqQAQuestionProps {
    children: JSX.Element | string | (JSX.Element | string)[]
}

interface FaqQAAnswerProps {
    children: JSX.Element | string | (JSX.Element | string)[]
}

function FaqQABase(props: FaqQAProps) : JSX.Element {
    return <Container>
        {props.children}
    </Container>
}

function FaqQAQuestion(props: FaqQAQuestionProps) : FaqQAQuestionType {
    let resolvedChild : JSX.Element | JSX.Element[];

    if((resolvedChild = props.children as JSX.Element | JSX.Element[]) === undefined) {
        resolvedChild = <p>{props.children}</p>
    }

    return <h3 className="fst-italic">{resolvedChild}</h3>
}

function FaqQAAnswer(props: FaqQAAnswerProps) : FaqQAAnswerType {
    return <div>{props.children}</div>
}


const FaqQA = Object.assign(
    FaqQABase,
    {
        Question: FaqQAQuestion,
        Answer: FaqQAAnswer
    }
)

export default FaqQA;
export type { FaqQAProps, FaqQAQuestionProps, FaqQAAnswerProps }