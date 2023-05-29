function validation() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("msg").value;

    if (firstname == "" || lastname == "" || email == "" || message == "") {
        alert("Isi Form dengan benar!")
    } else {
        alert("Data berhasil Diterima :" +
            "\nName : " + firstname + lastname +
            "\nEmail : " + email +
            "\nMessage : " + message);
        return;
    }
};