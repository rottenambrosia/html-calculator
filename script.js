let display = document.getElementById("calculator_display");
//defining factorial
function factorial (n) {
    if (n!=1) {
        return n*factorial(n-1);
    }
    else {
        return 1;
    }
}
//defining keypresses for various cases
function keypress (button) {
    const displayedValue = document.getElementById("calculator_display").innerHTML;
    const value = button.innerHTML;


    if (document.getElementById("calculator_display").innerHTML==="0") {
        if (value === "0" || value === "1" || value === "2" || value === "3" || value === "4" || value === "5" || value === "6" || value === "7" || value === "8" || value === "9" || value === "0") {
            document.getElementById("calculator_display").innerHTML=value;
        }
        else if (value === "AC") {
            document.getElementById("calculator_display").innerHTML = "0";
        }
        else if (value === "+" || value === "-" || value === "*" ||value === "/" || value === "²" || value === "%" || value === ")" || value === ".") {
            document.getElementById("calculator_display").innerHTML += value;
        }
        else if (value === "(") {
            document.getElementById("calculator_display").innerHTML += ("*"+value);
        }
        else if (value==="ⁿ") {
            document.getElementById("calculator_display").innerHTML+="**"
        }
    }

    else {
        if (value === "0" || value === "1" || value === "2" || value === "3" || value === "4" || value === "5" || value === "6" || value === "7" || value === "8" || value === "9" || value === "0") {
            document.getElementById("calculator_display").innerHTML+=value;
        }
        else if (value === "AC") {
            document.getElementById("calculator_display").innerHTML = "0";
        }
        else if (value === "+" || value === "-" || value === "*" ||value === "/" || value === ")") {
            document.getElementById("calculator_display").innerHTML += value;
        }
        else if (value === "rem") {
            document.getElementById("calculator_display").innerHTML += "%";
        }
        else if (value === "²")  {
            document.getElementById("calculator_display").innerHTML += "**2"
        }
        else if (value === "(") {
            if (document.getElementById("calculator_display").innerHTML.charCodeAt(document.getElementById("calculator_display").innerHTML.length-1)>=48 && document.getElementById("calculator_display").innerHTML.charCodeAt(document.getElementById("calculator_display").innerHTML.length-1)<=57) {
                document.getElementById("calculator_display").innerHTML += ("*"+value);
            }
            else {
                document.getElementById("calculator_display").innerHTML += value;
            }
        }
        else if (value==="ⁿ") {
            document.getElementById("calculator_display").innerHTML+="**"
        }
        else if (value === "⌫") {
            if (document.getElementById("calculator_display").innerHTML.length>1) {
                let newValue = "";
                for (let i = 0; i < displayedValue.length-1; i++) {
                    newValue+=displayedValue.charAt(i);
                }
                document.getElementById("calculator_display").innerHTML = newValue;
            }
            else {
                document.getElementById("calculator_display").innerHTML = 0;
            }
        }
        else if (value === ".") {
            if (document.getElementById("calculator_display").innerHTML.charCodeAt(document.getElementById("calculator_display").innerHTML.length-1)>=48 && document.getElementById("calculator_display").innerHTML.charCodeAt(document.getElementById("calculator_display").innerHTML.length-1)<=57) {
                document.getElementById("calculator_display").innerHTML += value;
            }
            else {
                document.getElementById("calculator_display").innerHTML += "0.";
            }
        }
        else if (value === "!") {
            document.getElementById("calculator_display").innerHTML = factorial(eval(document.getElementById("calculator_display").innerHTML)).toString();
        }

        else if (value === "=") {
            try { document.getElementById("calculator_display").innerHTML = eval(document.getElementById("calculator_display").innerHTML).toString(); }
            catch {document.getElementById("calculator_display").innerHTML="Error";}
        }
    }        
}