// display current date //
document.getElementById("current_date").innerHTML = Date();

addBtn = document.getElementById("add-btn")
amount = document.getElementById("amount")
date = document.getElementById("date")

document.getElementById('amount').innerHTML = "£";
// amount.value="£"

addBtn.addEventListener("click", function(e) {
    if(amount.innerHTML ===""){
        amount.className = "no-data"
        console.log("Please enter amount")
    }
    if(date.innerHTML ===""){
        date.className = "no-data"
        console.log("Please enter date")
    }
});