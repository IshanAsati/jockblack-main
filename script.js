// ===========================
// Navigation Toggle
// ===========================

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
    }
});

// ===========================
// Smooth Scrolling
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Active Navigation Link
// ===========================

const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    const scrollY = window.pageYOffset;
    const navHeight = document.querySelector('.nav').offsetHeight;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionId = section.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (correspondingLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                correspondingLink.classList.add('active');
            } else {
                correspondingLink.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
updateActiveLink();

// ===========================
// Skill Progress Animation
// ===========================

const skillBars = document.querySelectorAll('.skill-progress');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (barPosition < screenPosition) {
            bar.style.width = bar.style.getPropertyValue('--progress') || '0%';
        }
    });
};

// Initialize skill bars with 0 width
skillBars.forEach(bar => {
    const progress = bar.style.getPropertyValue('--progress');
    bar.style.setProperty('--progress', progress);
    bar.style.width = '0%';
});

window.addEventListener('scroll', animateSkillBars);
animateSkillBars();

// ===========================
// Form Validation & Submission
// ===========================

const contactForm = document.getElementById('contactForm');
const formStatus = document.querySelector('.form-status');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validation functions
const validators = {
    name: (value) => {
        if (!value.trim()) {
            return 'Name is required';
        }
        if (value.trim().length < 2) {
            return 'Name must be at least 2 characters';
        }
        return '';
    },
    
    email: (value) => {
        if (!value.trim()) {
            return 'Email is required';
        }
        if (!emailRegex.test(value)) {
            return 'Please enter a valid email address';
        }
        return '';
    },
    
    subject: (value) => {
        if (!value.trim()) {
            return 'Subject is required';
        }
        if (value.trim().length < 3) {
            return 'Subject must be at least 3 characters';
        }
        return '';
    },
    
    message: (value) => {
        if (!value.trim()) {
            return 'Message is required';
        }
        if (value.trim().length < 10) {
            return 'Message must be at least 10 characters';
        }
        return '';
    }
};

// Validate single field
function validateField(field) {
    const fieldName = field.name;
    const fieldValue = field.value;
    const errorElement = document.getElementById(`${fieldName}-error`);
    
    const errorMessage = validators[fieldName](fieldValue);
    
    if (errorMessage) {
        field.classList.add('error');
        errorElement.textContent = errorMessage;
        field.setAttribute('aria-invalid', 'true');
        return false;
    } else {
        field.classList.remove('error');
        errorElement.textContent = '';
        field.setAttribute('aria-invalid', 'false');
        return true;
    }
}

// Add real-time validation on blur
const formInputs = contactForm.querySelectorAll('.form-input');
formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        validateField(input);
    });
    
    // Clear error on input
    input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
            validateField(input);
        }
    });
});

// Form submission handler
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Clear previous status
    formStatus.textContent = '';
    formStatus.className = 'form-status';
    
    // Validate all fields
    let isValid = true;
    formInputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    if (!isValid) {
        formStatus.textContent = 'Please fix the errors above';
        formStatus.classList.add('error');
        // Focus on first error field
        const firstError = contactForm.querySelector('.form-input.error');
        if (firstError) {
            firstError.focus();
        }
        return;
    }
    
    // Get form data
    const formData = {
        name: contactForm.name.value.trim(),
        email: contactForm.email.value.trim(),
        subject: contactForm.subject.value.trim(),
        message: contactForm.message.value.trim()
    };
    
    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission (in a real application, this would send to a server)
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Log form data (for demonstration)
        console.log('Form submitted:', formData);
        
        // Show success message
        formStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
        formStatus.classList.add('success');
        
        // Reset form
        contactForm.reset();
        
        // Remove any error states
        formInputs.forEach(input => {
            input.classList.remove('error');
            input.setAttribute('aria-invalid', 'false');
            const errorElement = document.getElementById(`${input.name}-error`);
            if (errorElement) {
                errorElement.textContent = '';
            }
        });
        
    } catch (error) {
        // Show error message
        formStatus.textContent = 'Something went wrong. Please try again later.';
        formStatus.classList.add('error');
        console.error('Form submission error:', error);
    } finally {
        // Restore button state
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    }
});

// ===========================
// Intersection Observer for Fade-in Animations
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add fade-in animation to elements
const animatedElements = document.querySelectorAll('.portfolio-item, .skill-category, .contact-content > *');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===========================
// Keyboard Navigation Enhancement
// ===========================

// Trap focus in mobile menu when open
navToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        navToggle.focus();
    }
});

// ===========================
// Portfolio Item Keyboard Navigation
// ===========================

const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    // Make portfolio items focusable
    item.setAttribute('tabindex', '0');
    
    // Add keyboard interaction
    item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            // In a real application, this could open a modal or navigate to project details
            console.log('Portfolio item selected:', item.querySelector('.portfolio-title').textContent);
        }
    });
});

// ===========================
// Performance: Debounce scroll events
// ===========================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll-based functions
const debouncedSkillAnimation = debounce(animateSkillBars, 50);
const debouncedActiveLink = debounce(updateActiveLink, 50);

window.removeEventListener('scroll', animateSkillBars);
window.removeEventListener('scroll', updateActiveLink);
window.addEventListener('scroll', debouncedSkillAnimation);
window.addEventListener('scroll', debouncedActiveLink);

// ===========================
// Accessibility: Announce page changes for screen readers
// ===========================

function announcePageChange(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Add screen reader only class to CSS if not already present
if (!document.querySelector('style[data-sr-only]')) {
    const style = document.createElement('style');
    style.setAttribute('data-sr-only', 'true');
    style.textContent = `
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border-width: 0;
        }
    `;
    document.head.appendChild(style);
}

// ===========================
// Initialize
// ===========================

console.log('Portfolio website initialized');
