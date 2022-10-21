let rev = document.getElementById("r");

function addReview(name, text) {
    rev.innerHTML += `
    <div class="reviews_card"> 
        <div class="photo""></div> 
        <div class="name">${name}</div> 
        <div class="rev">${text}</div> 
    </div>
    `;
}