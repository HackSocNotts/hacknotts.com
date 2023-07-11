import HackNottsDecoratedPage from "@components/shared/HackNottsDecoratedPage";
import HackNottsSectionHeader from "@components/shared/HackNottsSectionHeader";
import { Container, Figure, Stack } from "react-bootstrap";
import volunteeers from "@assets/volunteers.jpg"

function About() : JSX.Element {
    return <HackNottsDecoratedPage>
        <Stack gap={3} className="mb-3">
            <Container>
                <HackNottsSectionHeader
                    title="What is HackNotts?"
                    id="what"
                />
                <div>
                    <p>HackNotts is an annual <a href="https://en.wikipedia.org/wiki/Hackathon" target="_blank">hackathon</a> hosted by <a href="https://hacksocnotts.co.uk/" target="_blank">HackSoc</a> at the University of Nottingham. It's a two-day overnight hackathon for all skill levels taking place on February 11<sup>th</sup> and 12<sup>th</sup> 2023.</p>
                    <p>This is a great opportunity to connect with like-minded people and discuss new ideas and projects. Teams are not mandatory, as said previously. There will be loads of opportunities to find one though, including a team building workshop on the day along with the <b>#find-a-team</b> Discord channel. Aside from the hacking, workshops and food, there will also be games and other events to keep you entertained.</p>
                    <p>There will be numerous workshops during the event with a variety of topics, from hardware to software and life skills. There will be something for everyone! All meals and drinks will be provided for free including lunch on both days with dinner on the 11<sup>th</sup> and breakfast on the 12<sup>th</sup>. Feel free to bring anything else as well to keep you going, just please be thoughtful of any possible allergic reactions people could have to certain foods (ie nut allergies).</p>
                </div>
            </Container>
            <Container>
                <HackNottsSectionHeader
                    title="What project can I do?"
                    id="projects"
                />
                <div>
                    <p>There aren't really any rules as to what you can or cannot make (within reason). The only requirement is that it has to be done in the 24 hour period. You can of course re-use old code or libraries, but the bulk of your project needs to be done during the Hackathon.</p>
                    <p>If you do choose something hardware related please bare in mind that we cannot allow soldering due to lack of ventilation, but you can always use breadboards. We may be able to provide some generic components, let us know if you plan on doing hardware when ordering your ticket and we will try to accommodate.</p>
                    <p>Don't be put off if you are just starting out with programming or if this is your first hackathon because we have some categories specifically for beginners. A hackathon is not just about winning (although that is always good), but you can learn about some new API's and coding practices along with a multitude of other skills for your CV and future career.</p>
                    <p>Some incredible projects have been produced over the past 9 years and we are certain that this year will not be any different. If you would like to see some projects from the previous HackNotts for possible inspiration, then they can be found on <a href="https://devpost.com/hackathons?search=hacknotts" target="_blank">Devpost</a> with the latest 2023 HackNotts found <a href="https://hn23.devpost.com/project-gallery" target="_blank">here</a>.</p>
                </div>
            </Container>
            <Container>
                <HackNottsSectionHeader
                    title="Where is HackNotts?"
                    id="where"
                />
                <div>
                    <p>HackNotts is hosted at the University of Nottingham and will take place in the Computer Science building on <a href="https://www.nottingham.ac.uk/about/visitorinformation/mapsanddirections/jubileecampus.aspx">Jubilee Campus</a>. More information about directions and travel arrangements can be found in the Discord server.</p>
                    <div className="d-flex flex-column align-items-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1201.8687271487627!2d-1.187196!3d52.953147!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c209bfffffff%3A0xaf426646771a25ac!2sSchool%20of%20Computer%20Science!5e0!3m2!1sen!2suk!4v1687441425435!5m2!1sen!2suk" width="600" height="450" style={{border:0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </Container>
            <Container>
                <HackNottsSectionHeader
                    title="Discord Server"
                    id="discord"
                />
                <div>
                    <p>
                        The invite link will be sent out with your ticket comfirmation! You can discuss travel arrangements, any questions you may have and anything else HackNotts related there :).
                    </p>
                    <p>
                        This will also be one of our main methods to communicate, and important announcements will be made there along with directions to campus and much more. So please join to stay up to date.
                    </p>
                </div>
            </Container>
            <Container>
                <HackNottsSectionHeader
                    title="Volunteering"
                    id="volunteering"
                />
                <div>
                    <p>
                        Been to a hackathon before? Well of course you are welcome to participate again, but without the volunteers we would not be able to host a hackathon. We generally don't encourage volunteering if you have never been to a hackathon before as it is useful to know how a hackathon works beforehand.
                    </p>
                    <h3>What does it involve?</h3>
                    <p>
                        Volunteering will involve helping run the hackathon on the day alongside the organisers, chaperoning people around the building(s) and generally lending a hand. You'll still get all the free food and drinks alongside the hackers, but you'll also get a free t-shirt (always a bonus) ;-)
                    </p>
                    <p>
                        Please be aware that as a volunteer you are unable to submit anything for HackNotts '23. You can always work on a project, but it cannot be submitted for judging. If you have any questions about volunteering then please contact us via email or on the Discord server (invitations sent when ordering a ticket). You will still have to get a, but it will be a volunteering ticket. Please double check before ordering what ticket you have.
                    </p>
                    <p>
                        Volunteering is a great opportunity to build on many skills such as leadership, mentoring and communication. These are all great qualities to have for your career and your important CV.
                    </p>
                    <h3>Conclusion</h3>
                    <p>
                        Each year we receive so much positive feedback from our volunteers, hackers and sponsors. We hope that this year is no different. We look forward to seeing all of you in February 2023! Until then, if you have any questions then you can email us or use the Discord server. Thank you!
                    </p>
                    <Figure>
                        <Figure.Image src={volunteeers}/>
                        <Figure.Caption className="text-center">The Organisers and Volunteers at the end of HackNotts '23</Figure.Caption>
                    </Figure>
                </div>
            </Container>
        </Stack>
    </HackNottsDecoratedPage>
}

export default About;