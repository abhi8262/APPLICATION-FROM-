// Show alert message
//function showAlert(message) {
   // const alertBox = document.createElement("div");
   // alertBox.classList.add("alert");
   // alertBox.innerText = message;
 //document.body.appendChild(alertBox);

   // alertBox.style.display = "block";

   // setTimeout(() => {
        //alertBox.remove();
  //  }, 3000);
//}

// Button actions
document.addEventListener("DOMContentLoaded", () => {
    
    const interestedBtn = document.querySelector(".primary");
    const shareBtn = document.querySelector(".secondary");

    // Interested button
    interestedBtn.addEventListener("click", () => {
        showAlert("✅ You have applied successfully!");
    });

    // Share button
    shareBtn.addEventListener("click", () => {
        const subject = "Angular Developer Job";
        const body = "Check out this job opportunity!";
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
    });

}); //
// Show alert message
function showAlert(message) {
    const alertBox = document.createElement("div");
    alertBox.classList.add("alert");
    alertBox.innerText = message;

    document.body.appendChild(alertBox);
    alertBox.style.display = "block";

    setTimeout(() => {
        alertBox.remove();
    }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
    
    const interestedBtn = document.querySelector(".primary");
    const shareBtn = document.querySelector(".secondary");

    // Interested button
    interestedBtn.addEventListener("click", () => {
        showAlert("✅ You have applied successfully!");
    });

    // Share button (EMAIL FIXED)
    shareBtn.addEventListener("click", () => {
        const email = "abhijitkaluke3@gmail.com";
        const subject = "Application for Angular Developer";
        const body = "Hello,\n\nI am interested in the Angular Developer position.\n\nThank you.";

        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });

});
