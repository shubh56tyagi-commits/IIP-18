
const form = document.getElementById("myForm");

form.addEventListener("submit", function (ravan) {
    ravan.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    var message = "Registration Successful";

    document.getElementById("result").innerHTML =
        "<i>" + "<font color='hotpink'>" +
        message +
        "<br>" + "<hr>" +
        "My name is : " +
        name + "<hr>" +
        "<br>" +
        "My Age is : " +
        age + "<hr>" +
        "<br>";
});
