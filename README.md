# Prime Hardware Website

This is a static website for Prime Hardware, showcasing wholesale hardware products and price lists.

## Directory Structure
```
prime-hardware/
├── index.html                # Homepage (Brands list: Havells, Orient, etc.)
├── categories.html           # Lists product categories like Fans, Wires, Paints
├── products.html             # Shows products with thumbnails, prices
├── product-detail.html       # Individual product view
├── qr-downloads.html         # Price lists and QR code download links
├── contact.html              # Contact info and WhatsApp button
├── /assets/                  # Contains all media files
│   ├── images/              # Product and banner images
│   ├── pdfs/                # Price lists (e.g., havells-price.pdf)
│   └── qr/                  # QR codes linked to downloadable files
├── /css/                     # Stylesheets
│   └── style.css            # Main stylesheet
├── /js/                      # JavaScript files
│   └── main.js              # Main JavaScript file
└── README.md                # This file
```

## How to Update Content

### Text Content
- Edit text directly in the HTML files using the `<!-- Edit here -->` comments
- Update product descriptions in the `products.html` file
- Update price lists in the `qr-downloads.html` file
- Update contact information in the `contact.html` file

### Images
1. Place product images in `/assets/images/`
2. Update image paths in the HTML files
3. Ensure images are optimized for web (max 1920x1080)

### Price Lists
1. Add PDF price lists in `/assets/pdfs/`
2. Update download links in `qr-downloads.html`
3. Generate QR codes for downloads and place them in `/assets/qr/`

### WhatsApp Integration
1. Update the WhatsApp phone number in all files
2. Customize the WhatsApp message template
3. Add WhatsApp icon to `/assets/images/whatsapp-icon.png`

## Deployment to GitHub Pages

1. Create a new GitHub repository
2. Initialize git in your project directory
3. Add all files using `git add .`
4. Commit with `git commit -m "Initial commit"`
5. Push to GitHub
6. Go to GitHub repository settings -> Pages
7. Set the source to your main branch
8. Wait a few minutes for the site to be live

## Requirements
- Modern web browser
- Internet connection
- GitHub account for deployment

## Notes
- All internal links use relative paths
- The site is mobile-responsive
- Uses Bootstrap 5 for styling
- Includes a search functionality for products
- Has a floating WhatsApp button for quick contact
"# home" 
"# home" 
