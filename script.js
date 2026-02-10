function validateAuth1Text() {
  // 👉 CHANGE THESE TO YOUR REAL ANSWERS
  const correctKissDate = "31-08-2025";   // DD-MM-YYYY
  const correctHandPlaces = ["Lulu mall", "lulu mall"]; // allowed variations

  // Get user input
  const kissDateInput = document.getElementById("kissDate").value.trim();
  const handPlaceInput = document.getElementById("handPlace").value
    .trim()
    .toLowerCase();

  // Validate date format (basic check)
  const datePattern = /^\d{2}-\d{2}-\d{4}$/;
  if (!datePattern.test(kissDateInput)) {
    document.getElementById("auth1Error").innerText =
      "Please enter the date in DD-MM-YYYY format 💭";
    return;
  }

  // Check answers
  const dateCorrect = kissDateInput === correctKissDate;
  const placeCorrect = correctHandPlaces.includes(handPlaceInput);

  if (dateCorrect && placeCorrect) {
    localStorage.setItem("auth1", "passed");
    window.location.href = "auth2.html";
  } else {
    document.getElementById("auth1Error").innerText =
      "Almost… memory can be tricky. Try once more ❤️";
  }
}

function authenticate() {
  let q1 = document.getElementById("q1").value;
  let q2 = document.getElementById("q2").value;

  if (q1 === "right" && q2 === "right") {
    window.location.href = "question.html";
  } else {
    document.getElementById("error").innerText =
      "Hmm… are you really my favorite person? 💭";
  }
}
function validateAuth1() {
  const q1 = document.getElementById("a1q1").value;
  const q2 = document.getElementById("a1q2").value;
  const q3 = document.getElementById("a1q3").value;

  if (q1 === "right" && q2 === "right" && q3 === "right") {
    localStorage.setItem("auth1", "passed");
    window.location.href = "auth2.html";
  } else {
    document.getElementById("auth1Error").innerText =
      "That didn’t feel quite right… try again 💭";
  }
}

function chooseMe() {
  const q1 = document.getElementById("q1").value;
  const q2 = document.getElementById("q2").value;
  const q0 = document.getElementById("q0").value;

  if (q1 === "right" && q2 === "right" && q0 === "right") {
    localStorage.setItem("auth2", "passed");
    startCongratsHearts();
  } else {
    document.getElementById("auth2Error").innerText =
      "You’re close… think with your heart ❤️";
  }
}
function startCongratsHearts() {
  const container = document.getElementById("hearts-container");
  const card = document.getElementById("auth2Card");

  if (navigator.vibrate) navigator.vibrate(40);

  // Start hearts
  const interval = setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.innerText = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    container.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 150);

  // Stop hearts + show popup
  setTimeout(() => {
    clearInterval(interval);

    if (card) card.classList.add("hide");

    setTimeout(() => {
      document.getElementById("congratsPopup").style.display = "flex";
    }, 300);
  }, 1000);
}

function goToBigQuestion() {
  window.location.href = "question.html";
}

function handleYes() {
  // Show agreement link
  document.getElementById("agreementNote").style.display = "block";

  // Disable next until agreement accepted
  document.getElementById("nextBtn").disabled = true;

  // Save intent
  localStorage.setItem("saidYes", "true");
}

function markAgreementViewed() {
  localStorage.setItem("agreementViewed", "true");
}

function unlockYes() {
  const checked = document.getElementById("consentCheck").checked;
  document.getElementById("yesBtn").disabled = !checked;
}
function startFloatingBackground() {
  const container = document.getElementById("floating-bg");
  if (!container) return;

  const symbols = [
    { char: "❤️", color: "#e63946" },
    { char: "🤍", color: "#ffffff" },
    { char: "🎈", color: "#e63946" },
    { char: "🎈", color: "#ffffff" }
  ];

  setInterval(() => {
    const item = document.createElement("div");
    const choice = symbols[Math.floor(Math.random() * symbols.length)];

    item.className = "floating-item";
    item.innerText = choice.char;
    item.style.color = choice.color;

    item.style.left = Math.random() * 100 + "vw";
    item.style.fontSize = 26 + Math.random() * 26 + "px";
    item.style.animationDuration = 6 + Math.random() * 6 + "s";

    container.appendChild(item);

    setTimeout(() => item.remove(), 12000);
  }, 600); // controls density
}

// Start automatically
document.addEventListener("DOMContentLoaded", startFloatingBackground);



function goNext() {
  if (localStorage.getItem("agreementAccepted") === "true") {
    window.location.href = "yes.html";
  } else {
    alert("Just one last step ❤️");
  }
}

function yes() {
  localStorage.setItem("unlocked", "true");
  window.location.href = "yes.html";
}

function no() {
  window.location.href = "no.html";
}

function goBack() {
  window.location.href = "question.html";
}

function goLetter() {
  window.location.href = "letter.html";
}
function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

function goAuth() {
  window.location.href = "auth1.html";
}
function startHearts() {
  const container = document.getElementById("hearts-container");
  const card = document.getElementById("mainCard")


  if (navigator.vibrate) navigator.vibrate(40);

  const interval = setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.innerText = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 150);

  setTimeout(() => {
    clearInterval(interval);

    // Hide the card smoothly
    card.classList.add("hide");

    // Show popup after card fades
    setTimeout(openPopup, 300);
  }, 1000);
}

