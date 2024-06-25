const btnE1 = document.getElementById("calculate");
const billinput = document.getElementById("bill");
const tipinput = document.getElementById("tip");
const totalspan = document.getElementById("total");

function caltotal() {
    const billValue = billinput.value;
    const tipValue = tipinput.value;
    const totalvalue = billValue * (1 + tipValue / 100);
    totalspan.innerText = totalvalue.toFixed(2);
}

btnE1.addEventListener("click", caltotal);