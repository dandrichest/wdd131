
// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('current-year').innerHTML = `&copy; ${currentYear} <span class="flower-symbol">✿</span> Daniel Oyeniyi <span class="flower-symbol">✿</span> Nigeria`;

// Get the last modified date of the document
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;