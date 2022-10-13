// Notice the return type is void here
function buildPage() {
    // This is the message that can be altered
    var message = getMessage();
    var messageHeading = document.createElement("h1");
    messageHeading.innerText = message;
    document.querySelector("body").appendChild(messageHeading);
    document.querySelector("h1").addEventListener("click", playAnimation);
}
// provides the message to be displayed
function getMessage() {
    var value = "Hello World!";
    return value;
}
// Makes the page interactive
function playAnimation() {
    document.querySelector("h1").style.float = "right";
    // Example of a timeout to delay for animation
    setTimeout(function () {
        document.querySelector("h1").style.float = "left";
    }, 500);
}
export { buildPage, getMessage };
//# sourceMappingURL=template.js.map