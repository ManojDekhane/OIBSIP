let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerHTML;

        if (value == "=") {
            try {
                string = eval(string);
                document.querySelector("input").value = string;
            } catch {
                document.querySelector("input").value = "Error";
                string = "";
            }
            
        } else if (value == "C") {
            string = "";
            document.querySelector("input").value = string;
        } else {
            if(value == "&times;") {
                string += "*";
            } else if(value == "&divide;") {
                string += "/";
            } else {
                string += value;
            }
        }
        document.querySelector("input").value = string;
    
    })
})