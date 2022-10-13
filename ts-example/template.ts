// Notice the return type is void here
function buildPage() :void{
    // This is the message that can be altered
    let message:string = getMessage();

    let messageHeading:HTMLHeadingElement = document.createElement("h1");
    messageHeading.innerText = message;
    document.querySelector("body").appendChild(messageHeading);
    document.querySelector("h1").addEventListener("click", playAnimation);
}

// provides the message to be displayed
function getMessage() :string{
    let value:string = "Hello World!";
    return value;
}

// Makes the page interactive
function playAnimation() :void{
    document.querySelector("h1").style.float = "right";
    // Example of a timeout to delay for animation
    setTimeout(function() :void{
        document.querySelector("h1").style.float = "left";
    }, 500);
}

export{buildPage, getMessage};