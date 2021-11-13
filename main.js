const ctaBtn = document.querySelector(".cta-btn");
const ctaBookmark = document.querySelector(".cta-bookmark");
const slide = document.querySelector(".slide");
const successModal = document.querySelector(".success-modal");
const successModalBtn = document.querySelector(".success-modal-box-btn");

ctaBookmark.addEventListener("click", ()=>{
    if(ctaBookmark.classList.contains("show")){
        ctaBookmark.classList.remove("show");
        slide.textContent = "Bookmark";
    }
    else{
        ctaBookmark.classList.add("show");
        slide.textContent = "Bookmarked";
    }
});

ctaBtn.addEventListener("click", ()=>{
    successModal.classList.add("show")
});

successModalBtn.addEventListener("click", ()=>{
    modal.classList.add("show");
    successModal.classList.remove("show")
});


const buttons = document.querySelectorAll(".button");
const modal = document.querySelector(".modal-overlay");
const modalClose = document.querySelector(".close-btn");

buttons.forEach(Btn =>{
Btn.addEventListener("click", ()=>{
    modal.classList.add("show");
})
})

modalClose.addEventListener("click", ()=>{
    modal.classList.remove("show");
})

const pledgeTitles = document.querySelectorAll(".pledge-title");
const pledgeContribute = document.querySelector(".pledge-contribute");

pledgeTitles.forEach(title =>{
    title.addEventListener("click", (e)=>{  
      const pledge = e.currentTarget.parentElement;
        pledge.classList.toggle("show")
    })
});


const menuBtn = document.querySelector(".menu-btn");
const header = document.querySelector('.header')

menuBtn.addEventListener("click", toggleMenu);
function toggleMenu(){
    menuBtn.classList.toggle("show");
    header.classList.toggle("show");

}
