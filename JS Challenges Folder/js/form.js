//CURRENT ISSUES//

//pop up form js//
function openForm() {
    document.getElementById("form").style.display = 'block';
}

function closeForm() {
    document.getElementById('form').style.display = 'none';
}

//end popup from js//

//add js validation//
function validation() {
    let x = document.forms['form']['phone'].value;
    if (x == "") {
        alert("Must enter your phone number!");
        return false;
    }
}
//keep in mind adding required in html makes browser check the validation without js// 