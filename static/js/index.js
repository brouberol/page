const detailsElement = document.querySelector('#resume-see-more');
const summaryElement = document.querySelector("#resume-summary");

detailsElement.addEventListener('toggle', event => {
    if (event.target.open) {
        summaryElement.textContent = "See less";
    } else {
        summaryElement.textContent = "See more";
    }
});