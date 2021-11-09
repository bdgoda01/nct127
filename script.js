let imgCard = document.querySelectorAll(".img-card");

imgCard.forEach(item => {
    item.addEventListener("click", () => {
        if(item.classList.contains("img-card-transform")){
            item.classList.remove("img-card-transform");
        } else {
            item.classList.add("img-card-transform")
        }
    })
});