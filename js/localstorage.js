// localStorage.setItem("number", 1);

// console.log(localStorage.getItem("number"));

// localStorage.removeItem("number");

// localStorage.clear();

window.addEventListener("DOMContentLoaded", function() {

    let checkbox = document.getElementById('rememberMe'),
        change = document.getElementById('change'),
        form = document.getElementsByTagName('form')[0];

    if(localStorage.getItem("isChecked") === "true") {
        checkbox.checked = true;
    };

    if(localStorage.getItem('bg') === 'changed'){
        form.style.backgroundColor = "#ff4766";
    };

    checkbox.addEventListener("click", function() {
        localStorage.setItem("isChecked", true);
    });

    change.addEventListener('click', function(){
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = "#ff4766";
    });

    let persone = {
        name: "alex",
        age: 20,
        tech : ["mobile", "notebook"]
    }

    let serialzedPersone = JSON.stringify(persone);
    localStorage.setItem("alex", serialzedPersone);

});