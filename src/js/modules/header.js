const minOffset = 20;
window.onscroll = function () {
    let has_class = document.body.classList.contains("white-header");

    if (minOffset < document.documentElement.scrollTop) {
        if (!has_class) {
            document.body.classList.add("white-header");
            document.body.classList.add("scrolled");
        }
    } else if (has_class) {
        document.body.classList.remove("white-header")
        document.body.classList.remove("scrolled")
    }
}
