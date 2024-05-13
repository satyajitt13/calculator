let str = "";
let buttons = document.querySelectorAll(".button");
let input = document.querySelector(".input");
input.focus();

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === '=') {
            str = eval(str);
            document.querySelector('input').value = str
        }
        else if (e.target.innerHTML === 'Clear') {
            str = "";
            document.querySelector('input').value = str;
            input.focus();
        } else {
            str = str + e.target.innerHTML;
            document.querySelector('input').value = str;
        }
    })
    let bool = true
    input.addEventListener("keydown", (event) => {
        if (bool) {
            if (event.key === "Enter") {
                str = input.value;
                str = eval(str);
                input.value = str
                input.focus();
                bool = false
            }
        }else{
            if (event.key === "Enter") {
                input.value = "";
                bool = true;
            }
        }
    })
})
