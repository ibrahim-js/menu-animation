let already_animated = false;
const timing = 500;

const menu = document.querySelector(".menu-wrapper");
const menu_buttons = document.querySelectorAll(".button-item > button");
const popup_close_buttons = document.querySelectorAll(".popup-close");

menu_buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        menu.classList.add("animate");
        
        const content_number = btn.getAttribute("data-for");
        
        document.querySelectorAll(".popup").forEach(popup => {
            popup.style.display = "none";
        });

        if(already_animated) {
            document.querySelector(`[data-content="${content_number}"]`).style.display = "block";
        } else {
            setTimeout(() => {
                document.querySelector(`[data-content="${content_number}"]`).style.display = "block";
            }, timing);
        }

        already_animated = true;
    });
});

popup_close_buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        already_animated = false;

        menu.classList.remove("animate");

        document.querySelectorAll(".popup").forEach(popup => {
            popup.style.display = "none";
        });
    });
});