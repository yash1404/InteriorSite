

window.addEventListener("scroll", function () {

    var navigation = document.getElementById('navigation');

    if (window.scrollY > 90) {
        navigation.classList.add("sticky");
    }
    else {
        navigation.classList.remove("sticky");
    }
})
window.addEventListener("scroll", () => {


    if (window.scrollY > 600) {
        var dir = document.getElementById("dir");
        dir.style = "display:block"
    }
})