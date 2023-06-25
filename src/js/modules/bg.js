export function changeColor(bg, curNumber){

    curNumber++;
    
    if(curNumber > 2){
        curNumber = 1;
    }

    bg.setAttribute('data-js-bg', curNumber);

    if (document.documentElement.clientWidth > 767) {
        setTimeout(function(){changeColor(bg, curNumber)}, 6000);  
    } 
}