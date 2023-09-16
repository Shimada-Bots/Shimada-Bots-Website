const teamSwitch = document.getElementById("switch");
const teamSection = document.getElementById("teams");
const aLine1 = document.getElementById("line1");
const aLine2 = document.getElementById("line2");

let currentTeam = 1;

teamSwitch.addEventListener("click", () => {
    if (currentTeam == 1)
    {
        teamSection.style.transform = "translate(-48.5%, 0)";
        teamSwitch.style.backgroundColor = "var(--bg-color-dark)";
        aLine1.style.backgroundColor = "var(--bg-color-light)";
        aLine2.style.backgroundColor = "var(--bg-color-light)";
        aLine1.style.transform = "rotate(360deg)";
        aLine2.style.transform = "rotate(180deg)";
        currentTeam = 2;
    }
    else if (currentTeam == 2)
    {
        teamSection.style.transform = "translate(0, 0)";
        teamSwitch.style.backgroundColor = "var(--bg-color-light)";
        aLine1.style.backgroundColor = "var(--bg-color-dark)";
        aLine2.style.backgroundColor = "var(--bg-color-dark)";
        aLine1.style.transform = "rotate(90deg)";
        aLine2.style.transform = "rotate(-360deg)";
        currentTeam = 1;
    }
})