document.getElementById("pythSubmitButton").onclick = function () {
    pytha = document.getElementById("aPythText").value
    pytha = Number(pytha)

    pythb = document.getElementById("bPythText").value
    pythb = Number(pythb)

    pythc = Math.sqrt(Math.pow(pytha, 2) + Math.pow(pythb, 2))
    document.getElementById("cPythLabel").innerHTML = "Side C:" + pythc
}

document.getElementById("calcSubmitButton").onclick = function () {
    calca = document.getElementById("calcFirstInput").value
    calca = Number(calca)

    calcb = document.getElementById("calcSecondInput").value
    calcb = Number(calcb)

    calcOperator = document.getElementById("calcOperator")

    if (calcOperator = "+") {
        document.getElementById("calcOutput").innerHTML = "Output:" + calca + calcb
    }
    if (calcOperator = "-") {
        document.getElementById("calcOutput").innerHTML = "Output:" + calca - calcb
    }
    if (calcOperator = "*") {
        document.getElementById("calcOutput").innerHTML = "Output:" + calca * calcb
    }
    if (calcOperator = "/") {
        document.getElementById("calcOutput").innerHTML = "Output:" + calca / calcb
    }
    if (calcOperator = "**") {
        document.getElementById("calcOutput").innerHTML = "Output:" + calca ** calcb
    }
}
