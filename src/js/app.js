import { changeColor } from "./modules/bg.js";

try {
    const bg = document.querySelector('.bg-top');
    if (bg) {
        changeColor(bg, 1)
    }
} catch (error) {
    console.log(error);
}

if (window.devicePixelRatio !== 1) {    
    let dpt = window.devicePixelRatio;
    let widthM = window.screen.width * dpt;
    let widthH = window.screen.height * dpt;
    document.write('<meta name="viewport" content="width=' + widthM+ ', height=' + widthH + '">');  
}  