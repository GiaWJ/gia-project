// Responsive Menu Toggle
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu on link click (for mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Fetch quote from quotable.io
const quoteElement = document.getElementById("quote");
const newQuoteBtn = document.getElementById("new-quote");

async function fetchQuote() {
  try {
    const response = await fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "bf6477706emsh0cef48e0c6d10e1p1f1547jsnda7f9a4d41a4",
        "X-RapidAPI-Host": "quotes15.p.rapidapi.com"
      }
    });
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    quoteElement.textContent = `"${data.content}" — ${data.originator.name}`;
  } catch (error) {
    console.error("Error fetching quote:", error);
    quoteElement.textContent = "Couldn't load quote. Please try again.";
  }
}

fetchQuote();
newQuoteBtn.addEventListener("click", fetchQuote);