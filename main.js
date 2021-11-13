const ctaBtn = document.querySelector(".cta-btn");
const ctaBookmark = document.querySelector(".cta-bookmark");
const slide = document.querySelector(".slide");
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

const modal = document.querySelector(".modal-overlay");
const modalClose = document.querySelector(".close-btn");


ctaBtn.addEventListener("click", ()=>{
    modal.classList.add("show");
});
modalClose.addEventListener("click", ()=>{
    modal.classList.remove("show");
})

const pledgeTitles = document.querySelectorAll(".pledge-title");
const pledgeContribute = document.querySelector(".pledge-contribute");
pledgeTitles.forEach(title =>{
    title.addEventListener("click", (e)=>{
        // if(e.target.classList.contains("show")){
        //     e.target.classList.remove("show");
        // }
        // else{
        //     e.target.classList.add("show");
        // }
pledgeContribute.classList.toggle("show");
    })
})

