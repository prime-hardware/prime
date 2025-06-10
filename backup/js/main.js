// Search functionality
const searchInput = document.getElementById('searchInput');
const productsContainer = document.getElementById('productsContainer');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const products = productsContainer.getElementsByClassName('product-card');
        
        Array.from(products).forEach(product => {
            const productName = product.querySelector('.card-title').textContent.toLowerCase();
            const productDesc = product.querySelector('.card-text').textContent.toLowerCase();
            
            if (productName.includes(searchTerm) || productDesc.includes(searchTerm)) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        });
    });
}

// WhatsApp button functionality
const whatsappButton = document.querySelector('.whatsapp-button a');
if (whatsappButton) {
    whatsappButton.addEventListener('click', (e) => {
        e.preventDefault();
        const phoneNumber = '+911234567890'; // Replace with your actual phone number
        const message = encodeURIComponent('Hi, I found your website and would like to know more about your products.');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add any additional JavaScript functionality here
