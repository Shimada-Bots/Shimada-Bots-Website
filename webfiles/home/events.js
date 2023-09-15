import JSON from "/Shimada-Bots-Website/assets/events.json" assert {type: "json"}

const eventsContainer = document.getElementById("events-container")
eventsContainer.innerHtml = ""
JSON.events.forEach(event => {
    eventsContainer.innerHTML += "<div class=\"card event-card\">" +
        "    <div class=\"event-image-box\">" +
        "    </div>" +
        "    <div class=\"event-desc-box\">" +
        "        <h4 style=\"color: #333333; font-weight: bold\">" + event.name +  "</h5>" +
        "        <h5 style=\"color: #333333; font-weight: bold\">" + event.date +  "</h5>" +
        "        <p style=\"color: #333333; font-weight: bold\">" + event.description + "</p>" +
        "    </div>" +
        "</div>"
})