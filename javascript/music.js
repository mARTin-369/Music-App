
//in case of classes htmlcollection use index to get element
const extendSidebar = () => {
    let element = document.getElementById("side-bar")
    let left = element.style.left
    if(left == '-300px')    element.style.left = "0px";
    else    element.style.left = "-300px";;
}