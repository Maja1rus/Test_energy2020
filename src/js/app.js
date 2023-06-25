import { menu } from "./modules/menu.js";
import { changeColor } from "./modules/bg.js";

// menu
try {
    const header = document.querySelector('.header');
    if (header) {
        menu(header)
    }
} catch (error) {
    console.log(error);
}


try {
    const bg = document.querySelector('.bg-top');
    if (bg) {
        changeColor(bg, 1)
    }
} catch (error) {
    console.log(error);
}