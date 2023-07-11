import HackNottsDecoratedPage from "@components/shared/HackNottsDecoratedPage";
import HackNottsSectionHeader from "@components/shared/HackNottsSectionHeader";
import { Container, Stack } from "react-bootstrap";
import FaqQA from "@components/faq/faqqa";

function FAQ() : JSX.Element {
    return <HackNottsDecoratedPage>
        <Container>
            <HackNottsSectionHeader
                title="Frequently Asked Questions"
                id="faq"
            />
            <Stack gap={3} className="mb-5">
                <FaqQA>
                    <FaqQA.Question>
                        Where is the link to the Discord Server!?
                    </FaqQA.Question>
                    <FaqQA.Answer>
                        The Discord server invite is sent out with the ticket confirmation. If you add your Discord tag (both username and discriminator e.g 'JoeBloggs#1234' <span className="fst-italic">or</span> just username e.g '@joebloggs) to the ticket then you will be automatically verified upon joining. Don't worry if you don't have Discord or don't want to join right away, because you can always verify yourself later on using your ticket reference if you change your mind :) Note: You must have a ticket to speak in the server due to the verification system.
                    </FaqQA.Answer>
                </FaqQA>
                <FaqQA>
                    <FaqQA.Question>
                        Who can attend?
                    </FaqQA.Question>
                    <FaqQA.Answer>
                        Anyone who is currently a student or has graduated from any university in the past year is welcome to attend, regardless of skill level or degree course.
                    </FaqQA.Answer>
                </FaqQA>
                <FaqQA>
                    <FaqQA.Question>
                        How do I get a ticket?
                    </FaqQA.Question>
                    <FaqQA.Answer>
                        Tickets are free, you can get one <a href="/#tickets">here</a>
                    </FaqQA.Answer>
                </FaqQA>
                <FaqQA>
                    <FaqQA.Question>
                        What can I do at HackNotts?
                    </FaqQA.Question>
                    <FaqQA.Answer>
                        The main event is a competition between hackers. However, there are loads of other activities to get involved with such as workshops hosted by sponsors and organisers alongside games. More can be found on the <a href="/about">About page</a>.
                    </FaqQA.Answer>
                </FaqQA>
                <FaqQA>
                    <FaqQA.Question>
                        Do I get free stuff?
                    </FaqQA.Question>
                    <FaqQA.Answer>
                        <span className="text-secondary fst-italic fw-bold">YES</span> you absolutely do get loads of free stuff. You'll get food throughout the event, swag and many stickers! Along with any prizes you may win! (yay!)
                    </FaqQA.Answer>
                </FaqQA>
                <FaqQA>
                    <FaqQA.Question>
                        How does the judging work?
                    </FaqQA.Question>
                    <FaqQA.Answer>
                        When you've finished your project submit it to Devpost and enter into as many categories that suit your project. A winner is selected for each prize category, either by ourselves or for our sponsored prizes, our sponsors. Each team will demonstrate their project after hacking ends to the judges. If you've never even heard of Devpost before, we will cover this during the hackathon and how to submit your project using the site.
                    </FaqQA.Answer>
                </FaqQA>
                <FaqQA>
                    <FaqQA.Question>
                        How large can my team be?
                    </FaqQA.Question>
                    <FaqQA.Answer>
                        Please note that we have limited prizes for each category, so we must limit the team sizes to a <span className="fw-bold text-secondary">maximum of 4</span>. If you don't have a team then don't panic, you can still participate on your own. If you want to find a team however, then closer to the time we will be opening our Discord server with a <span className="fw-bolder text-secondary">#find-a-team</span> channel where you can discuss preliminary ideas along with finding possible team mates.
                    </FaqQA.Answer>
                </FaqQA>
                <FaqQA>
                    <FaqQA.Question>
                        What if I don't know how to code?
                    </FaqQA.Question>
                    <FaqQA.Answer>
                        No worries, hackathons are a great place to get into coding. Almost everybody there will be happy to help you get started, especially if you join a team. We even have a beginners prize, so you won't just be up against people who've been coding for half their lives. Also, you could contribute to your team by doing non-coding things like graphics or music. They are a great place to learn new skills in quite a variety of areas, not just coding!
                    </FaqQA.Answer>
                </FaqQA>
                <FaqQA>
                    <FaqQA.Question>
                        How long do I have?
                    </FaqQA.Question>
                    <FaqQA.Answer>
                        You have 24 hours to make your project! You can only work on your project during this time frame. You can find out more here.
                    </FaqQA.Answer>
                </FaqQA>
                <FaqQA>
                    <FaqQA.Question>
                        I don't want to be a hacker, how can I help out?
                    </FaqQA.Question>
                    <FaqQA.Answer>
                        See the volunteering section on the <a href="/about#volunteering">About page</a> for more information!
                    </FaqQA.Answer>
                </FaqQA>
                <FaqQA>
                    <FaqQA.Question>
                        How do I get there?
                    </FaqQA.Question>
                    <FaqQA.Answer>
                        We recommend using public transport wherever possible as there is limited parking on campus so we cannot guarantee a spot. There will be more information on travel in the Discord server.
                    </FaqQA.Answer>
                </FaqQA>
                <FaqQA>
                    <FaqQA.Question>
                        I still have questions!
                    </FaqQA.Question>
                    <FaqQA.Answer>
                        Have a read through the <a href="/">Home</a> and <a href="/about">About</a> page just in case it has been mentioned there, if not then feel free to email us or get in touch on Discord when the server is live! Invitations to the server will be emailed to you with your ticket confirmation.
                    </FaqQA.Answer>
                </FaqQA>
            </Stack>
        </Container>
    </HackNottsDecoratedPage>
}

export default FAQ;