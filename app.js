const navItems = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        const pageName = item.dataset.page;

        pages.forEach(page => {
            page.classList.remove("active");
        });

        document
            .getElementById(pageName)
            .classList.add("active");

        navItems.forEach(nav => {
            nav.classList.remove("active");
        });

        item.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});


/*
 * PWA Service Worker
 */

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker.register("service-worker.js")
            .then(() => {
                console.log("Service Worker registered");
            })
            .catch(error => {
                console.log(
                    "Service Worker registration failed:",
                    error
                );
            });

    });

}