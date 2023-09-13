const teamSwitch = document.getElementById("switch");
const teamSection = document.getElementById("teams");

let currentTeam = 1;

teamSwitch.addEventListener("click", () => {
    if (currentTeam == 1)
    {
        teamSection.style.transform = "translate(-48.5%, 0)";
        teamSwitch.style.backgroundColor = "var(--bg-color-dark)"
        currentTeam = 2;
    }
    else if (currentTeam == 2)
    {
        teamSection.style.transform = "translate(0, 0)";
        teamSwitch.style.backgroundColor = "var(--bg-color-light)"
        currentTeam = 1;
    }
})