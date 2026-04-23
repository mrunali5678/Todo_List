let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    let item = document.createElement('li');
    item.innerText = inp.value;

    let delBtn = document.createElement('button');
    delBtn.innerText = "delete";
    delBtn.classList.add('delete');

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

let delBtns = document.querySelectorAll(".delete");

ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON") {
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("deleted");
    } 
});
// for(delBtn of delBtns) {
//     delBtn.addEventListener("click", function() {
//         let par = this.parentElement;
//         par.remove();
//         console.log(par);
//     });
// }
