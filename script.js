let imgCard = document.querySelectorAll(".img-card");

imgCard.forEach(item => {
    item.addEventListener("click", () => {
        if(item.classList.contains("img-card-transform")){
            item.classList.remove("img-card-transform");
        } else {
            item.classList.add("img-card-transform")
        }

        // item.style.transform = "rotateY(180deg)";
        // item.classList.add("img-card-transform")
    })
});


// imgCard.onclick = function(){
//     imgCard.classList.add("img-card-transform");
// }

// for(var i = 0; i < imgCard.length; i++){
//     imgCard[i].classList.add("img-card-transform");
// }
