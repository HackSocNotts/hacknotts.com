
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
    "WIZARDS vs DRAGONS",
    "CASTLE BUILDING",
    "CHESS",
    "WEREWOLF",
    "CUP STACKING",
    "KARAOKE"
]
const activityParagraphs = [
    /* HNTV */ "HNTV is a 24hr stream that runs throughout our event. We broadcast the entire event and cover a range of content, including hacker interviews, commentary, games, and (some) shitposting. We also use the stream to broadcast any important announcements, keeping you updated throughout the event!",
    /* Wizards vs Dragons */ "New to HackNotts this year, we will be running a friendly competition between our hackers. Each team can earn gold coins by completing quick challenges (or impressing one of our organisers with something funny!) - these coins will go in your teams chest, and by the end of the Hackathon, the winning team will receive an extra special piece of merch to take home! ",
    /* Castle Building */ "What do you get when you combine marshmallows with spaghetti? An architectural masterpiece? That is for you to decide! This year at HackNotts we are debuting castle building! Work alone or in a team, patience and a keen eye is essential for this challenge.",
    /* Chess */ "Chess connoisseur? Complete beginner? Join our Chess tournament to test out your chess skills or improve your game - and make it to the top to win a special prize!",
    /* Werewolf */ "Werewolf is held every HackNotts just after midnight - this year with a medival twist! It is a game filled with befuddlement and betrayal - even if you haven't played Werewolf before, you will have played games like Mafia and Among Us - so why not give that a go in real life?",
    /* Cup Stacking */ "A Hackathons UK classic - cup stacking is an event held every year where you can show off your skills. Can you build the tallest tower and be crowned the HackNotts cupstaking champion, or will it all come falling down?",
    /* Karaoke */ "We are bringing back our karaoke room! Take some time off from your coding to sing along to your favourite tunes, open to all! We are looking forward to seeing any performances, bonus points for dragging the rest of your team along!"
]

var currentActivitySelected = -1;

for(let i = 0; i < activityButtons.length; i++)
    activityButtons[i].addEventListener("click", () => selectActivity(i));

var activityShowing = false;
// ============================================================================

// ============================= ABOUT SECTION =============================

const aboutContent = document.querySelector(".about-contents");
const aboutContentChildren = aboutContent.children;
for(let i = 0; i < aboutContentChildren.length; i += 2)
{
    console.log("bingus");
    aboutContentChildren[i].addEventListener("click", () => toggleDropdown(aboutContentChildren[i + 1]));
}

// =========================================================================


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
