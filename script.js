let scrollContainer = document.querySelector(".gallery")
let backBtn = document.querySelector("#backBtn")
let nextBtn = document.querySelector("#nextBtn")
const scrollAmount = scrollContainer.clientWidth; // Responsive scroll amount
var flag = 0, flag1 = 0
const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto"
})

nextBtn.addEventListener("click", () => {
    if (flag == 1) {
        scrollContainer.scrollLeft = 0; // Scroll back to the first image
        flag = 0
    }
    else {
        scrollContainer.style.scrollBehavior = "smooth"
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        scrollContainer.scrollLeft = Math.min(scrollContainer.scrollLeft + scrollAmount, maxScrollLeft);
        flag = 1
    }

})
backBtn.addEventListener("click", () => {
    if (flag1 == 1) {
        scrollContainer.scrollLeft = maxScrollLeft; // Scroll to the last image
        
        flag1 = 0
    }
    else {
        scrollContainer.style.scrollBehavior = "smooth"
        scrollContainer.scrollLeft = Math.max(scrollContainer.scrollLeft - scrollAmount, 0);
        
        flag1=1
    }
})