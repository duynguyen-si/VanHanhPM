var loading = document.querySelector(".loading");
window.addEventListener("load", vanish);

function vanish() {
    loading.classList.add("disppear");
}