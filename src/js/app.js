import { changeColor } from "./modules/bg.js";

try {
    const bg = document.querySelector('.bg-top');
    if (bg) {
        changeColor(bg, 1)
    }
} catch (error) {
    console.log(error);
}