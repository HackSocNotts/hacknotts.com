
// ============================= CONTENTS =============================
const contentsButton = document.querySelector(".contents-button");
const contentsMenu = document.querySelector(".contents-menu");

contentsButton.addEventListener("click", () => toggleDropdown(contentsMenu));
// ====================================================================


// ========================== UP BUTTON ==========================
const upButton = document.querySelector(".up-button");
upButton.addEventListener("click", () => scrollTo(0, 0));
// ===============================================================


// ============================= ACTIVITY SECTION =============================
const activityButtons = (document.querySelectorAll(".activity-sidebar-button"))
const activityContent = document.querySelector(".activity-content");
const activityContentHeader = activityContent.children[0];
const activityContentText = activityContent.children[1];

const activityTitles = [
    "HNTV",
    "GAMING LEAGUE",
    "KARAOKE",
    "CUP STACKING",
    "WEREWOLF",
    "CHESS",
    "POKER"
]
const activityParagraphs = [
    /* HNTV */ "HNTV is our 24hr stream that runs throughout the event, keeping you company as you work. We broadcast the entire event and cover a range of content, including midnight shitposting, Hacker interviews, game commentary and more! We also put important announcements up on the screens using the stream, enabling us to keep you updated throught the event!",
    /* Gaming League */ "New this year, we are running a Gaming League! A tournament style competition where the winning team will earn themselves a tasty prize! Grab a ticket to join our Discord server and help us decide on a game! Current games being considered are Valorant, CS2, League etc.",
    /* Karaoke */ "New this year, we're debuting a Karaoke room! Take some time off from your coding to sing along to your favourite tunes, open to all! The current plans for the room are to include mood lighting, mics and a projector screen for you to jam out.",
    /* Cup Stacking */ "HackNott's cup stacking is an event held every year where you can show off your cup stacking skills. Want to compete to build the tallest tower or simply learn more about cup stacking? HackNotts is for you!",
    /* Werewolf */ "Werewolf is held every HackNotts just after midnight, and is a game consisting of befuddlement and betrayal. Even if you haven't playe Werewolf before, you would have played other games similar like Among Us, Mafia or Town of Salem - feel free to try it out!",
    /* Chess */ "Chess connoisseur? Complete beginner? Join our Chess tournament to test out your chess skills or improve your game! Consisting of multiple rounds with the first being on Chess.com and the following rounds being physical, make it to the top to win our Chess prize!",
    /* Poker */ "New for 2024, Poker! Enjoy casual games (no real money) and defeat your fellow hackers to become HackNotts's best poker player!"
]

var currentActivitySelected = -1;

for(let i = 0; i < activityButtons.length; i++)
    activityButtons[i].addEventListener("click", () => selectActivity(i));

var activityShowing = false;
// ============================================================================


// ============================= FAQs SECTION =============================
const faqsContent = document.querySelector(".faqs-content");
const faqsChildren = faqsContent.children;

for(let i = 0; i < faqsChildren.length; i += 2)
    faqsChildren[i].addEventListener("click", () => toggleDropdown(faqsChildren[i + 1]));
// ========================================================================

function toggleDropdown(element)
{
    element.classList.toggle("active");
}

function selectActivity(buttonIndex)
{
    if(!(buttonIndex == currentActivitySelected))
    {
        // for animating out
        activityContent.classList.remove("active");
        activityContent.classList.remove("starter");
        
        currentActivitySelected = buttonIndex;
        // 200ms delay before we change content and reactivate to animate back in
        setTimeout(() => switchActivity(buttonIndex), 200);
    }
}

function switchActivity(buttonIndex)
{
    activityContentHeader.innerHTML = activityTitles[buttonIndex];
    activityContentText.innerHTML = activityParagraphs[buttonIndex];

    activityContent.classList.add("active");
}
