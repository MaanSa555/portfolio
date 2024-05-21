checkbox = document.querySelector(".checkbox").querySelectorAll("a");
console.log(checkbox);

checkbox.array.forEach(element => {
    
    element.addeventlistener("click",function(){
        checkbox.forEach(nav=>nav.classList.remove("active"))
        this.classList.aadd("active");
    })
});