document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    fetch(event.target.action, {
        method: "POST",
        headers: {
            "Accept": "application/json"
        },
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert("Your message has been sent!");
            event.target.reset();
        } else {
            throw new Error("Something went wrong while submitting the form.");
        }
    })
    .catch(error => {
        alert("There was an error sending your message. Please try again later.");
        console.error(error);
    });
});


