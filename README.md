# Modern Minimalist Portfolio Website

A clean, elegant, and fully responsive portfolio website showcasing projects, skills, and contact information.

## 🌟 Features

### Design
- **Modern Minimalist Aesthetic**: Clean design with a focus on content and user experience
- **Responsive Layout**: Seamlessly adapts to all screen sizes (desktop, tablet, mobile)
- **Smooth Animations**: Subtle transitions and scroll-based animations
- **Professional Color Scheme**: Carefully chosen palette for maximum readability

### Sections
1. **Hero/Introduction**: Eye-catching landing section with call-to-action buttons
2. **Portfolio**: Showcase of recent projects with descriptions and technology tags
3. **Skills**: Visual representation of technical expertise with animated progress bars
4. **Contact**: Interactive form with validation and contact information

### Functionality
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Form Validation**: Real-time validation with helpful error messages
- **Smooth Scrolling**: Elegant navigation between sections
- **Active Link Highlighting**: Visual feedback for current section
- **Interactive Elements**: Hover effects and animations throughout

### Accessibility
- **Semantic HTML5**: Proper structure for screen readers
- **ARIA Labels**: Enhanced accessibility for assistive technologies
- **Keyboard Navigation**: Full support for keyboard-only users
- **Focus Indicators**: Clear visual feedback for focused elements
- **Reduced Motion Support**: Respects user preferences for motion
- **Dark Mode Support**: Automatic theme based on system preferences

## 🚀 Quick Start

### Viewing the Website

Simply open `index.html` in any modern web browser.

### Using a Local Server

For the best experience, serve the files using a local web server:

**Python:**
```bash
python -m http.server 8000
# or
python3 -m http.server 8000
```

**Node.js (using npx):**
```bash
npx http-server -p 8000
```

Then navigate to `http://localhost:8000` in your browser.

## 📁 File Structure

```
├── index.html       # Main HTML structure
├── styles.css       # All styles and responsive design
├── script.js        # Interactive functionality
├── .gitignore       # Git ignore rules
├── README.md        # This file
├── LICENSE          # MIT License
├── main.py          # Legacy Python blackjack game
└── art.py           # Legacy game assets
```

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --color-primary: #2c3e50;    /* Main dark color */
    --color-accent: #3498db;     /* Accent/link color */
    --color-text: #333333;       /* Main text color */
    /* ... more variables */
}
```

### Adding Projects

Edit the portfolio section in `index.html`:

```html
<article class="portfolio-item">
    <div class="portfolio-image">
        <div class="portfolio-placeholder"></div>
    </div>
    <div class="portfolio-content">
        <h3 class="portfolio-title">Your Project Name</h3>
        <p class="portfolio-description">Project description here</p>
        <div class="portfolio-tags">
            <span class="tag">Technology 1</span>
            <span class="tag">Technology 2</span>
        </div>
    </div>
</article>
```

### Updating Skills

Modify the skills section in `index.html` and adjust the `--progress` CSS variable:

```html
<li class="skill-item">
    <span class="skill-name">Skill Name</span>
    <div class="skill-bar">
        <div class="skill-progress" 
             style="--progress: 85%" 
             role="progressbar" 
             aria-valuenow="85" 
             aria-valuemin="0" 
             aria-valuemax="100">
        </div>
    </div>
</li>
```

### Contact Information

Update the contact details in the contact section of `index.html`:

```html
<li class="contact-item">
    <svg class="contact-icon"><!-- icon SVG --></svg>
    <span>your-email@example.com</span>
</li>
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🧪 Testing

The website has been tested for:
- ✅ Responsive design (375px - 1920px+)
- ✅ Form validation and submission
- ✅ Mobile navigation toggle
- ✅ Accessibility with screen readers
- ✅ Keyboard navigation
- ✅ Cross-browser compatibility

## 📝 Form Submission

The contact form currently simulates submission (logs to console). To integrate with a backend:

1. Update the form submission handler in `script.js`
2. Replace the simulated API call with your actual endpoint:

```javascript
// In script.js, update the form submission:
const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
});
```

Popular form handling services:
- [Formspree](https://formspree.io/)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- [EmailJS](https://www.emailjs.com/)

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (Vanilla)**: No frameworks required
- **SVG**: Scalable vector icons

## 🌐 Deployment

### GitHub Pages

1. Go to repository Settings
2. Navigate to Pages section
3. Select branch and root folder
4. Save and wait for deployment

### Netlify

1. Connect your GitHub repository
2. Set build command: (leave empty)
3. Set publish directory: `/`
4. Deploy!

### Vercel

1. Import your GitHub repository
2. No build configuration needed
3. Deploy!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Ishan Asati**
- GitHub: [@IshanAsati](https://github.com/IshanAsati)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

**Note**: This portfolio website replaces the previous Python blackjack game. The legacy game files (`main.py`, `art.py`) are kept for reference but are not used by the portfolio website.
