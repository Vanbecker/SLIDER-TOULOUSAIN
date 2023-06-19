const slidesData = [
    { title: "VILLAGE", description: "Lorem ipsum dolor sit amet" },
    { title: "VIGNE", description: "Consectetur adipiscing elit" },
    { title: "CHAMPS", description: "Sed do eiusmod tempor incididunt" },
]

const btns = document.querySelectorAll('.slider-btn');
const imgs = document.querySelectorAll(".slider-img");
const dots = document.querySelectorAll(".dot")
const title = document.querySelector("slider-title")
constlegend = document.querySelector('.slider-legend')

let slideIndex = 0;



btns.forEach((el, index) => {
    el.indexBtn = index;
    el.addEventListener('click', onClickBtn)
    // el.addEventListener("mouedown", onDownBtn);
    // el.addEventListener("mouseup", onDownBtn);
});

dots.forEach((dot, index) => {
    dot.indexPosition = index
    dot.addEventListener('click', onClickDot)
})

init()

function onClickDot(e) {
    // console.log(e.currentTarget.indexPosition)
    slideIndex = e.currentTarget.indexPosition
    ddd()
}

function onDownBtn(e) {
    console.log('down')
}

function onDownBtn(e) {
    console.log('up')
}

function ddd() {
    btns[0].style.opacity = btns[1].style.opacity = 1
    btns[0].style.pointerEvents = btns[1].style.pointerEvents = 'auto'

    if (slideIndex <= 0) {
        slideIndex = 0;
        btns[0].style.opacity = 0.5
        btns[0].style.pointerEvents = 'none'
    } else if (slideIndex >= slidesData.length - 1) {
        slideIndex = slidesData.length - 1;
        btns[1].style.opacity = 0.5
        btns[1].style.pointerEvents = 'none'
    }

    displayImages(slideIndex)
}

function onClickBtn(e) {
    if (e.currentTarget.indexBtn === 0) {
        slideIndex--;
    } else {
        slideIndex++;
    }

    ddd()

}

function displayImages(slideI) {
    console.log(slideI);
    imgs.forEach((img, indexImg) => {
        img.style.transition = 'transform 3s'
        img.style.transform = `translateX(${(indexImg - slideI) * 100}%)`
    })
}

function init() {
    slideIndex = 0;
    dots[0].style.opacity = 1
    btns[0].style.opacity = 0.5
    btns[0].style.pointerEvents = 'none'
    imgs.forEach((img, indexImg) => {
        img.style.transform = `translateX(${(indexImg - slideIndex) * 100}%)`
    })
}





///////////////////////

// MON WORK

// const slidesData = [
//     { title: "VILLAGE", description: "Lorem ipsum dolor sit amet" },
//     { title: "VIGNE", description: "Consectetur adipiscing elit" },
//     { title: "CHAMPS", description: "Sed do eiusmod tempor incididunt" },
// ];

// const btns = document.querySelectorAll('.slider-btn');
// let slideIndex = 0;

// btns.forEach((btn, index) => {
//     btn.indexBtn = index;
//     btn.addEventListener('click', onClickBtn);
// });

// function onClickBtn(e) {
//     if (e.currentTarget.indexBtn === 0) {
//         slideIndex--;
//         if (slideIndex < 0) {
//             slideIndex = slidesData.length - 1;
//         }
//     } else {
//         slideIndex++;
//         if (slideIndex > slidesData.length - 1) {
//             slideIndex = 0;
//         }
//     }

//     console.log(slideIndex);
//     const currentSlide = slidesData[slideIndex];
//     console.log(currentSlide.title);
//     console.log(currentSlide.description);
// }
