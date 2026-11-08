

document.getElementById("bewerbungsformular")
    .addEventListener("submit", function(event) {

        const name = document.getElementById("fahrername").value;

        document.getElementById("formularmeldung").textContent =
            "Vielen Dank, " + name +
            "! Deine Bewerbung wird übermittelt.";

    });

    