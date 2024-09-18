// Hamburger menu 

const hamburgerMenuContainerTag = document.querySelector(".hamburgerMenuContainer");
const overLayMenuTag = document.querySelector(".overLayMenu");
const line1Tag = document.querySelector(".lineOne");
const line2Tag = document.querySelector(".lineTwo");
const line3Tag = document.querySelector(".lineThree");
const overlayLiTag = document.querySelector(".overlayLi");

hamburgerMenuContainerTag.onclick = function() {
    if(hamburgerMenuContainerTag.classList.contains("isOpened")) {
        overLayMenuTag.classList.remove("show");
        line1Tag.classList.remove("rotatePlus45deg");
        line2Tag.classList.remove("hideLineTwo");
        line3Tag.classList.remove("rotateMinus45deg");
    
        hamburgerMenuContainerTag.classList.remove("isOpened");
    } else {
        overLayMenuTag.classList.add("show");
        line1Tag.classList.add("rotatePlus45deg");
        line2Tag.classList.add("hideLineTwo");
        line3Tag.classList.add("rotateMinus45deg");
    
        hamburgerMenuContainerTag.classList.add("isOpened");
    }   
}

overlayLiTag.onclick = function() {
    overLayMenuTag.classList.remove("show");
    line1Tag.classList.remove("rotatePlus45deg");
    line2Tag.classList.remove("hideLineTwo");
    line3Tag.classList.remove("rotateMinus45deg");

    hamburgerMenuContainerTag.classList.remove("isOpened");
}

// Hamburger menu

// Case studies route

// route function

function navigate(clickId, url) {
    document.querySelector(clickId).addEventListener("click", function() {
        window.location.href = url;
    })
};

