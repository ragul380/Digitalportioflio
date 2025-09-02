// ============================

// Profile Picture Upload

// ============================

document.getElementById("uploadBtn").addEventListener("change", previewPhoto);

function previewPhoto(event) {

  var reader = new FileReader();

  reader.onload = function () {

    var output = document.getElementById("profilePic");

    output.src = reader.result;

  };

  reader.readAsDataURL(event.target.files[0]);

}

// ============================

// Mobile Navigation (Hamburger Menu)

// ============================

// Create hamburger button dynamically

const nav = document.querySelector("nav");

const hamburger = document.createElement("button");

hamburger.innerHTML = "☰";

hamburger.id = "hamburger";

hamburger.style.display = "none"; // hidden on large screens

hamburger.style.fontSize = "24px";

hamburger.style.background = "transparent";