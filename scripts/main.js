// this IP points to Zac Garby's Hetzner box.
var registerURL = "http://157.90.155.24/register/"

function register() {
    var email = document.getElementById("email").value
    var req = new XMLHttpRequest()
    
    req.onload = function() {
        if (req.status == 200) {
            console.log("email stored")
            document.getElementById("register-error").innerHTML = ""
            document.getElementById("register-interest").innerHTML = "Thank you for registering your interest! We'll notify you when registration opens up."
        } else {
            showError(req.responseText)
        }
    }

    req.onerror = function() {
        console.error("Could not reach server")
        showError("Couldn't reach registration server. Please try again later.")
    }

    req.open("POST", registerURL, true)
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    req.send("email=" + email)
}

function showError(message) {
    document.getElementById("register-error").innerHTML = "Error! " + message
}