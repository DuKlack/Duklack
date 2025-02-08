function setActiveButton() {
    let buttons = document.querySelectorAll(".nav-links a"); // Select all anchor tags
    let currentFile = location.pathname.split("/").pop().split("#")[0].split("?")[0]; // Get file name without hash or query

    buttons.forEach(button => {
        let buttonFile = button.getAttribute("href").split("/").pop().split("#")[0].split("?")[0];
        console.log(`Checking button: ${buttonFile}`); // Debugging log
        console.log(currentFile)

        if (buttonFile === currentFile) {
            
            button.style.color= "red"; // Correct class addition
            console.log(1)
        } 
    });
}

// Ensure buttons exist before applying function
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded");
    console.log(document.querySelectorAll(".nav-links a")); // Debugging log
    setActiveButton();
});

window.addEventListener("hashchange", setActiveButton);
