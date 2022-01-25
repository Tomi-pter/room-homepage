const btn = document.querySelectorAll("button");
const head1 = document.querySelector("aside>h1");
const para = document.querySelector("aside>p");
const headerFrame = document.querySelector(".header");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const hImg = document.querySelector(".header>img");
const page = document.querySelector("html");
const closeBtn = document.querySelector(".close");
const main = document.querySelector("main");
const dimmer = document.querySelector(".dim");

const btnArr = Array.from(btn);

const slides = [{
        src: "images/desktop-image-hero-1.jpg",
        firstH: "Discover innovative ways to decorate",
        text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        id: "0",
    },
    {
        src: "images/desktop-image-hero-2.jpg",
        firstH: "We are available all across the globe",
        text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        id: "1",
    },
    {
        src: "images/desktop-image-hero-3.jpg",
        firstH: "Manufactured with the best materials",
        text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        id: "2",
    },
];

btnArr[0].addEventListener("click", prevSlide);
btnArr[1].addEventListener("click", nextSlide);

hamburger.addEventListener("click", () => {
    nav.classList.add("clicked");
    dimmer.classList.add("clicked");
    main.classList.add("clicked");
});

closeBtn.addEventListener("click", () => {
    nav.classList.remove("clicked");
    dimmer.classList.remove("clicked");
    main.classList.remove("clicked");
});

function prevSlide() {
    let i = +headerFrame.id;
    let newI = i;
    console.log(i);

    if (newI < 1) {
        i = 3;
        newI = i;
    }
    i--;

    headerFrame.id = i;
    head1.textContent = slides[i].firstH;
    para.textContent = slides[i].text;
    headerFrame.setAttribute("class", `header head${i}`);
    console.log(headerFrame.classList);
    console.log(i);

    //if (headerFrame.classList.contains(`head${2}`)) {
    //    head1.textContent = slides[1].firstH;
    //    para.textContent = slides[1].text;
    //    headerFrame.classList.add(`head${1}`);
    //    headerFrame.classList.remove(`head${2}`);
    //    console.log(headerFrame.classList);
    //} else if (headerFrame.classList.contains(`head${1}`)) {
    //    head1.textContent = slides[0].firstH;
    //    para.textContent = slides[0].text;
    //    headerFrame.classList.add(`head${0}`);
    //    headerFrame.classList.remove(`head${1}`);
    //    console.log(headerFrame.classList);
    //} else if (headerFrame.classList.contains(`head${0}`)) {
    //    head1.textContent = slides[2].firstH;
    //    para.textContent = slides[2].text;
    //    headerFrame.classList.add(`head${2}`);
    //    headerFrame.classList.remove(`head${0}`);
    //    console.log(headerFrame.classList);
    //}
}

function nextSlide() {
    let i = +headerFrame.id;
    let newI = i;
    console.log(i);

    if (newI > 1) {
        i = -1;
        newI = i;
    }
    i++;

    headerFrame.id = i;
    head1.textContent = slides[i].firstH;
    para.textContent = slides[i].text;
    headerFrame.setAttribute("class", `header head${i}`);
    console.log(headerFrame.classList);
    console.log(i);

    //if (headerFrame.classList.contains(`head${0}`)) {
    //    head1.textContent = slides[1].firstH;
    //    para.textContent = slides[1].text;
    //    headerFrame.classList.add(`head${1}`);
    //    headerFrame.classList.remove(`head${0}`);
    //    console.log(headerFrame.classList);
    //} else if (headerFrame.classList.contains(`head${1}`)) {
    //    head1.textContent = slides[2].firstH;
    //    para.textContent = slides[2].text;
    //    headerFrame.classList.add(`head${2}`);
    //    headerFrame.classList.remove(`head${1}`);
    //    console.log(headerFrame.classList);
    //} else if (headerFrame.classList.contains(`head${2}`)) {
    //    head1.textContent = slides[0].firstH;
    //    para.textContent = slides[0].text;
    //    headerFrame.classList.add(`head${0}`);
    //    headerFrame.classList.remove(`head${2}`);
    //    console.log(headerFrame.classList);
    //}
}