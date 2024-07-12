console.log("JavaScript connected 🐟");
var container = document.getElementById("three-frames-container");

container.addEventListener("mousedown", (e)=>{
    xdis = e.clientX - container.offsetLeft - container.children[0].offsetWidth;
    ydis = e.clientY - container.offsetTop - container.children[1].offsetHeight;
    document.addEventListener("mousemove", setup);
    container.addEventListener("mouseup", ()=>{
        document.removeEventListener("mousemove", setup);
    })
})

function setup(e){
    var x = e.clientX - container.offsetLeft - (xdis);
    var y = e.clientY - container.offsetTop - (ydis);
    if(y > 0 && y <= container.offsetHeight - 10) container.style.gridTemplateRows = y + "px";
    if(x > 0 && x <= container.offsetWidth - 10) container.style.gridTemplateColumns = x + "px";
    container.children[1].innerHTML = x;
    container.children[2].innerHTML = y;
    if(x < 1){
        container.style.transition = "100ms ease-in-out"
        container.style.columnGap = "0px";
        setTimeout(()=>{container.style.transition = ""},100)
    }else{
        container.style.columnGap = "var(--container-gap)";
    }
    if(x >= container.offsetWidth - 10){
        container.style.transition = "100ms ease-in-out"
        container.style.gridTemplateColumns = container.offsetWidth + "px";
        setTimeout(()=>{container.style.transition = ""},100)
    }

    if(y < 1){
        container.style.transition = "100ms ease-in-out"
        container.style.rowGap = "0px";
        setTimeout(()=>{container.style.transition = ""},100)
    }else{
        container.style.rowGap = "var(--container-gap)";
    }
    if(y >= container.offsetHeight - 10){
        container.style.transition = "100ms ease-in-out"
        container.style.gridTemplateRows = container.offsetHeight + "px";
        setTimeout(()=>{container.style.transition = ""},100)
    }
}