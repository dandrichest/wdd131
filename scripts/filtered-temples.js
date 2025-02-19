document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        // Toggle hamburger icon between 'X' and '≡'
        if (navMenu.classList.contains('active')) {
            hamburger.innerHTML = '&times;'; // 'X' symbol
        } else {
            hamburger.innerHTML = '&#9776;'; // Hamburger symbol
        }
    });


    // Function to update the footer with the current year and last modified date
    function updateFooter() {
        const currentYear = new Date().getFullYear();
        const lastModified = document.lastModified;
        
        document.getElementById('current-year').innerHTML = `&copy; ${currentYear} <span class="flower-symbol">✿</span>Daniel Oyeniyi<span class="flower-symbol">✿</span>Nigeria`;
        document.getElementById('lastModified').innerHTML = `Last Updated: ${lastModified}`;
    }
    
    updateFooter();

    
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  {
    templeName: "Recife Brazil",
    location: "Parnamirim, Recife PE Brazil",
    dedicated: "2000, December, 15",
    area: 37200,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/recife-brazil/800x500/recife-brazil-temple-lds-700211-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Cantonments, Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
  }
  
];

document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("nav-menu");
  const temples = document.querySelectorAll(".temples figure");

  navMenu.addEventListener("click", (event) => {
    const filter = event.target.textContent;

    temples.forEach((temple) => {
      const dedicationDate = new Date(temple.querySelector("p:nth-of-type(2) b").textContent);
      const size = parseInt(temple.querySelector("p:nth-of-type(3) b").textContent);

      if (filter === "Home") {
        temple.style.display = "block";
      } else if (filter === "Old" && dedicationDate.getFullYear() < 1900) {
        temple.style.display = "block";
      } else if (filter === "New" && dedicationDate.getFullYear() > 2000) {
        temple.style.display = "block";
      } else if (filter === "Large" && size > 90000) {
        temple.style.display = "block";
      } else if (filter === "Small" && size < 10000) {
        temple.style.display = "block";
      } else {
        temple.style.display = "none";
      }
    });
  });
});
