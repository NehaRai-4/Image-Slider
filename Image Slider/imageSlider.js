const slides = document.querySelector(".slides");
const containerDots = document.querySelector(".container-dots");

// Global Index to track Image
var slideIndex = 1;

// Images container
const images = [
  { src: "https://rb.gy/ohx0bd" },
  { src: "https://rb.gy/gggxy8" },
  { src: "https://rb.gy/z2a0fy" },
  { src: "https://rb.gy/nsefjh" },
  { src: "https://rb.gy/dssu2a" }
];

images.map((img)=>{
var imgTag=document.createElement("img");
imgTag.src=img.src;

var dot=document.createElement("div");
dot.classList.add("dot");

slides.appendChild(imgTag);
containerDots.appendChild(dot);
});

// Adding EventListener to All dots so that when user click on it trigger move dots;
const dots = containerDots.querySelectorAll("*").forEach((dot, index) => {
    dot.addEventListener("click", () => {
      moveDot(index + 1);
    });
  });

  // It helps to move the dot, it take "index" as parameter and update the slideIndex
function moveDot(index) {
    slideIndex = index;
    updateImageAndDot();
  }

  // Update Image And Slide Dot according to the [data-active]
function updateImageAndDot() {
    /* ...........Updating Image.............. */
    const activeSlide = slides.querySelector("[data-active]");
    slides.children[slideIndex - 1].dataset.active = true;
    activeSlide && delete activeSlide.dataset.active;
  
    /* ...........Updating Dots.............. */
    const activeDot = containerDots.querySelector("[data-active]");
    containerDots.children[slideIndex - 1].dataset.active = true;
    activeDot && delete activeDot.dataset.active;
  }

// Slide Next Button Click Event
const nextSlide=()=>{
    if(slideIndex!=images.length)
    {
        ++slideIndex;
    }
    else if(slideIndex===images.length){
        slideIndex=1;
    }
    updateImageAndDot();
};

const nextbtn=document.querySelector(".next");
nextbtn.onclick=nextSlide;

// Slide Previous Button Click Event
const prevSlide=()=>{
    if(slideIndex!=1)
    {
        --slideIndex;
    }
    else if(slideIndex===1){
        slideIndex=images.length;
    }
    updateImageAndDot();
};

const prevbtn=document.querySelector(".prev");
prevbtn.onclick=prevSlide;


  // Show the Image as the page loads;
updateImageAndDot();