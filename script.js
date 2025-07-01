const contentsButton = document.querySelector(".contents-button");
const contentsMenu = document.querySelector(".contents-menu");

const upButton = document.querySelector(".up-button");

contentsButton.addEventListener("click", showContents);
upButton.addEventListener("click", goUp);

var isShowing = false;

function showContents()
{
    if(!isShowing)
        contentsMenu.classList.add("active");
    else
        contentsMenu.classList.remove("active");

    isShowing = !isShowing;
}

function goUp()
{
    scrollTo(0,0);
}