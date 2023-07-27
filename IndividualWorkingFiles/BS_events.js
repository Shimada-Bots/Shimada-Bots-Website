import JSON from "./events.json" assert {type: "json"}

const eventsContainer = document.getElementsByClassName("events-container")

JSON.events.forEach(event => {
    console.log(event)
    eventsContainer.innerHtml += '<div class=\"card event-card\">\n' +
        '<div class=\"event-image-box\">\n' +
        '</div>\n' +
        '    <div class=\"event-desc-box\">\n' +
        '        <h1 style=\"color: #333333; font-weight: bold\">' + event.name +  '</h1>\n' +
        '        <h1 style=\"color: #333333; font-weight: bold\">' + event.date +  '</h1>\n' +
        '        <p style=\"color: #333333;\">' + event.description + '<us></us></p>\n' +
        '    </div>\n' +
        '</div>'
})