import JSON from "/assets/events.json" assert {type: "json"}

const eventsContainer = document.getElementById("events-container")
eventsContainer.innerHtml = ""
JSON.events.forEach(event => {
    eventsContainer.innerHTML += "<div class=\"card event-card\">" +
        "    <div class=\"event-image-box\">" +
        "    </div>" +
        "    <div class=\"event-desc-box\">" +
        "        <h1 style=\"color: #333333; font-weight: bold\">" + event.name +  "</h1>" +
        "        <h1 style=\"color: #333333; font-weight: bold\">" + event.date +  "</h1>" +
        "        <p style=\"color: #333333;\">" + event.description + "</p>" +
        "    </div>" +
        "</div>"
})