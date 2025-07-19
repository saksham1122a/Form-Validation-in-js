function validateForm(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    let regExname = new RegExp(/^\d/) // Regular expression to check if name starts with a digit here ^ refers to the string starts and d refers to digits
    let regExEmail = new RegExp(/^[\w]+@[a-z]+\.[a-z]{2,}$/) // [\w] refers to any word character (alphanumeric & underscore), + means one or more, @ is the at symbol, [a-z]+ refers to one or more lowercase letters, \. is a literal dot, and [a-z]{2,} means two or more lowercase letters for the domain extension and $ represents the string ends.
    if(name === ""){
        alert("Name field cannot be empty");
        return false;  // Prevent form submission if name is empty
    }
    if(email === ""){
        alert("Email field cannot be empty");
        return false;  // Prevent form submission if email is empty
    }
    else if (phone === "") {
        alert("Phone field cannot be empty");
        return false;  // Prevent form submission if phone is empty
    }
    else if (regExname.test(name)) {
        alert("Name cannot start with a digit");  // Alert if name starts with a digit
        return
    } else if (phone.length!== 10) {
        alert("Phone number is invalid!");  // Alert if phone number is not 10 digits
        return false;  // Prevent form submission if phone number is invalid
    } else if (!regExEmail.test(email)) {
        alert("Email is invalid!");  // Alert if email does not match the regex pattern
        return false;  // Prevent form submission if email is invalid
    } else {
        alert("Form submitted successfully!");  // Alert if all validations pass
        return true;  // Allow form submission
    }
}