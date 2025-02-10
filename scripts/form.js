document.addEventListener('DOMContentLoaded', function() {
            const products = [
                { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
                { id: "fc-2050", name: "power laces", averagerating: 4.7 },
                { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
                { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
                { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
            ];

            const productsSelect = document.getElementById('products');
            products.forEach(product => {
                const option = document.createElement('option');
                option.value = product.id;
                option.textContent = product.name;
                productsSelect.appendChild(option);
            });

            const ratingInputs = document.querySelectorAll('.rating input');
            ratingInputs.forEach(input => {
                input.addEventListener('change', function() {
                    console.log('Selected rating:', this.value);
                });
            });

            let reviewCount = localStorage.getItem('reviewCount');
            reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
            localStorage.setItem('reviewCount', reviewCount);

            if(document.getElementById('review-counter')) {
                document.getElementById('review-counter').textContent = `You have submitted ${reviewCount} reviews.`;
            }

            updateFooter();
        });

        // Function to update the footer with the current year and last modified date
        function updateFooter() {
            const currentYear = new Date().getFullYear();
            const lastModified = document.lastModified;
            document.getElementById('current-year').innerHTML = `&copy; ${currentYear} <span class="flower-symbol">✿</span>Daniel Oyeniyi<span class="flower-symbol">✿</span>Nigeria`;
            document.getElementById('lastModified').innerHTML = `Last Updated: ${lastModified}`;
        }